import { messages } from "../config.json";

function getAvailableLangs(): { lang: string, label: string, default: boolean }[] {
    return (messages as any)._available_langs;
}

function getDefaultLang(): string {
    const availables = getAvailableLangs() || [];
    if (!availables) return 'ja';
    const found = availables.find((l) => l.default);
    if (!found) return 'ja';
    return found.lang;
}

function get(key: string): string | string[] | null {
    const url = new URL(window.location.href);
    const lang = url.searchParams.get('lang') || getDefaultLang();
    const dict = (messages as any)[lang];
    return dict ? dict[key] : null;
}

export default {
    get,
    getAvailableLangs,
};