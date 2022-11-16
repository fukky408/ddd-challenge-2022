import { Entity } from "../../../shared/domain/Entity";

type ChatMessageProps = {
  body: string;
  senderId: string;
  chatRoomId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class ChatMessage extends Entity<ChatMessageProps> {
  constructor(props: ChatMessageProps, id?: string) {
    super(props, id);
  }

  static create(props: ChatMessageProps, id?: string) {
    return new ChatMessage(props, id);
  }

  get body() {
    return this.props.body;
  }
}
