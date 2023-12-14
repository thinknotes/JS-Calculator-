


//Variables for the project
const calbuttons = document.querySelectorAll(".calbuton"); //All the buttons on the calculator
const calbox = document.getElementById("calbox"); //The display where all the numbers are 
const clearbutton = document.getElementById("c"); //The button to clear the display
const addbutton = document.getElementById("add"); //The button to add 



let firstNumber = 0; //Frist number the users clicks
let secondNumber = 0; //Second number the users clicks
//Tells us what operator the users has clicked
let operator = ""; 
let operatorClicked = false; 


//Updates number on display 
function updateNumber(number) {
    if(calbox.innerText === "0"){
        calbox.innerText = number;
        
    }
    else{
        calbox.innerText += number;
        
    }
    
  
    
}

//Add function
function add(number1, number2) {


    if(number1.includes(".") || number2.includes(".")) { //Checks to make sure the number is a decimal 
        let decimal1 = parseFloat(number1);
        let decimal2 = parseFloat(number2);

        return decimal1 + decimal2
    } else { //if number is not a deccimal will run reqular code
        let result =  parseFloat(number1) + parseFloat(number2);
        console.log("Adding Numbers")
        console.log("Result " + result)
        return result;
    }
    
   

    
}


//Subtract function
function subtract(number1, number2) {


      if(number1.includes(".") || number2.includes(".")) { //Checks to make sure the number is a decimal 
        let decimal1 = parseFloat(number1);
        let decimal2 = parseFloat(number2);

        return decimal1 - decimal2;
      } else { //if number is not a deccimal will run reqular code
        let result = number1 - number2;
        console.log("Subtracting Numbers")
        console.log("N1 " + number1)
        console.log("N2 " + number2)
        console.log("Result " + result)
        return result;
      }
}

//Mutiplication function 
function mutiplication(number1, number2) {


    if(number1.includes(".") || number2.includes(".")) { ///Checks to make sure the number is a decimal 
        let decimal1 = parseFloat(number1);
        let decimal2 = parseFloat(number2);

        return decimal1 * decimal2;
    } else { //if number is not a deccimal will run reqular code
        let result = number1 * number2;
        console.log("Muitplying Numbers");
        console.log("N1 " + number1)
        console.log("N2 " + number2)
        console.log("Result " + result);
         return result;
    }
}

    



//Divide function 
function divide(number1, number2) {

    if(parseFloat(number2) === 0.0 || parseInt(number2) === 0) {
        return "ERROR"; //Will return error if number is divided by zero
    }

    if(number1.includes(".") || number2.includes(".")) { //Checks to make sure the number is a decimal 
        let decimal1 = parseFloat(number1);
        let decimal2 = parseFloat(number2);


        return decimal1 / decimal2;
       
    } else { //if number is not a deccimal will run reqular code
        //Check to make sure number cant be divided by zero
            let result = parseInt(number1) / parseInt(number2);
            console.log("N1 " + number1)
            console.log("N2 " + number2)
            console.log("Result " + result);
            return result;
    
    }
    
    
     
}



//Clear display 
function clear() {
   calbox.innerText = '0';
}

function handelClick(event) {
    let buttonClicked = event.target; //Make the button clickable and records user response
     
    
 
    
   //Update the display 
    if(!isNaN(buttonClicked.innerText) || buttonClicked.innerText === '.') {
         updateNumber(buttonClicked.innerText)
        
         return
    }

    //Clear display when user clicks the C button
    else if(buttonClicked.innerText === 'C') {
         clear();
    } 
    //Declares the operators and helps 
    else if(buttonClicked.innerText === '*' || buttonClicked.innerText === '+' || buttonClicked.innerText === '-' || buttonClicked.innerText === '/'){
        firstNumber = calbox.innerText;
        operator = buttonClicked.innerText;
        calbox.innerText = 0;
    }
    //After the user uses the equal button
    else {
        secondNumber = calbox.innerText;

        //Addition operatior
        if(operator === "+"){
            // calbox.includes(secondNumber) ? "Is a decmial" : "Not a decimal";
            calbox.innerText = add(firstNumber, secondNumber);
        }

        //Subtraction operator
        if(operator === "-") {
            secondNumber = calbox.innerText;
            calbox.innerText = subtract(firstNumber,secondNumber);
        }

        //Mutiplcation operator
        if(operator === "*") {
            secondNumber = calbox.innerText;
            calbox.innerText = mutiplication(firstNumber, secondNumber);
        }

        //Division operator
        if(operator === "/") {
            secondNumber = calbox.innerText;
            calbox.innerText = divide(firstNumber, secondNumber);
        }
    
    
 
}
}
for(let i = 0; i < calbuttons.length; i++) { //Displays all the calculator buttons and make handel click work
    calbuttons[i].addEventListener("click", handelClick);
   
 }


