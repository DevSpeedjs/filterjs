interface FilterTextOptions {
    text?: string;
    blacklist?: string;
    DisableBlackList?: Boolean;
}
interface censorOptions {
    override?: Boolean;
}
export declare class TextFilter {
    options?: FilterTextOptions;
    text: string | null;
    private override;
    constructor(options?: FilterTextOptions);
    censor(text?: string | undefined, options?: censorOptions): string | void | null;
}
export {};
//# sourceMappingURL=filter.d.ts.map