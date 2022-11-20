import { uuid } from "uuidv4";
import * as zod from "zod";
import { ValueObject } from "./ValueObject";

export const idSchema = zod.string().uuid();

export type IdValue = zod.infer<typeof idSchema>;

export class UniqueID extends ValueObject<IdValue | undefined> {
  public value: IdValue;

  constructor(value: IdValue | undefined) {
    super(value);

    if (value) {
      idSchema.parse(value);
      Object.freeze(this);
    }
    this.value = uuid();
  }

  public equals(id: UniqueID): boolean {
    return this.value === id.value;
  }
}
