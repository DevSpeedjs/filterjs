"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFilter = void 0;
const badword_1 = require("./badword");
class TextFilter {
    constructor(options) {
        this.text = (options === null || options === void 0 ? void 0 : options.text) || null;
        this.override = true;
    }
    censor(text, options) {
        var _a, _b;
        if ((options === null || options === void 0 ? void 0 : options.override) === true) {
            this.text = text;
        }
        else {
            this.override = false;
        }
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.DisableBlackList) == true)
            return null;
        const blacklistwords = [...badword_1.badwords];
        const reg = new RegExp(blacklistwords.join("|"), "gm");
        if (text) {
            return text === null || text === void 0 ? void 0 : text.replace(reg, (match) => {
                let stars = '';
                for (var i = 0; i < match.length; i++) {
                    stars += '*';
                }
                return stars;
            });
        }
        if (this.text === undefined) {
            return console.error("Text is not defined");
        }
        if (this.text === null)
            return null;
        return (_b = this.text) === null || _b === void 0 ? void 0 : _b.replace(reg, (match) => {
            let stars = '';
            let postion;
            for (let i = 0; i < match.length; i++) {
                stars += '*';
            }
            return stars;
        });
    }
}
exports.TextFilter = TextFilter;
//# sourceMappingURL=filter.js.map