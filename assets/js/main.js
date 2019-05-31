
let input=document.getElementById("input");
let arr=[];
let waitforsec=true;
let total=0;


let grids=document.querySelectorAll(".grid");
for(let i=0;i<grids.length;i++){
        grids[i].addEventListener("click",operate)
    }
let functions=document.querySelectorAll(".func");
for(let i=0;i<functions.length;i++){
    functions[i].addEventListener("click",operate)
}
/////////////ADD  //////////////
function add(a,b){
    return a+b;
}
/////////SUBSTRACT   /////////
function substract(a,b){
    return a-b;
} 
//////////MULTİPLY   /////////////
function multiply(a,b){
    return a*b;
    
}
//////////DİVİDE   /////////////
function divide(a,b){
    return a/b;
    
}
//////////MAİN OPERATİON   ///////////


function operate(operator,num1,num2){
if(Number(this.innerText)){
input.value+=this.innerText;
}else if(!Number(this.innerText)){
            if(waitforsec){
                let num1=Number(input.value);
                 arr.push(num1);
                input.value="";
                 waitforsec=true;
            }else{
                 let num2=Number(input.value);
                 arr.push(num2);
                 waitforsec=false;
            }
    if(this.innerText==="+"){
        while(arr.length>=2){
       total= add(arr[arr.length-2],arr[arr.length-1])
       console.log(total)
            
        }
    
}        

}


console.log(total)

}



