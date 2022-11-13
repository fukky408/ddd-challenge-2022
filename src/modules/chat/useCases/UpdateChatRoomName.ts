import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { UseCase } from "../../../shared/core/UseCase";

type Request = {
  chatRoomId: string;
  chatRoomName: string;
};

type Response = void;

export class UpdateChatRoomName implements UseCase<Request, Promise<Response>> {
  private chatRoomRepo: IChatRoomRepo;

  constructor(chatRoomRepo: IChatRoomRepo) {
    this.chatRoomRepo = chatRoomRepo;
  }

  public async execute(request: Request): Promise<Response> {
    const chatRoom = await this.chatRoomRepo.findChatRoomByChatRoomId(
      request.chatRoomId
    );

    if (!chatRoom) {
      throw new Error("ChatRoom not found");
    }

    chatRoom.changeName(request.chatRoomName);

    await this.chatRoomRepo.save(chatRoom);
  }
}
