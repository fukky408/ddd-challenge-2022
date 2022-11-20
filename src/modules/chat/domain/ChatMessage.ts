import { Entity } from "../../../shared/domain/Entity";
import { ChatRoomId } from "./ChatRoom";
import { ChatRoomMemberId } from "./ChatRoomMember";

type ChatMessageProps = {
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
  body: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class ChatMessage extends Entity<ChatMessageProps> {
  constructor(props: ChatMessageProps, id?: string) {
    super(props, id);
  }

  get body() {
    return this.props.body;
  }
}
