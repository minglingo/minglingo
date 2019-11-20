import { messages } from "../config.json";

export function get(key: string): string | string[] | null {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get('lang') || messages._default_lang;
    const dict = (messages as any)[lang];
    return dict ? dict[key] : null;
}

export default {
    get
};