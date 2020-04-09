const defaultResult = 0;

let currentResult = defaultResult;

function getUserInput (){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber; //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('+',initialResult,enteredNumber);

}

function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('-',initialResult,enteredNumber); 
}

function multiply () {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('*',initialResult,enteredNumber); 
}

function divide () {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('/',initialResult,enteredNumber); 
}



addBtn.addEventListener('click', add); //only pass the function name do noot use () when adding in event listeniner.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
 // code can be injected with ${defaultResult} this will show the value of default result




