import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type UserProps = {
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User extends Entity<UserProps> {
  public readonly id: UniqueID;
  public readonly name: string;
  public readonly email: string;
  public readonly password: string;
  public readonly role: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  public changeName(newName: string) {
    return new User({ ...this.props, name: newName }, this.id.value);
  }

  public changeEmail(newEmail: string) {
    return new User({ ...this.props, email: newEmail }, this.id.value);
  }

  public changePassword(newPassword: string) {
    return new User({ ...this.props, password: newPassword }, this.id.value);
  }

  public changeRole(newRole: string) {
    return new User({ ...this.props, role: newRole }, this.id.value);
  }

  // いっぱいメソッドが来ると良いね！
}
