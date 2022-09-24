interface FilterTextOptions {
    text?: string;
    textoveride?: boolean;
    DisableBlackList?: Boolean;
    customBlacklist?: string[];
}
export declare class TextFilter {
    options?: FilterTextOptions | null;
    text: string | null;
    constructor(options?: FilterTextOptions);
    censor(text?: string | undefined): string | null;
    private censorText;
}
export {};
//# sourceMappingURL=filter.d.ts.map