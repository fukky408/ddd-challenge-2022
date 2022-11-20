import { SendChatMessage } from "../../useCases/sendChatMessage";
import { GetShouldScheduledMessage } from "../../useCases/GetShouldScheduledMessage";
import { UpdateStatusSentScheduledMessage } from "../../useCases/UpdateStatusSentScheduledMessage";
import { MessageBody } from "../../domain/MessageBody";

export class SendScheduledMessage {
  constructor(
    private getShouldScheduledMessage: GetShouldScheduledMessage,
    private updateStatusSentScheduledMessage: UpdateStatusSentScheduledMessage,
    private sendChatMessage: SendChatMessage
  ) {}

  public async execute() {
    const smsgs = await this.getShouldScheduledMessage.execute();
    for (const smsg of smsgs) {
      const msg = {
        body: new MessageBody(smsg.body),
        chatRoomMemberId: smsg.chatRoomMemberId,
        chatRoomId: smsg.chatRoomId,
        sendAt: smsg.sendScheduledAt,
      };
      await this.sendChatMessage.execute(msg);
      await this.updateStatusSentScheduledMessage.execute({
        scheduledMessageId: smsg.id.value,
      });
    }
  }
}
