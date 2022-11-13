import { User } from "../domain/user";
// import { UserEmail } from "../domain/userEmail";

export type IUserRepo = {
  exists(userEmail: string): Promise<boolean>;
  getUserByUserId(userId: string): Promise<User | null>;
  save(user: User): Promise<void>;
};
