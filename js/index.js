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
    // step-02:
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueString = depositInput.value;
    const newDepositInputValue = parseFloat(depositInputValueString);
    
    // step-03:
    depositInput.value = '';

    // step-04: 
    const depositAmountTag = document.getElementById('deposit-total');
    const previousDepositAmountString = depositAmountTag.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    //STEP-05:
    const depositAmountTotal = previousDepositAmount + newDepositInputValue;
    depositAmountTag.innerText = depositAmountTotal;

    // step-06: 
    const balanceAmountTag = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceAmountTag.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
     
    // step-07:
    const balanceAmountTotal = previousBalanceAmount + newDepositInputValue;
    balanceAmountTag.innerText = balanceAmountTotal;
});


// Withdraw and Total Balance interaction
// step-01:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-02:
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValueString = withdrawInput.value;
    const newWithdrawInputValue = parseFloat(withdrawInputValueString);
    // step-03:
    withdrawInput.value = '';

    // // step-04: 
    const withdrawAmountTag = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawAmountTag.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    // //STEP-05:
    const withdrawAmountTotal = previousWithdrawAmount + newWithdrawInputValue;
    withdrawAmountTag.innerText = withdrawAmountTotal;

    // // step-06: 
    const balanceAmountTag = document.getElementById('balance-total');
    const previousBalanceAmountString = balanceAmountTag.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceAmountString);
     
    // // step-07:
    const balanceAmountTotal = previousBalanceAmount - newWithdrawInputValue;
    balanceAmountTag.innerText = balanceAmountTotal;
});