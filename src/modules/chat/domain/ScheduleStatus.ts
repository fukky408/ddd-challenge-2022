export const ScheduleStatusCandidate = {
  SCHEDULED: "SCHEDULED",
  POSTED: "POSTED",
} as const;
export type ScheduleStatusCandidate = keyof typeof ScheduleStatusCandidate;

export class ScheduleStatus {
  private readonly _value: ScheduleStatusCandidate;

  constructor(value: ScheduleStatusCandidate) {
    if (!Object.keys(ScheduleStatusCandidate).includes(value)) {
      throw new Error("Invalid ScheduleStatus");
    }

    this._value = value;
  }

  get value() {
    return this._value;
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
