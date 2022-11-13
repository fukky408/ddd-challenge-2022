import { ScheduledChatMessage } from "../../domain/ScheduledChatMessage"


export interface ScheduledChatMessageRepo {
  save(msg: ScheduledChatMessage): void;
}


let messages: ScheduledChatMessage[] = []

export class ScheduledChatMessageRepoImple {

  save(msg: ScheduledChatMessage) {
    messages.push(msg)
  }
}