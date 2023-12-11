const calbuttons = document.querySelectorAll(".calbuton");
const calbox = document.getElementById("calbox");
const clearbutton = document.getElementById("c");
const addbutton = document.getElementById("add");
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let numOfClicks = 0;



function updateNumber(number) {
    if(numOfClicks > 0) {
         calbox.innerText += number
    } else {
        calbox.innerText = number
    }

    
}

function add(number1, number2) {
    let result =  number1 + number2;
    // calbox.innerText = result;
    return result;
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

function equal() {
   let numtobecalculate = calbox.innerText;
   let result;
   try {
      result = eval(numtobecalculate);
      calbox.innerText = result;
   } catch {
        calbox.innerText = 'ERROR';
   }
}



function clear() {
   calbox.innerText = '0';
}

function handelClick(event) {
    let buttonClicked = event.target;
    
    // let operator = buttonClicked.innerText;
    
    // console.log("DEBUG Second Number " + secondNumber)

    
   
    if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === '.') {
         updateNumber(buttonClicked.innerText)
         return
    }

    if(buttonClicked.innerText === 'C') {
         clear();
    } 
    else {
        firstNumber = calbox.innerText;
        operator = buttonClicked.innerText;
        calbox.innerText = '0';
        if(buttonClicked.innerText === '=') {
             secondNumber = calbox.innerText;
             if(buttonClicked.innerText === '+') {
                calbox.innerText = add(parseInt(firstNumber), parseInt(secondNumber));
                   console.log(firstNumber + secondNumber)
            }
             
            if(buttonClicked.innerText === '-') {
                      subtract(firstNumber, secondNumber); 
                      console.log(firstNumber - secondNumber)
            }

            if(buttonClicked.innerText === '*') {
                mutiplication(firstNumber, secondNumber);
            }

            if(buttonClicked.innerText === '/') {
                    divide(firstNumber, secondNumber)
            }
            

        } else {
            firstNumber = calbox.innerText;
            operator = buttonClicked.innerText;
        }

       
    }

    
  numOfClicks++;

}

for(let i = 0; i < calbuttons.length; i++) {
    calbuttons[i].addEventListener("click", handelClick);
    console.log(handelClick)
 }


