

function isJavaScriptFile(String) {

    return String.endsWith(".js");

    
}

let theFile = 'index.js';
let theFile1 = 'index.jss';
console.log(isJavaScriptFile(theFile),"\n",isJavaScriptFile(theFile1));