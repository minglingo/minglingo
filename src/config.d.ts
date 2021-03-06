import { ReactNode } from 'react';

export type MessageGenerator = (args:any[]) => string | ReactNode;
export type MessageValue = string | string[] | MessageGenerator | MessageGenerator[];

export interface Config {
    application: {
        name: string;
        banner_link?: string;
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
                description?: string;
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
            start_btn: MessageValue;
            introduction: MessageValue;
            congratulation: MessageValue;
            total_bingo_count: MessageValue;
            found: MessageValue;
            banner_message?: MessageValue;
        }
    };
}