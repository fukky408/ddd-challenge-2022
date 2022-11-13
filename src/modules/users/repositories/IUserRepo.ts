import { User } from "../domain/user";
// import { UserEmail } from "../domain/userEmail";
// import { UserName } from "../domain/userName";

export interface IUserRepo {
  exists(userEmail: string): Promise<boolean>;
  getUserByUserId(userId: string): Promise<User>;
  getUserByUserName(userName: string): Promise<User>;
  save(user: User): Promise<void>;
}
