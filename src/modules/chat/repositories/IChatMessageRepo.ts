import { ChatMessage } from "../domain/ChatMessage";

export interface IChatMessageRepo {
  save(chatMessage: ChatMessage): Promise<void>;
}
