// chatコンテキストがあるなら，Userの別モデルとしてChatRoomMemberがあるのはわかる
// けどmodulesは別にコンテキストで切っているわけではないはず
// なので，ChatRoomMemberがここに来るのが正しいのか分かりません

import { Entity } from "../../../shared/domain/Entity";

type ChatRoomMemberProps = {
  name: string;
};

export class ChatRoomMember extends Entity<ChatRoomMemberProps> {
  constructor(props: ChatRoomMemberProps, id?: string) {
    super(props, id);
  }
}
