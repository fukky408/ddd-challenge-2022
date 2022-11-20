import { ChatMessage } from "../domain/ChatMessage";
import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { IChatMessageRepo } from "../repositories/IChatMessageRepo";
import { UseCase } from "../../../shared/core/UseCase";
import { ChatRoomId } from "../domain/ChatRoom";
import { ChatRoomMemberId } from "../domain/ChatRoomMember";

type SendChatMessageRequest = {
  body: string;
  chatRoomMemberId: ChatRoomMemberId;
  chatRoomId: ChatRoomId;
  sendAt: Date;
};

type SendChatMessageResponse = ChatMessage;

/**
 * チャットの所属メンバーにメッセージを送信する
 */
export class SendChatMessage
  implements UseCase<SendChatMessageRequest, Promise<SendChatMessageResponse>>
{
  constructor(
    private chatRoomRepo: IChatRoomRepo,
    private chatMessageRepo: IChatMessageRepo
  ) {}

  // TODO: 外部にバリデーション追加 & リポジトリなどに渡す値をVOなどに変更
  public async execute(
    request: SendChatMessageRequest
  ): Promise<SendChatMessageResponse> {
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    if (!chatRoom) {
      throw new Error(
        `The chatRoom (chatRoomId=${request.chatRoomId}) not found.`
      );
    }
    const isChatRoomMember = chatRoom.isMember(request.chatRoomMemberId);
    if (!isChatRoomMember) {
      throw new Error(
        `The sender does not join the chatRoom (chatRoomId=${request.chatRoomId}).`
      );
    }

    const chatMessage = new ChatMessage({
      body: request.body,
      chatRoomMemberId: request.chatRoomMemberId,
      chatRoomId: request.chatRoomId,
    });

    await this.chatMessageRepo.save(chatMessage);
    return chatMessage;
  }
}
