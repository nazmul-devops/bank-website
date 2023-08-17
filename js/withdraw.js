// Withdraw and Total Balance interaction
// step-01:

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('new-withdraw-input');

    const previousDepositTotal = getElementValueById('withdraw-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('withdraw-total', newDepositTotal);
    
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

});