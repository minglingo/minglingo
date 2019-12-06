import config from '../config';
import { ReactNode } from 'react';

const messages = config.messages;

function getDefaultLang(): string {
    const availables = config.languages || [];
    if (!availables) return 'ja';
    const found = availables.find((l) => l.default);
    if (!found) return 'ja';
    return found.lang;
}

function get(key: string, args: any[] = []): string | string[] | ReactNode | null {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get('lang') || getDefaultLang();
    const dict = (messages as any)[lang];
    const v = dict[key];
    if (typeof v === 'undefined') return null;
    if (typeof v === 'function') return v(args) as ReactNode;
    return v;
}

export default {
    get,
};
