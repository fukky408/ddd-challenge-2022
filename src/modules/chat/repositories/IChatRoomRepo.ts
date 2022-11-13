import { ChatRoom } from "../domain/ChatRoom";

export type IChatRoomRepo = {
  getChatRoomByChatRoomId(chatRoomId: string): Promise<ChatRoom | null>;
  save(chatRoom: ChatRoom): Promise<void>;
};
