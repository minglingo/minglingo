import { string } from "prop-types"

export type MessageGenerator = (args:any[]) => string;
export type MessageValue = string | string[] | MessageGenerator | MessageGenerator[];

export interface Config {
    application: {
        name: string;
    };
    bingo: {
        sheet: {
            width: number;
            height: number;
        };
        slot: {
            variations: {
                value: string;
                label: string;
                description: string;
            }[]
        }
    };
    languages: {
        lang: string;
        label: string;
        default?: boolean;
    }[];
    messages: {
        [lang:string]: {
            introduction: MessageValue;
            congratulation: MessageValue;
        }
    };
}