import {Model} from 'chomex';

export interface IBingoSlotConfig {
    value: string;
    label: string;
    description?: string;
    imageURL?: string;
}

export default class BingoSlot extends Model {

    protected static __ns = 'BingoSlot';

    public value: string;
    public label: string;
    public description: string;
    public imageURL: string;
    public position: {
        x: number,
        y: number
    };
    public punched: boolean;
    public bingo: boolean;

    constructor(props: any) {
        super(props);
        this.value = props.value;
        this.label = props.label;
        this.description = props.description;
        this.imageURL = props.imageURL;
        this.position = props.position || {};
        this.punched = props.punched || false;
        this.bingo = props.bingo || false;
    }
}