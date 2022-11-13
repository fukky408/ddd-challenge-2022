// Otional: 自分たちで考えたものなのであんまり重要ではない
import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type OrganizationProps = {
  id: UniqueID;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Organization extends Entity<OrganizationProps> {
  constructor(props: OrganizationProps, id?: string) {
    super(props, id);
  }
}
