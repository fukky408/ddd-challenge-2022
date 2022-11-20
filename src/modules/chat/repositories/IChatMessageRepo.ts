import { ChatMessage } from "../domain/ChatMessage";

export type IChatMessageRepo = {
  save(chatMessage: ChatMessage): Promise<void>;
};
