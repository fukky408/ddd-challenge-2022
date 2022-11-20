import { SendChatMessage } from "../../useCases/sendChatMessage"
import { GetShouldScheduledMessage } from "../../useCases/GetShouldScheduledMessage"

export class SendScheduledMessage {
  constructor(
    private getShouldScheduledMessage: GetShouldScheduledMessage,
    private sendChatMessage: SendChatMessage,
  ) { }

  public async execute() {
    const smsgs = await this.getShouldScheduledMessage.execute()
    for (const smsg of smsgs) {
      const msg = {
        body: smsg.body,
        senderId: smsg.senderId,
        chatRoomId: smsg.chatRoomId,
        sendAt: smsg.postScheduledAt,
      }
      await this.sendChatMessage.execute(msg)
    }
  }

}