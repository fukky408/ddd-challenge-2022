import { ChatMessage } from "../domain/ChatMessage";
import { ChatRoom } from "../domain/ChatRoom";

type SendChatMessageRequest = {
  body: string;
  senderId: string;
  organizationId: string;
  chatRoomId: string;
  sendAt: Date;
};

type SendChatMessageResponse = {};

interface IChatMessageRepo {
  save(chatMessage: ChatMessage): Promise<void>;
}

interface IChatRoomRepo {
  findById(id: string): Promise<ChatRoom | undefined>;
  findByUserId(userId: string): Promise<ChatRoom[] | undefined>;
}

/**
 * チャットの所属メンバーにメッセージを送信する
 */
export class SendChatMessage {
  constructor(
    private chatRoomRepo: IChatRoomRepo,
    private chatMessageRepo: IChatMessageRepo
  ) {}

  // TODO: 外部にバリデーション追加 & リポジトリなどに渡す値をVOなどに変更
  async execute(
    request: SendChatMessageRequest
  ): Promise<SendChatMessageResponse> {
    // ChatRoomの所属チェック
    const chatRoom = await this.chatRoomRepo.findById(request.chatRoomId);
    const isChatRoomMember = chatRoom.isMember(request.senderId);

    if (!isChatRoomMember) {
      throw new Error(
        `The sender doesn't join the chatRoom. chatRoomId=${chatRoom.id}`
      );
    }

    const chatMessage = ChatMessage.create(request);

    await this.chatMessageRepo.save(chatMessage);
    return chatMessage;
  }
}
