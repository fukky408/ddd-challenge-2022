import { nominal, Nominal } from "nominal-types";
import { Entity } from "../../../shared/domain/Entity";
import { ChatRoomId } from "./ChatRoom";
import { ChatRoomMemberId } from "./ChatRoomMember";
import { MessageBody } from "./MessageBody";

type ChatMessageProps = {
  body: MessageBody;
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
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
