import BingoSlot, { IBingoSlotConfig } from './slot';

export interface IBingoConfig {
    sheet: {
        width: number;
        height: number;
    };
    slot: {
        variations: IBingoSlotConfig[];
    }
}

export default class BingoSheet {

    public length: number;

    constructor(
        public width: number,
        public height: number,
        public slots: BingoSlot[][]
    ) {
        this.length = width * height;
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
        return dest;
    }

    private static createSlot(variation: IBingoSlotConfig, index: number, width: number): BingoSlot {
        const { value, label, description, imageURL } = variation;
        const [x, y] = [index % width, Math.floor(index / width)];
        return new BingoSlot(value, label, description, imageURL, { x, y });
    }

    static create(config: IBingoConfig): BingoSheet {
        const {width, height} = config.sheet;
        const slots: BingoSlot[][] = Array(height).fill(true).map(() => []);
        const length = width * height;
        this.getShuffledListWithLength(config.slot.variations, length).map((v, i) => {
            const slot = this.createSlot(v, i, width);
            return slots[slot.position.y].push(slot);
        });
        return new BingoSheet(config.sheet.width, config.sheet.height, slots);
    }

}