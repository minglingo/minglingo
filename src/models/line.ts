import {Model, Types} from 'chomex';
import BingoSlot from './slot';

/**
 * BingoLine represents a successfull bingo line.
 */
export default class BingoLine extends Model {

  protected static schema = {
    succeeded: Types.date,
    slots: Types.arrayOf(Types.reference(BingoSlot)),
  }

  public succeeded: Date;
  public slots: BingoSlot[];

  constructor(props: { slots: BingoSlot[], succeeded?: Date }) {
    super(props);
    this.slots = props.slots;
    this.succeeded = props.succeeded || new Date();
  }

}