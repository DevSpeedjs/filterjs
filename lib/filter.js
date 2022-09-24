"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFilter = void 0;
const badword_1 = require("./badword");
class TextFilter {
    constructor(options) {
        this.text = (options === null || options === void 0 ? void 0 : options.text) || null;
        this.options = options;
    }
    censor(text) {
        var _a, _b, _c, _d;
        const gtext = text || this.text;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.DisableBlackList) === true)
            return this.text;
        const blacklistwords = [...badword_1.badwords];
        let customblacklist = (_b = this.options) === null || _b === void 0 ? void 0 : _b.customBlacklist;
        if (typeof customblacklist !== "undefined" && Array.isArray(customblacklist) && customblacklist.length > 0) {
            const customfilteredtext = this.censorText(gtext, customblacklist);
            if (((_c = this.options) === null || _c === void 0 ? void 0 : _c.textoveride) == true)
                this.text = customfilteredtext;
            return customfilteredtext;
        }
        let filtertext = this.censorText(gtext, blacklistwords);
        if (((_d = this.options) === null || _d === void 0 ? void 0 : _d.textoveride) == true)
            this.text = filtertext;
        return filtertext;
    }
    censorText(text, blacklistwords) {
        const reg = new RegExp(blacklistwords.join("|"), 'gm');
        return text.replace(reg, (match) => {
            let stars = '';
            for (var i = 0; i < match.length; i++) {
                stars += '*';
            }
            return stars;
        });
    }
}
exports.TextFilter = TextFilter;
//# sourceMappingURL=filter.js.map