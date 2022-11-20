import { UniqueID } from "../../../shared/domain/UniqueID";
import { ChatMessage } from "../domain/ChatMessage";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";

export type IChatMessageRepo = {
  save(chatMessage: ChatMessage): Promise<void>;
  findById(id: UniqueID): Promise<ChatMessage | undefined>;
  findByUserId(chatRoomMemberId: ChatRoomMemberId): Promise<ChatMessage[]>;
  update(msg: ChatMessage): Promise<boolean>;
  delete(id: UniqueID): Promise<boolean>;
};
