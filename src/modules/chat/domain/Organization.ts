// Otional: 自分たちで考えたものなのであんまり重要ではない
import { Entity } from "../../../shared/domain/Entity";
import { UniqueID } from "../../../shared/domain/UniqueID";

type OrganizationProps = {
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Organization extends Entity<OrganizationProps> {
  public readonly id: UniqueID;
  public readonly name: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(props: OrganizationProps, id?: string) {
    super(props, id);
  }
}
