interface FilterTextOptions {
    text?: string;
    textoveride?: boolean;
    DisableBlackList?: Boolean;
    placeholder?: string;
    customBlacklist?: string[];
}
export declare class TextFilter {
    options?: FilterTextOptions | null;
    text: string | null;
    constructor(options?: FilterTextOptions);
    censor(text?: string | undefined): string | null;
    private censorText;
    private _checkTextForBlacklist;
    hasblacklist(text: string, callback?: (result: boolean, blacklist: string[], text: string) => {}): boolean;
}
export {};
//# sourceMappingURL=filter.d.ts.map