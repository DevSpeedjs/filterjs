interface FilterTextOptions {
    text?: string;
    blacklist?: string;
    DisableBlackList?: Boolean;
}
export declare class FilterText {
    options?: FilterTextOptions;
    text: string | null;
    constructor(options?: FilterTextOptions);
    censor(text?: string | undefined): string | void | null;
}
export {};
//# sourceMappingURL=filter.d.ts.map