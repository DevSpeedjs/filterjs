import { badwords } from "./badword";

interface FilterTextOptions {
      text?: string,
      blacklist?: string
      DisableBlackList?: Boolean,
}


export class FilterText {
      public options?: FilterTextOptions;
      text: string | null

      constructor(options?: FilterTextOptions) {
        this.text = options?.text || null;
      }

    censor(text?: string | undefined){
      if(this.options?.DisableBlackList == true) return null;

      const blacklistwords = [...badwords]
      const reg = new RegExp(blacklistwords.join("|"), "gm")
       
      if(text) { 
        return text?.replace(reg, (match)=>{
          let stars = '';
          for (var i = 0; i < match.length; i++) {
              stars += '*';
            }
            return stars;
        })
      }
       
      if(this.text === undefined) { return console.error("Text is not defined")}

      if(this.text === null) return null;
      
      return this.text?.replace(reg, (match) => {
          let stars = ''
          let postion: any;
          for (let i = 0; i < match.length; i++) {
             stars += '*' 
          }
      
          return stars; 
      })
      
    }


}

