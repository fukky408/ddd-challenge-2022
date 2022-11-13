import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";
import { User } from "../../users/domain/User";

type ChatRoomProps = {
  id: UniqueID;
  name: string;
  adminUser: User;
  createdAt: Date;
  updatedAt: Date;
};

export class ChatRoom extends Entity<ChatRoomProps> {
  constructor(props: ChatRoomProps, id?: string) {
    super(props, id);
  }

  public changeName(newName: string) {
    return new ChatRoom({ ...this.props, name: newName }, this.props.id.value);
  }
}
