import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type ChatMessageProps = {
  senderID: string
  body: string;
  postedAt: Date;
  updatedAt: Date;
};

export class ChatMessage extends Entity<ChatMessageProps> {
  public readonly id: UniqueID;
  public readonly senderID: UniqueID;
  public readonly body: string;
  public readonly postedAt: Date;
  public readonly updatedAt: Date;

  constructor(props: ChatMessageProps, id?: string) {
    super(props, id);
  }
}
