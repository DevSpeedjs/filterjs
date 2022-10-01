"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFilter = void 0;
const badword_1 = require("./badword");
class TextFilter {
    constructor(options) {
        var _a;
        this.text = (options === null || options === void 0 ? void 0 : options.text) || null;
        this.options = options;
        if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.customBlacklist) {
            if (!Array.isArray(this.options.customBlacklist)) {
                throw new Error(`type Array is Expected for customBlacklist`);
            }
        }
    }
    censor(text) {
        var _a, _b, _c;
        if (!text && !this.text)
            throw new Error("censor is defined but Doesn't have a Text value");
        if (typeof text !== "string")
            throw new Error(`Type string is Expected for text instead got ${typeof text}`);
        const gtext = text || this.text;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.DisableBlackList) === true)
            return this.text;
        let blacklist = ((_b = this.options) === null || _b === void 0 ? void 0 : _b.customBlacklist) || badword_1.badwords;
        const filteredtext = this.censorText(gtext, blacklist);
        if (((_c = this.options) === null || _c === void 0 ? void 0 : _c.textoveride) == true)
            this.text = filteredtext;
        return filteredtext;
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
    _checkTextForBlacklist(text, blacklist) {
        const spiltText = text.split(" ");
        const filteredArray = spiltText.map((txt) => {
            return {
                string: txt,
                ismatch: blacklist.join(" ").includes(txt),
            };
        }).filter((res) => {
            return res.ismatch === true && res.string.length > 0;
        });
        return {
            isfull: filteredArray.length > 0 ? true : false,
            array: filteredArray.map(res => res.string)
        };
    }
    hasblacklist(text, callback) {
        var _a;
        if (!text && !this.text)
            throw new Error("blacklist is defined but Doesn't have a Text value");
        let TextString = text || this.text;
        let blacklist = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.customBlacklist) || badword_1.badwords;
        const matcharray = this._checkTextForBlacklist(TextString, blacklist);
        if (matcharray.isfull === true) {
            if (callback && typeof callback === "function") {
                callback(true, matcharray.array, TextString);
            }
            return true;
        }
        else {
            if (callback && typeof callback === "function") {
                callback(false, matcharray.array, TextString);
            }
            return false;
        }
    }
}
exports.TextFilter = TextFilter;
//# sourceMappingURL=filter.js.map