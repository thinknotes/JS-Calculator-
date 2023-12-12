const calbuttons = document.querySelectorAll(".calbuton");
const calbox = document.getElementById("calbox");
const clearbutton = document.getElementById("c");
const addbutton = document.getElementById("add");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
// let numOfClicks = 0;
let operatorClicked = false;



function updateNumber(number) {
    if(calbox.innerText === 0){
        calbox.innerText = number;
    }
    else{
        calbox.innerText += number
    }
    

    
}

function add(number1, number2) {
    let result =  number1 + number2;
    console.log("Adding Numbers")
    console.log("Result " + result)
    // calbox.innerText = result;
    return result;
}


function subtract(number1, number2) {
     let result = number1 - number2;
     console.log("Subtracting Numbers")
     console.log("N1 " + number1)
     console.log("N2 " + number2)
     return result;
 
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

// function equal() {
//    let numtobecalculate = calbox.innerText;
//    let result;
//    try {
//       result = eval(numtobecalculate);
//       calbox.innerText = result;
//    } catch {
//         calbox.innerText = 'ERROR';
//    }
// }



function clear() {
   calbox.innerText = '0';
}

function handelClick(event) {
    let buttonClicked = event.target;
  
    
    // let operator = buttonClicked.innerText;
    
    // console.log("DEBUG Second Number " + secondNumber)

    
   
    if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === '.') {
         updateNumber(buttonClicked.innerText)
        //  numOfClicks++;
         return
    }

    else if(buttonClicked.innerText === 'C') {
         clear();
    } 
    else if(buttonClicked.innerText === '*' || buttonClicked.innerText === '+' || buttonClicked.innerText === '-' || buttonClicked.innerText === '/'){
        firstNumber = calbox.innerText;
        operator = buttonClicked.innerText;
        calbox.innerText = 0;
    }
    else {
        secondNumber = calbox.innerText;

        if(operator === "+"){
            calbox.innerText = add(parseInt(firstNumber), parseInt(secondNumber));
        }
    //     numOfClicks = 0;
    //     firstNumber = calbox.innerText;
    //     if(!operatorClicked ){
    //         operator = buttonClicked.innerText;
    //     } 
    //     operatorClicked = true
    //     // calbox.innerText = '0';
    //     if(buttonClicked.innerText === '=') {
    //          secondNumber = calbox.innerText;
    //          console.log("Operator " + operator)
    //          console.log("pressed equal button")
    //          if(operator === '+') {
    //             console.log("Frist Number " + firstNumber)
    //             console.log("Second Number " + secondNumber)
    //             calbox.innerText = add(parseInt(firstNumber), parseInt(secondNumber));
                   
                   
    //         }
             
    //         if(operator === '-') {
    //             secondNumber = calbox.innerText;
    //             console.log("Operator " + operator)
    //             console.log("pressed subtract button")
    //             console.log("Second Number " + secondNumber)
    //             calbox.innerText = subtract(parseInt(firstNumber), parseInt(secondNumber)); 
    //                   console.log(firstNumber - secondNumber)
    //         }

    //         if(buttonClicked.innerText === '*') {
    //             mutiplication(firstNumber, secondNumber);
    //         }

    //         if(buttonClicked.innerText === '/') {
    //                 divide(firstNumber, secondNumber)
    //         }
            

    //     } else {
    //         firstNumber = calbox.innerText;
    //         operator = buttonClicked.innerText;
    //     } 

       
    // } 
    
    
 

}
}
for(let i = 0; i < calbuttons.length; i++) {
    calbuttons[i].addEventListener("click", handelClick);
   
 }


