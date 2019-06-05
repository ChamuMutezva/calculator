
let input = document.getElementById("input"); // displays the number and operators entered 
let arr = [];
let opsarr = [];
let waitforsec = false;
let bracketMode = false;
let total = 0;

let equal = document.querySelector(".equal");
equal.addEventListener("click", equals);
let grids = document.querySelectorAll(".grid");
for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("click", operate)
}
let functions = document.querySelectorAll(".func");
for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener("click", operate)
}

//use brackets and a bracket function such that the opening
//bracket will allow the entry of numbers in an array or string 
//format. These numbers has to be operated once the closing bracket has been applied.

let brackets = document.querySelectorAll(".bracket");
for (let i = 0; i < brackets.length; i++) {
    brackets[i].addEventListener("click", assemble)
}


function assemble() {
    console.log("brackets working ");
    console.log(this.innerText);
    if (this.innerText === "(") {
        bracketMode = true;
        input.value = this.innerText;
    } else {         
        input.value = input.value + this.innerText;        
        total = eval(input.value);
        input.value = input.value + " = " + total.toFixed(3).toString();
        console.log(total);
        bracketMode = false;
    }
}
//=======ADD======//

function add(a, b) {
    return a + b;
}
//=======SUBSTRACT====//

function substract(a, b) {
    return a - b;
}
//====== MULTİPLY =====//

function multiply(a, b) {
    return a * b;

}
//====DİVİDE ======//

function divide(a, b) {
    return a / b;

}
//=====MAİN OPERATİON=====//

function operate(operator, num1, num2) {
    if (bracketMode) {
        input.value += this.innerText;
    } else {
        if (!this.classList.contains("func")) {
            if (input.value == 0) {

                input.value = "";
                input.value += Number(this.innerText);
            } else {
                input.value += (this.innerText);
            }
        } else if (!this.classList.contains("current-op") && this.classList.contains("func")) {
            if (!waitforsec) {
                let num1 = Number(input.value);
                arr.push(num1);
                input.value = "";
                waitforsec = true;
                console.log(num1)
            } else {
                let num2 = Number(input.value);
                arr.push(num2);
                input.value = "";
                waitforsec = false;
                console.log(num2)
            }
            this.classList.add("current-op")
            opsarr.push(this.innerText)
        }
    }
}

function equals() {

    if (opsarr[opsarr.length - 1] == "+") {
        total = add(arr[arr.length - 1], Number(input.value));
        input.value = (total).toFixed(3);

    } else if (opsarr[opsarr.length - 1] == "-") {
        total = substract(arr[arr.length - 1], Number(input.value));
        input.value = (total).toFixed(3);
    } else if (opsarr[opsarr.length - 1] == "*") {
        total = multiply(arr[arr.length - 1], Number(input.value));
        input.value = (total).toFixed(3);
    } else if (opsarr[opsarr.length - 1] == "/") {
        if (!Number(input.value) == 0) {
            total = divide(arr[arr.length - 1], Number(input.value));
            input.value = (total).toFixed(3);
        } else {
            window.alert("ERROR!")
        }

    }

    let ops = document.querySelectorAll(".current-op");
    for (let i = 0; i < ops.length; i++) {
        ops[i].classList.remove("current-op")

    }


}
