import { Entity } from "../../../shared/domain/Entity";
import { MessageBody } from "./MessageBody";

type ChatMessageProps = {
  body: MessageBody;
  senderId: string;
  chatRoomId: string;
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
