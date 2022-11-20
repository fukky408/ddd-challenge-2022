import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { MessageBody } from "./MessageBody";

type ChatMessageProps = {
  body: MessageBody;
  senderId: string;
  chatRoomId: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ChatMessageId = Nominal<"ChatMessageId", string>;

export class ChatMessage extends Entity<ChatMessageProps> {
  constructor(props: ChatMessageProps, id?: string) {
    super(props, id);
  }

  get chatMessageId(): ChatMessageId {
    return nominal.make<ChatMessageId>(this.id.value);
  }

  get body() {
    return this.props.body;
  }
}
