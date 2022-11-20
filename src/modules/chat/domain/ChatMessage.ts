import { Entity } from "../../../shared/domain/Entity";
import { ChatRoomId } from "./ChatRoom";
import { ChatRoomMemberId } from "./ChatRoomMember";

type ChatMessageProps = {
  body: string;
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
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