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

  public draw(ctx: CanvasRenderingContext2D, scale: number = 100) {
    const start = this.slots[0].position;
    const end = this.slots[this.slots.length - 1].position;
    const unit = scale / this.slots.length;
    const offset = unit / 2;
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = scale / 100;
    ctx.beginPath();
    ctx.moveTo(offset + unit * start.x, offset + unit * start.y);
    ctx.lineTo(offset + unit * end.x, offset + unit * end.y);
    ctx.stroke();
  }

}