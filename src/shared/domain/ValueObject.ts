export abstract class ValueObject<T> {
  public readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo == undefined) return false;
    return this.value === vo.value;
  }
}
