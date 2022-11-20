import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomMember } from "../domain/ChatRoomMember";
import { OrganizationMemberId } from "../../accounts/domain/OrganizationMember";
import { ChatRoomId } from "../domain/ChatRoom";

type Request = {
  organizationMemberId: OrganizationMemberId;
  chatRoomId: ChatRoomId;
  chatRoomName: string;
};

type Response = boolean;

export class AddChatRoomMember implements UseCase<Request, Promise<Response>> {
  constructor(
    private chatRoomRepo: IChatRoomRepo,
  ) {}
  // TODO: 前段でChatRoomMemberの権限チェック（AdminならOK）
  public async execute(request: Request): Promise<Response> {
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(`chatRoomId=${request.chatRoomId}) not found.`);
    }


    const memberExists = chatRoom.hasOrganizationMember(request.organizationMemberId);
    if (memberExists) {
      throw new Error(`organizationMemberId=${request.organizationMemberId} is already a member.`);
    }

    const chatRoomMember = new ChatRoomMember({
      organizationMemberId: request.organizationMemberId,
    })

    const updatedChatRoom = chatRoom.addChatRoomMember(chatRoomMember);
    const res = await this.chatRoomRepo.save(updatedChatRoom);
    return res;
  }
}
