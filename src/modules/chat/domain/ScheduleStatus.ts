import { ValueObject } from "../../../shared/domain/ValueObject";

export const ScheduleStatusCandidate = {
  SCHEDULED: "SCHEDULED",
  POSTED: "POSTED",
} as const;
export type ScheduleStatusCandidate = keyof typeof ScheduleStatusCandidate;

export class ScheduleStatus extends ValueObject<ScheduleStatusCandidate> {
  public readonly value: ScheduleStatusCandidate;

  constructor(value: ScheduleStatusCandidate) {
    super(value);

    if (!Object.keys(ScheduleStatusCandidate).includes(value)) {
      throw new Error("Invalid ScheduleStatus");
    }

    this.value = value;
  }

  public toString() {
    switch (this.value) {
      case "SCHEDULED":
        return ScheduleStatusCandidate.SCHEDULED;
      case "POSTED":
        return ScheduleStatusCandidate.POSTED;
    }
  }
}
