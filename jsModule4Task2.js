
let reg = /[A-Z]/;
reg = /[A-Z]/g;


let name = "Saloni Ram Raja 123 &&8 bash";
for(let i=0;i<name.length;i++){

let res = reg.exec(name);
if(res == null)
break;
console.log(res);

}





