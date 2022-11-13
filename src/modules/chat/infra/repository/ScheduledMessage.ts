import { ScheduledChatMessage } from "../../domain/ScheduledChatMessage"
import { UniqueID } from "../../../../shared/domain/UniqueID";

export interface ScheduledChatMessageRepo {
  get(id: UniqueID): ScheduledChatMessage;
  save(msg: ScheduledChatMessage): void;
  update(msg: ScheduledChatMessage): void;
  delete(id: UniqueID): void;
}


let messages: ScheduledChatMessage[] = []

export class ScheduledChatMessageRepoImple {
  save(msg: ScheduledChatMessage) {
    messages.push(msg)
  }
  get(id: UniqueID): ScheduledChatMessage {
    const msg = messages.find(message => message.id === id)
    if (!msg) {
      throw "scheduled chat message is not found."
    }
    return msg
  }
  update(msg: ScheduledChatMessage) {
    if (!this.exist(msg.id)) {
      throw "scheduled chat message is not found."
    }
    messages = messages.map(message => {
      if (message.id === msg.id) {
        return msg
      }
      return message
    })
  }

  delete(id: UniqueID) {
    if (!this.exist(id)) {
      throw "scheduled chat message is not found."
    }
    messages = messages.filter(message => {
      return message.id != id
    })
  }

  exist(id: UniqueID): boolean {
    const msg = messages.find(message => message.id === id)
    return !!msg
  }

}