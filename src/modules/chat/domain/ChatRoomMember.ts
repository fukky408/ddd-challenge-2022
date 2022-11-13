// chatコンテキストがあるなら，Userの別モデルとしてChatRoomMemberがあるのはわかる
// けどmodulesは別にコンテキストで切っているわけではないはず
// なので，ChatRoomMemberがここに来るのが正しいのか分かりません

import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type ChatRoomProps = {
  id: UniqueID;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ChatRoomMember extends Entity<ChatRoomProps> {
  constructor(props: ChatRoomProps, id?: string) {
    super(props, id);
  }
}
