
export interface IBingoSlotConfig {
    value: string;
    label: string;
    description?: string;
    imageURL?: string;
}

export default class BingoSlot {
    constructor(
        public value: string,
        public label: string,
        public description: string = "",
        public imageURL: string = "",
        public position: {
            x: number,
            y: number
        } = { x: 0, y: 0 },
        public punched: boolean = false
    ) {}
}