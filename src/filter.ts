import { badwords } from "./badword";

interface FilterTextOptions {
  text?: string,
  textoveride?: boolean,
  DisableBlackList?: Boolean,
  cleanWith?: string,
  customBlacklist?: string[],
}




export class TextFilter {
  public options?: FilterTextOptions | null;
  text: string | null;

  constructor(options?: FilterTextOptions) {
    this.text = options?.text || null;
    this.options = options;

    if(this.options?.customBlacklist){
      if(!Array.isArray(this.options.customBlacklist)){
       throw new Error(`type Array is Expected for customBlacklist`)
      }
    }
  }

  censor(text?: string | undefined) {
    if(!text && !this.text) throw new Error ("censor is defined but Doesn't have a Text value");
    if(typeof text !== "string") throw new Error(`Type string is Expected for text instead got ${typeof text}`);

    const gtext: string = text || this.text as string;
    if (this.options?.DisableBlackList === true) return this.text;


    let blacklist = this.options?.customBlacklist || badwords;

    const filteredtext = this.censorText(gtext, blacklist);

    if (this.options?.textoveride == true) this.text = filteredtext;

    return filteredtext;  

  }

  private censorText(text: string, blacklistwords: string[],) {
    const reg = new RegExp(blacklistwords.join("|"), 'gm')
    return text.replace(reg, (match) => {
      let stars = '';
      for (var i = 0; i < match.length; i++) {
        stars += this.options?.cleanWith || "*";
      }
      return stars;
    })
  }

  private _checkTextForBlacklist (text: string, blacklist: string[]){
   const spiltText = text.split(" ")
   const filteredArray = spiltText.map((txt)=>{
      return {
        string: txt,
        ismatch: blacklist.join(" ").includes(txt),
      }
    }).filter((res)=> {
        return res.ismatch === true && res.string.length > 0; 
    })




    return {
      isfull: filteredArray.length > 0 ? true : false, 
      array:  filteredArray.map( res => res.string)
    }
  }

  hasblacklist(text: string,  callback?: (result: boolean, blacklist: string[], text: string) => {}){
    if(!text && !this.text) throw new Error("blacklist is defined but Doesn't have a Text value");
  
    let TextString = text || this.text as string
    let blacklist = this.options?.customBlacklist || badwords
  
    const matcharray = this._checkTextForBlacklist(TextString, blacklist)
      
    if(matcharray.isfull === true){
      if(callback && typeof callback === "function"){
          callback(true, matcharray.array, TextString)
      }
      return true;
    } else {

      if(callback && typeof callback === "function"){
        callback(false, matcharray.array, TextString)
      }   
      return false;
    }   
  }



}

