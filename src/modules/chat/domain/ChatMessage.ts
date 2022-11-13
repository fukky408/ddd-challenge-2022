import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type ChatMessageProps = {
  id: UniqueID;
  body: string;
  chatRoomId: string;
  senderId: string;
  sendAt: Date;
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
