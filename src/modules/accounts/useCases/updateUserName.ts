import { IUserRepo } from "../repositories/IUserRepo";
import { UseCase } from "../../../shared/core/UseCase";
import { UserName } from "../domain/UserName";

type Request = {
  userId: string;
  userName: string;
};

type Response = boolean;

export class UpdateUserName implements UseCase<Request, Promise<Response>> {
  private userRepo: IUserRepo;

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo;
  }

  public async execute(request: Request): Promise<Response> {
    const user = await this.userRepo.findUserById(request.userId);
    if (!user) {
      throw new Error(`userId=${request.userId} not found`);
    }

    const userName = new UserName(request.userName);
    const updated = user.changeName(userName);
    const res = await this.userRepo.save(updated);
    return res;
  }
}
