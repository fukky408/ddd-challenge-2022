import { ChatMessageRepo } from "./src/modules/chat/infra/repository/ChatMessageRepo";
import { ChatRoomRepo } from "./src/modules/chat/infra/repository/ChatRoomRepo";
import { ScheduledChatMessageRepo } from "./src/modules/chat/infra/repository/ScheduledChatMessageRepo";

import { SendScheduledMessage } from "./src/modules/chat/infra/command/SendScheduledMessage"
import { UpdateStatusSentScheduledMessage } from "./src/modules/chat/useCases/UpdateStatusSentScheduledMessage";
import { GetShouldScheduledMessage } from "./src/modules/chat/useCases/GetShouldScheduledMessage";
import { SendChatMessage } from "./src/modules/chat/useCases/sendChatMessage";


async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  const chatMessageRepo = new ChatMessageRepo()
  const chatRoomRepo = new ChatRoomRepo()
  const scheduledChatMessageRepo = new ScheduledChatMessageRepo()

  const getShouldScheduledMessage = new GetShouldScheduledMessage(scheduledChatMessageRepo)
  const updateStatusSentScheduledMessage = new UpdateStatusSentScheduledMessage(scheduledChatMessageRepo)
  const sendChatMessage = new SendChatMessage(chatRoomRepo, chatMessageRepo)

  const cmd = new SendScheduledMessage(getShouldScheduledMessage, updateStatusSentScheduledMessage, sendChatMessage)
  while (true) {
    await sleep(2000)
    await cmd.execute()
  }
}
main()