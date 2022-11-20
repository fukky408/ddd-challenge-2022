import { ChatRoom, ChatRoomId } from "../domain/ChatRoom";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";

export type IChatRoomRepo = {
  save(chatRoom: ChatRoom): Promise<boolean>;
  findById(id: ChatRoomId): Promise<ChatRoom | undefined>;
  findByMemberId(memberId: ChatRoomMemberId): Promise<ChatRoom[] | undefined>;
};
