const calbuttons = document.querySelectorAll(".calbuton");
const calbox = document.getElementById("calbox");
const clearbutton = document.getElementById("c");
const addbutton = document.getElementById("add");


function updateNumber(number) {
    calbox.innerText += number
    

    
}

function add(number1, number2) {
    return number1 + number2;
}


function subtract(number1, number2) {
     return number1 - number2;
}



function mutiplication(number1, number2) {
     return number1 * number2;
}




function divide(number1, number2) {
    if(number2 !== 0) {
        return number1 / number2;
    } 

    return "ERROR";
     
}




function clear() {
   calbox.innerText = '0';
}

function handelClick(event) {
    let buttonClicked = event.target;
    
   
    if(!isNaN(buttonClicked.innerText)) {
         updateNumber(buttonClicked.innerText)
    }

    if(buttonClicked.innerText === 'C') {
         clear();
    }


}

for(let i = 0; i < calbuttons.length; i++) {
    calbuttons[i].addEventListener("click", handelClick);
    console.log(handelClick)
 }

// calbox.addEventListener("click", handelClick);
// console.log(calbox.updateNumber)

// clearbutton.addEventListener("click", clear);
// console.log(clearbutton)





