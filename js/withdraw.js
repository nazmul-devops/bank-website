// Withdraw and Total Balance interaction
// step-01:

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('new-withdraw-input');

    const previousWithdrawTotal = getElementValueById('withdraw-total');
   
    const previousBalanceTotal = getElementValueById('balance-total');
   
    if (newWithdrawAmount > previousBalanceTotal){
        alert('You cannot withdraw more than your balance amount. Please enter less or equal amount of your balance.')
    } 
    else {
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }

});