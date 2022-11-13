import { UniqueID } from "./UniqueID";

const isEntity = (v: any): v is Entity<any> => {
  return v instanceof Entity;
};

export abstract class Entity<T> {
  protected readonly _id: UniqueID;
  private readonly _props: T;

  constructor(props: T, id?: string) {
    this._id = new UniqueID(id);
    this._props = props;
  }

  get props() {
    return this._props;
  }

  public equals(object: Entity<T>): boolean {
    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
