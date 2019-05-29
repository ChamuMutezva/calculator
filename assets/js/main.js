
let input=document.getElementById("input");

let grids=document.querySelectorAll(".grid");
for(let i=0;i<grids.length;i++){
        grids[i].addEventListener("click",screenize)
      
        
    }
function screenize(){
let inputvalue=this.innerText;
input.innerHTML=inputvalue;
    
 
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
function operation(func,num1,num2){
 return  func(num1,num2)  ;
}


