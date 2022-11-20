import { ChatMessage, ChatMessageId } from "../../domain/ChatMessage";
import { ChatRoomMemberId } from "../../domain/ChatRoomMember";
import { IChatMessageRepo } from "../../repositories/IChatMessageRepo";

let messages: ChatMessage[] = [];

export class ChatMessageRepo implements IChatMessageRepo {
  public async save(msg: ChatMessage) {
    messages.push(msg);
  }

  public async findById(
    chatMessageId: ChatMessageId
  ): Promise<ChatMessage | undefined> {
    const msg = messages.find((message: ChatMessage) => {
      return message.id.value === chatMessageId;
    });
    if (!msg) {
      throw new Error("chat message is not found.");
    }
    return msg;
  }

  public async findByUserId(
    chatRoomMemberId: ChatRoomMemberId
  ): Promise<ChatMessage[]> {
    const msgs = messages.filter((message: ChatMessage) => {
      return message.props.senderId === chatRoomMemberId;
    });
    return msgs;
  }

  public async update(msg: ChatMessage): Promise<boolean> {
    if (!this.exist(msg.id.value)) {
      throw new Error("chat message is not found.");
    }
    messages = messages.map((message) => {
      if (msg.id.equals(message.id)) {
        return msg;
      }
      return message;
    });
    return true;
  }

  public async delete(chatMessageId: ChatMessageId): Promise<boolean> {
    if (!this.exist(chatMessageId)) {
      throw new Error("chat message is not found.");
    }
    messages = messages.filter((message) => {
      return message.id.value === chatMessageId;
    });
    return true;
  }

  private exist(id: string): boolean {
    const msg = messages.find((message: ChatMessage) => {
      return message.id.value === id;
    });
    return !!msg;
  }
}
