import { UniqueID } from "../../../../shared/domain/UniqueID";
import { ChatMessage } from "../../domain/ChatMessage";
import { ChatRoomMemberId } from "../../domain/ChatRoomMember";
import { IChatMessageRepo } from "../../repositories/IChatMessageRepo";

let messages: ChatMessage[] = [];

export class ChatMessageRepo implements IChatMessageRepo {
  public async save(msg: ChatMessage) {
    messages.push(msg);
  }

  public async findById(id: UniqueID): Promise<ChatMessage | undefined> {
    const msg = messages.find((message: ChatMessage) => {
      return id.equals(message.id);
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
    if (!this.exist(msg.id)) {
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

  public async delete(id: UniqueID): Promise<boolean> {
    if (!this.exist(id)) {
      throw new Error("chat message is not found.");
    }
    messages = messages.filter((message) => {
      return id.equals(message.id);
    });
    return true;
  }

  private exist(id: UniqueID): boolean {
    const msg = messages.find((message: ChatMessage) => {
      return id.equals(message.id);
    });
    return !!msg;
  }
}
