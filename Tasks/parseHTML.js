var strArray= ["<option>Jazz</option>","<option>Blues</option>","<option>New Age</option>","<option>Classical</option>","<option>Opera</option>"];

for(let i=0;i<strArray.length;i++){
    let a = strArray[i].indexOf('>');
    let b = strArray[i].lastIndexOf('<');
    console.log(strArray[i].substring(a+1,b));
}