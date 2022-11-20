import { User } from "../domain/User";

export type IUserRepo = {
  exists(userEmail: string): Promise<boolean>;
  findUserById(userId: string): Promise<User | null>;
  save(user: User): Promise<void>;
};
