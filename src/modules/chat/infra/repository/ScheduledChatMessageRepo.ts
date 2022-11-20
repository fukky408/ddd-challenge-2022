import { ScheduledChatMessage } from "../../domain/ScheduledChatMessage";
import { UniqueID } from "../../../../shared/domain/UniqueID";

let messages: ScheduledChatMessage[] = [];

export class ScheduledChatMessageRepo {
  public async save(msg: ScheduledChatMessage): Promise<boolean> {
    messages.push(msg);
    return true;
  }

  public async findById(id: string): Promise<ScheduledChatMessage | undefined> {
    const msg = messages.find((message: ScheduledChatMessage) => {
      return message.id.value === id;
    });
    if (!msg) {
      throw new Error("scheduled chat message is not found.");
    }
    return msg;
  }

  public async update(msg: ScheduledChatMessage): Promise<boolean> {
    if (!this.exist(msg.id.value)) {
      throw new Error("scheduled chat message is not found.");
    }
    messages = messages.map((message) => {
      if (message.id === msg.id) {
        return msg;
      }
      return message;
    });
    return true;
  }

  public async delete(id: string): Promise<boolean> {
    if (!this.exist(id)) {
      throw new Error("scheduled chat message is not found.");
    }
    messages = messages.filter((message) => {
      return message.id.value != id;
    });
    return true;
  }

  public async findOverScheduledTime(
    scheduledAt: Date
  ): Promise<ScheduledChatMessage[]> {
    const msgs = messages.filter((message: ScheduledChatMessage) => {
      return message.sendScheduledAt > scheduledAt;
    });
    return msgs;
  }

  exist(id: string): boolean {
    const msg = messages.find((message: ScheduledChatMessage) => {
      return message.id.value === id;
    });
    return !!msg;
  }
}
