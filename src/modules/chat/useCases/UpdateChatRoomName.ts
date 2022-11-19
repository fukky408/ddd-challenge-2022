import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { UseCase } from "../../../shared/core/UseCase";

type Request = {
  chatRoomId: string;
  chatRoomName: string;
};

type Response = boolean;

export class UpdateChatRoomName implements UseCase<Request, Promise<Response>> {
  constructor(private chatRoomRepo: IChatRoomRepo) {}

  public async execute(request: Request): Promise<Response> {
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(
        `The chatRoom (chatRoomId=${request.chatRoomId}) not found.`
      );
    }

    const updatedChatRoom = chatRoom.changeName(request.chatRoomName);
    const res = await this.chatRoomRepo.save(updatedChatRoom);
    return res;
  }
}
