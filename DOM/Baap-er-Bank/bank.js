


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
