


//deposit and withdraw event
document.getElementById('deposit-btn').addEventListener('click', () =>{
    //get deposit amount
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = Number(depositInput.value);
    

    //get deposit card and set amount
    const depositCard = document.getElementById('deposit-card');
    const depositPreviousAmount = Number(depositCard.innerText);
    const totalDepositAmount = depositPreviousAmount + depositAmount;

    depositCard.innerText = totalDepositAmount;
    depositInput.value = "";

    //add deposit amount in balance card
    const balanceCard = document.getElementById('balance-card');
    const previousBalance = Number(balanceCard.innerText);
    const newBalance = previousBalance + depositAmount;
    balanceCard.innerText = newBalance;
    
     
    
})

//withdraw and minus balance
document.getElementById('withdraw-btn').addEventListener('click', () =>{
    
    //get withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountValue = parseFloat(withdrawInput.value);
    withdrawInput.value = '';

    //update withdraw card
    const withdrawCard = document.getElementById('withdraw-card');
    const withdrawCardValue = parseFloat(withdrawCard.innerText);
    const withdrawAmountTotal = withdrawCardValue + withdrawAmountValue; 
    withdrawCard.innerText = withdrawAmountTotal;
    
   
    //add withdraw amount in balance card
    const balanceCard = document.getElementById('balance-card');
    const previousBalance = parseFloat(balanceCard.innerText);
    const newBalance = previousBalance - withdrawAmountValue;
    balanceCard.innerText = newBalance;
    
})
