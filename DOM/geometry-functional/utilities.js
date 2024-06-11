
//get input value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);

    return inputValue;
}

//set inner text value
function setInnerText(innerTextId, innerValue){
    const innerText = document.getElementById(innerTextId);
    innerText.innerText = innerValue;
}

