import { ChatMessage, ChatMessageId } from "../domain/ChatMessage";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";

export type IChatMessageRepo = {
  save(chatMessage: ChatMessage): Promise<void>;
  findById(chatMessageId: ChatMessageId): Promise<ChatMessage | undefined>;
  findByUserId(chatRoomMemberId: ChatRoomMemberId): Promise<ChatMessage[]>;
  update(msg: ChatMessage): Promise<boolean>;
  delete(chatMessageId: ChatMessageId): Promise<boolean>;
};
