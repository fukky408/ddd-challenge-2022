import { Nominal, nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { Email } from "./Email";
import { Password } from "./Password";
import { UserName } from "./UserName";

type UserProps = {
  name: UserName;
  email: Email;
  password: Password;
  createdAt: Date;
  updatedAt: Date;
};

export type UserId = Nominal<"UserId", string>;

export class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  get userId(): UserId {
    return nominal.make<UserId>(this.id.value);
  }

  get name(): UserName {
    return this.props.name;
  }

  public changeName(newName: UserName) {
    return new User({ ...this.props, name: newName }, this.userId);
  }

  public changeEmail(newEmail: Email) {
    return new User({ ...this.props, email: newEmail }, this.userId);
  }

  public changePassword(newPassword: Password) {
    return new User({ ...this.props, password: newPassword }, this.userId);
  }
}
