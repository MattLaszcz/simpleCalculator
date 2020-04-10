const defaultResult = 0;

let currentResult = defaultResult;

let logEntries = [];

function getUserInput (){
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog (
    operationIdentifier, 
    prevResult, 
    operationNumber, 
    newResult)
    {
        const logEntry = {
            operation: operationIdentifier,
            previousResult: prevResult,
            number: operationNumber,
            result: newResult
        }; //Creating an object.
        logEntries.push(logEntry);
        console.log(logEntries);

}

function add() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber; //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('+',initialResult,enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);

}

function subtract(){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('-',initialResult,enteredNumber); 
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply () {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('*',initialResult,enteredNumber); 
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide () {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= parseInt(enteredNumber); //.value will give the actual value from userInput from vendorJS
    createAndWriteOutput('/',initialResult,enteredNumber); 
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}



addBtn.addEventListener('click', add); //only pass the function name do noot use () when adding in event listeniner.
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




