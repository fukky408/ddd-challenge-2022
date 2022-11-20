import { ChatRoom, ChatRoomId } from "../../domain/ChatRoom";
import { ChatRoomMemberId } from "../../domain/ChatRoomMember";

let rooms: ChatRoom[] = [];

export class ChatRoomRepo {
  public async save(room: ChatRoom): Promise<boolean> {
    rooms.push(room)
    return true
  }

  public async findById(id: ChatRoomId): Promise<ChatRoom | undefined> {
    const room = rooms.find((room: ChatRoom) => {
      return room.id.value === id;
    })
    return room;
  }

  public async findByMemberId(memberId: ChatRoomMemberId): Promise<ChatRoom[] | undefined> {
    const rms = rooms.filter((room: ChatRoom) => {
      return room.isMember(memberId)
    });
    return rms
  }
}
