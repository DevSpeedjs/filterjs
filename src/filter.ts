import { badwords } from "./badword";

interface FilterTextOptions {
  text?: string,
  textoveride?: boolean,
  DisableBlackList?: Boolean,
  customBlacklist?: string[],
}


export class TextFilter {
      public options?: FilterTextOptions| null;
      text: string | null;

      constructor(options?: FilterTextOptions) {
        this.text = options?.text || null;
        this.options = options;
      }

    censor(text?: string | undefined){
    
      const gtext: string  = text || this.text as string;
      if(this.options?.DisableBlackList === true) return this.text;
      const blacklistwords = [...badwords]


      let customblacklist = this.options?.customBlacklist;

      if(typeof customblacklist !== "undefined" && Array.isArray(customblacklist) && customblacklist.length > 0){
        const customfilteredtext = this.censorText(gtext, customblacklist);
   
        if(this.options?.textoveride == true) this.text = customfilteredtext;
        return customfilteredtext;
      }
      let filtertext  = this.censorText(gtext, blacklistwords)
      if(this.options?.textoveride == true) this.text = filtertext;
      return filtertext;
    }

    private censorText(text: string, blacklistwords: string[],){
      const reg = new RegExp(blacklistwords.join("|"), 'gm')
      return text.replace(reg, (match)=>{
        let stars = '';
        for (var i = 0; i < match.length; i++) {
            stars += '*';
          }
          return stars;
      })
    }
  

}

