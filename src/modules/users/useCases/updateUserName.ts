import { IUserRepo } from "../repositories/IUserRepo";
import { UseCase } from "../../../shared/core/UseCase";

type Request = {
  userId: string;
  userName: string;
};

type Response = void;

export class UpdateUserName implements UseCase<Request, Promise<Response>> {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  public async execute(request: Request): Promise<Response> {
    const user = await this.userRepo.getUserByUserId(request.userId);

    if (!user) {
      throw new Error("User not found");
    }

    user.changeName(request.userName);

    await this.userRepo.save(user);
  }
}
