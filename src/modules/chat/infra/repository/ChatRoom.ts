import { ChatRoom } from "../../domain/ChatRoom"
import { UniqueID } from "../../../../shared/domain/UniqueID";

export interface ChatRoomRepo {
  get(id: UniqueID): ChatRoom;
}
