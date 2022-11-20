import { ScheduledChatMessage } from "../../domain/ScheduledChatMessage";
import { UniqueID } from "../../../../shared/domain/UniqueID";

let messages: ScheduledChatMessage[] = [];

export class ScheduledChatMessageRepoImple {
  public async save(msg: ScheduledChatMessage) {
    messages.push(msg);
  }

  public async get(id: string): Promise<ScheduledChatMessage | undefined> {
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

  public async delete(id: UniqueID): Promise<boolean> {
    if (!this.exist(id.value)) {
      throw new Error("scheduled chat message is not found.");
    }
    messages = messages.filter((message) => {
      return message.id !== id;
    });
    return true;
  }

  exist(id: string): boolean {
    const msg = messages.find((message: ScheduledChatMessage) => {
      return message.id.value === id;
    });
    return !!msg;
  }
}
