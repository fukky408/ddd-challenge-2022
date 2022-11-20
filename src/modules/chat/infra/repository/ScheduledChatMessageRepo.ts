import { ScheduledChatMessage } from "../../domain/ScheduledChatMessage";
import { UniqueID } from "../../../../shared/domain/UniqueID";

let messages: ScheduledChatMessage[] = [];

export class ScheduledChatMessageRepo {
  public async save(msg: ScheduledChatMessage): Promise<boolean> {
    messages.push(msg);
    return true;
  }

  public async findById(
    id: UniqueID
  ): Promise<ScheduledChatMessage | undefined> {
    const msg = messages.find((message: ScheduledChatMessage) => {
      return id.equals(message.id);
    });
    if (!msg) {
      throw new Error("scheduled chat message is not found.");
    }
    return msg;
  }

  public async update(msg: ScheduledChatMessage): Promise<boolean> {
    if (!this.exist(msg.id)) {
      throw new Error("scheduled chat message is not found.");
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
      throw new Error("scheduled chat message is not found.");
    }
    messages = messages.filter((message) => {
      return id.equals(message.id);
    });
    return true;
  }

  public async findOverScheduledTime(
    scheduledAt: Date
  ): Promise<ScheduledChatMessage[]> {
    const msgs = messages.filter((message: ScheduledChatMessage) => {
      return message.postScheduledAt > scheduledAt;
    });
    return msgs;
  }

  private exist(id: UniqueID): boolean {
    const msg = messages.find((message: ScheduledChatMessage) => {
      return id.equals(message.id);
    });
    return !!msg;
  }
}
