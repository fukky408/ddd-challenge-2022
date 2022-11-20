import { ChatMessage } from "../../domain/ChatMessage";

let messages: ChatMessage[] = [];

export class ChatMessageRepo {
  public async save(msg: ChatMessage) {
    messages.push(msg);
  }
}
