import * as zod from "zod";
import { ValueObject } from "../../../shared/domain/ValueObject";

const MIN_LENGTH = 1;
const MAX_LENGTH = 1000;

const messageBodySchema = zod.string().min(MIN_LENGTH).max(MAX_LENGTH);

export type BodyValue = zod.infer<typeof messageBodySchema>;

export class MessageBody extends ValueObject<BodyValue> {
  constructor(public value: BodyValue) {
    super(value);

    try {
      value = messageBodySchema.parse(value);
    } catch (err: unknown) {
      if (err instanceof zod.ZodError) {
        throw new zod.ZodError(err.issues);
      }
    }
  }
}
