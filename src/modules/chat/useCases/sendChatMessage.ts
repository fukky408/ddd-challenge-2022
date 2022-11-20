import { ChatMessage } from "../domain/ChatMessage";
import { IChatRoomRepo } from "../repositories/IChatRoomRepo";
import { IChatMessageRepo } from "../repositories/IChatMessageRepo";
import { UseCase } from "../../../shared/core/UseCase";

type SendChatMessageRequest = {
  userId: string;
  body: string;
  chatRoomId: string;
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
      throw new Error(`chatRoomId=${request.chatRoomId}) not found.`);
    }
    const memberExists = chatRoom.isMember(request.userId);
    if (!memberExists) {
      throw new Error(`chatRoomId=${request.chatRoomId}) `);
    }

    const chatMessage = new ChatMessage(request);

    await this.chatMessageRepo.save(chatMessage);
    return chatMessage;
  }
}
