import { ChatRoom } from "../domain/ChatRoom";

export type IChatRoomRepo = {
  save(chatRoom: ChatRoom): Promise<boolean>;
  findById(id: string): Promise<ChatRoom | undefined>;
  findByUserId(userId: string): Promise<ChatRoom[] | undefined>;
};
