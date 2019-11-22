import {Model, Types} from 'chomex';

import BingoSlot, { IBingoSlotConfig } from './slot';
import BingoLine from './line';
import { Payload } from './qrcode';

export interface IBingoConfig {
    sheet: {
        width: number;
        height: number;
    };
    slot: {
        variations: IBingoSlotConfig[];
    }
}

export default class BingoSheet extends Model {

    protected static __ns = 'BingoSheet';
    protected static schema = {
        width: Types.number,
        height: Types.number,
        slots: Types.arrayOf(
            Types.arrayOf(
                Types.reference(BingoSlot)
            )
        ),
        lines: Types.arrayOf(Types.reference(BingoLine)),
        initialized: Types.date,
    }

    public width: number;
    public height: number;
    public slots: BingoSlot[][];
    public length: number;
    public lines: BingoLine[];
    public initialized: Date;

    constructor(props: any) {
        super(props, 'singleton');
        this.width = props.width;
        this.height = props.height;
        this.slots = props.slots;
        this.lines = props.lines || [];
        this.length = this.width * this.height;
        this.initialized = props.date || new Date();
    }

    private static arrayShuffle<T>(arr: T[]): T[] {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    private static getShuffledListWithLength(arr: IBingoSlotConfig[], length: number): IBingoSlotConfig[] {
        const dest: IBingoSlotConfig[] = [];
        while (dest.length < length) {
            dest.push(...this.arrayShuffle<IBingoSlotConfig>(arr))
        }
        return dest.slice(0, length);
    }

    private static createSlot(variation: IBingoSlotConfig, index: number, width: number): BingoSlot {
        const { value, label, description, imageURL } = variation;
        const [x, y] = [index % width, Math.floor(index / width)];
        const slot = new BingoSlot({ value, label, description, imageURL, position: { x, y } });
        return slot;
    }

    static init(config: IBingoConfig): BingoSheet {
        const {width, height} = config.sheet;
        const slots: BingoSlot[][] = Array(height).fill(true).map(() => []);
        const length = width * height;
        this.getShuffledListWithLength(config.slot.variations, length).map((v, i) => {
            const slot = this.createSlot(v, i, width);
            return slots[slot.position.y].push(slot);
        });
        const sheet = new BingoSheet({
            width: config.sheet.width,
            height: config.sheet.height,
            slots
        });
        return sheet;
    }

    static exists(): BingoSheet | undefined {
        return this.find<BingoSheet>('singleton');
    }

    /**
     * hit returns the slot which matches the given payload,
     * or undefined if not found.
     * @param payload
     */
    public hit(payload: Payload): BingoSlot | void {
        // eslint-disable-next-line
        return this.slots.flat().find((slot) => slot.value === payload.value);
    }

    /**
     * punch marks the given hit slot as punched.
     * @param hit
     */
    public punch(hit: BingoSlot): BingoSheet {
        // eslint-disable-next-line
        this.slots.flat().filter((slot) => slot.value === hit.value).map((slot) => {
            // slot.punched = true;
            const {x, y} = slot.position;
            this.slots[y][x].punched = true;
        });
        this.lines = this.getBingoLines();
        return this.save();
    }

    public isBingo(): boolean {
        return this.getBingoLines().length !== 0;
    }

    public isCompleted(): boolean {
        const { width, height } = this;
        return this.getBingoLines().length >= width + height + 2;
    }

    public getBingoNumber(): number {
        return this.getBingoLines().length;
    }

    public getBingoLines(): BingoLine[] {
        const lines: BingoLine[] = [];
        lines.push(...this.getHorizontalBingo());
        lines.push(...this.getVerticalBingo())
        lines.push(...this.getDiagonalBingo());
        this.markSlotsIfBingo(lines);
        return lines;
    }

    private markSlotsIfBingo(lines: BingoLine[]) {
        lines.map(line => {
            return line.slots.map(slot => {
                // this.slots[slot.position.y][slot.position.x].bingo = true;
                return slot.bingo = true;
            })
        })
    }

    /**
     * Return all the slots which constitute the horizontal bingo.
     */
    public getHorizontalBingo(): BingoLine[] {
        const lines: BingoLine[] = [];
        for (let row = 0; row < this.height; row++) {
            if (this.slots[row].every((slot) => slot.punched)) {
                lines.push(new BingoLine({ slots: this.slots[row] }))
            }
        }
        return lines;
    }

    /**
     * Return all the slots which constitute the vertical bingo.
     */
    public getVerticalBingo(): BingoLine[] {
        const lines: BingoLine[] = [];
        for (let col = 0; col < this.width; col++) {
            if (this.slots.every((row) => row[col].punched)) {
                lines.push(new BingoLine({slots: this.slots.map((row) => row[col]).flat()}));
            }
        }
        return lines;
    }

    /**
     * Return all the slots which constitute the diagonal bingo.
     */
    public getDiagonalBingo(): BingoLine[] {
        const lines: BingoLine[] = [];
        if (this.width === this.height) {
            const len = Math.min(this.width, this.height);
            const backslash = this.slots.map((row, i) => row[i]);
            if (backslash.every(slot => slot.punched)) {
                lines.push(new BingoLine({ slots: backslash }));
            }
            const slash = this.slots.map((row, i) => row[len - i - 1]);
            if (slash.every(slot => slot.punched)) {
                lines.push(new BingoLine({ slots: slash }));
            }
        } else {
            // TODO: Consider NON-SQUARE bingo sheet.
            return [];
        }
        return lines;
    }
}