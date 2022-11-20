import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { UseCase } from "../../../shared/core/UseCase";
import { IUserRepo } from "../../users/repositories/IUserRepo";
import { ChatRoomMember } from "../domain/ChatRoomMember";

type Request = {
  userId: string;
  roleKind: "MEMBER" | "OWNER";
  chatRoomId: string;
  chatRoomName: string;
};

type Response = boolean;

export class AddChatRoomMember implements UseCase<Request, Promise<Response>> {
  constructor(
    private chatRoomRepo: IChatRoomRepo,
    private userRepo: IUserRepo
  ) {}
  // TODO: 前段でChatRoomMemberの権限チェック（AdminならOK）
  public async execute(request: Request): Promise<Response> {
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(`chatRoomId=${request.chatRoomId}) not found.`);
    }

    const user = await this.userRepo.findUserById(request.userId);
    if (!user) {
      throw new Error(`userId=${request.userId} not found)`);
    }

    const memberExists = chatRoom.isMember(user.userId);
    if (memberExists) {
      throw new Error(`userId=${request.userId} is already a member.`);
    }

    const chatRoomMember = new ChatRoomMember({
      name: user.name,
      userId: user.userId,
      roleKind: request.roleKind,
    });

    const updatedChatRoom = chatRoom.addChatRoomMember(chatRoomMember);
    const res = await this.chatRoomRepo.save(updatedChatRoom);
    return res;
  }
}
