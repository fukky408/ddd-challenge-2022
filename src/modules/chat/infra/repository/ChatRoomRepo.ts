import { ChatRoom } from "../../domain/ChatRoom";

let rooms: ChatRoom[] = [];

export class ChatRoomRepo {
  public async save(room: ChatRoom): Promise<boolean> {
    rooms.push(room)
    return true
  }

  public async findById(id: string): Promise<ChatRoom | undefined> {
    const room = rooms.find((room: ChatRoom) => {
      return room.id.value === id;
    })
    return room;
  }

  public async findByUserId(userId: string): Promise<ChatRoom[] | undefined> {
    const rms = rooms.filter((room: ChatRoom) => {
      return room.isMember(userId)
    });
    return rms
  }
}
