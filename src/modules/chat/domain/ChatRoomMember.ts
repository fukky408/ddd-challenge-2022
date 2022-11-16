import { Entity } from "../../../shared/domain/Entity";

type ChatRoomMemberProps = {
  name: string;
  joinedAt?: Date;
};

export class ChatRoomMember extends Entity<ChatRoomMemberProps> {
  constructor(props: ChatRoomMemberProps, id?: string) {
    super(props, id);
  }
}
