import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type UserProps = {
  id: UniqueID;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export class User extends Entity<UserProps> {
  constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  public changeName(newName: string) {
    return new User({ ...this.props, name: newName }, this.props.id.value);
  }

  public changeEmail(newEmail: string) {
    return new User({ ...this.props, email: newEmail }, this.props.id.value);
  }

  public changePassword(newPassword: string) {
    return new User(
      { ...this.props, password: newPassword },
      this.props.id.value
    );
  }

  public changeRole(newRole: string) {
    return new User({ ...this.props, role: newRole }, this.props.id.value);
  }
}
