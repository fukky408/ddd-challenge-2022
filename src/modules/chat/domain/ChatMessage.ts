import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type ChatMessageProps = {
  id: UniqueID;
  body: string;
  postedAt: Date;
  updatedAt: Date;
};

export class ChatMessage extends Entity<ChatMessageProps> {
  constructor(props: ChatMessageProps, id?: string) {
    super(props, id);
  }
}
