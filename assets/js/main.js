
let input=document.getElementById("input");
let arr=[];
let opsarr=[];
let waitforsec=false;
let total=0;

let equal=document.querySelector(".equal");
equal.addEventListener("click",equals)
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
if(Number(this.innerText)&&!this.classList.contains("grid-17")){
    if(input.value== 0){
        
        input.value="";
        input.value+=Number(this.innerText);
    }else {
        input.value+=Number(this.innerText);
    }
    
}else if(!Number(this.innerText)&&!this.classList.contains("current-op")){
            if(!waitforsec){
                let num1=Number(input.value);
                 arr.push(num1);
                input.value="";
                 waitforsec=true;
                 console.log(num1)
            }else{
                 let num2=Number(input.value);
                 arr.push(num2);
                 input.value="";
                 waitforsec=false;
                 console.log(num2)
            }
this.classList.add("current-op")        
opsarr.push(this.innerText)
}
}

function equals(){

    if(opsarr[opsarr.length-1]=="+"){
        total=add(arr[arr.length-1],Number(input.value));
        input.value=total;
        
    }else if(opsarr[opsarr.length-1]=="-"){
            total=substract(arr[arr.length-1],Number(input.value));
            input.value=total;
        }else if(opsarr[opsarr.length-1]=="*"){
            total=multiply(arr[arr.length-1],Number(input.value));
            input.value=total;
        }else if(opsarr[opsarr.length-1]=="/"){
            if(!Number(input.value)==0){
                total=divide(arr[arr.length-1],Number(input.value));
                input.value=total;
            }else{
                window.alert("ERROR!")
            }
            
        }

        let ops=document.querySelectorAll(".current-op");
        for(let i=0;i<ops.length;i++){
            ops[i].classList.remove("current-op")

    }
    

}


