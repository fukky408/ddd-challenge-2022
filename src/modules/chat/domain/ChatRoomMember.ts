import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type ChatRoomMemberProps = {
  userID: string;
};

export class ChatRoomMember extends Entity<ChatRoomMemberProps> {
  public readonly id: UniqueID;
  public readonly userID: UniqueID;

  constructor(props: ChatRoomMemberProps, id?: string) {
    super(props, id);
  }
}