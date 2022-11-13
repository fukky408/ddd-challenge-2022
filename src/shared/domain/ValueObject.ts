type ValueObjectProps = {
  [index: string]: any;
};

/**
 * @desc ValueObjects are objects that we determine their
 * equality through their structrual property.
 */
export abstract class ValueObject<T extends ValueObjectProps> {
  public props: T;

  constructor(props: T) {
    this.props = props;
  }

  public equals(vo?: ValueObject<T>): boolean {
    if (vo == undefined) {
      return false;
    }
    if (vo.props == undefined) {
      return false;
    }
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}
