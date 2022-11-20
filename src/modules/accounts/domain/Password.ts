import { z } from "zod";

const passwordSchema = z.string().min(8);

export class Password {
  constructor(public value: string) {
    try {
      value = passwordSchema.parse(value);
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        throw new z.ZodError(err.issues);
      }
    }
  }
}
