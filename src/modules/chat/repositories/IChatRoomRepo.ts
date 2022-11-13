import { ChatRoom } from "../domain/ChatRoom";

export type IChatRoomRepo = {
  findChatRoomByChatRoomId(chatRoomId: string): Promise<ChatRoom | null>;
  save(chatRoom: ChatRoom): Promise<void>;
};
