import { isString } from "util";

function abbreviateString(str) {

 if(typeof(str)=='string')
 {
    let firstWord = str.split(' ')[0];
    let lastWord = str.substring(str.lastIndexOf(" ")+1);
    let new_abbrivated_string=`${firstWord} ${lastWord[0].toUpperCase()}.`
    return new_abbrivated_string;
 }
 else
 {
    throw 'Parameter is not a string!';
 }
}

  
export { abbreviateString };
