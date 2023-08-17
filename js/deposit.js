/**
 * 1. add event listener to the deposit button
 * 2. get deposit amount from the deposit input field
 * 2.5. convert string deposit amount to a number type
 * 3. Clear the deposit input field after getting the value
 * 4. get the previous deposit amount total
 * 5. calculate new deposit total and set the value to the deposit total.
 * 6. get the previous total balance amount
 * 7. calculate new balance total and set the value to the balance total.
*/

// Deposit and Total Balance interaction
// step-01:
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('new-deposit-input');

    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);
    
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

});


