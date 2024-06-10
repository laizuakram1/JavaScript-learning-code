
//get input value with input ID
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';

    return inputValue;
}

//get inner text value  by input ID
function getInnerText(inputId){
    const textElement = document.getElementById(inputId);
    const textElementValue = parseFloat(textElement.innerText);
    

    return textElementValue;
}

//set text element value
function setTextElementValue(elementId, setValue){
    const element = document.getElementById(elementId);
    element.innerText = setValue;

}




/******************************************************************************/

//main functional work in baap er bank

//deposit amount add deposit card and balance
document.getElementById('deposit-btn').addEventListener('click', () =>{
    //get deposit input value
    const depositValue = getInputValue('deposit-input');
    
    //get inner text
    const previousDepositAmount = getInnerText('deposit-card');
    const totalDepositAmount = previousDepositAmount + depositValue;
    
    //set deposit value in deposit card
    setTextElementValue('deposit-card', totalDepositAmount); 

    //set deposit value in balance card
    const previousTotalBalance = getInnerText('balance-card');
    const newBalanceTotal = previousTotalBalance + depositValue;

    setTextElementValue('balance-card', newBalanceTotal);
    
    
    

})

//add withdraw amount and minus from balance card
document.getElementById('withdraw-btn').addEventListener('click', () =>{
    //get withdraw input value
    const withdrawAmount = getInputValue('withdraw-input');

    //get withdraw card text value
    const previousWithdrawBalance = getInnerText('withdraw-card');
    const newWithdrawBalance = withdrawAmount + previousWithdrawBalance;
    
    //set withdraw amount in withdraw card
    setTextElementValue('withdraw-card', newWithdrawBalance);

    //update main balance
    const previousMainBalance = getInnerText('balance-card');
    const newbalance = previousMainBalance - withdrawAmount;

    setTextElementValue('balance-card', newbalance);
})

