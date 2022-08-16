// ===========> select elements
const depositButton = document.getElementById('btn-deposit');
const depositAmount = document.getElementById('deposit-field');
const depositBalance = document.getElementById('deposit-balance');

const totalBalance = document.getElementById('total-balance');

const WithdrawalAmount = document.getElementById('withdrawal-field');
const WithdrawalButton = document.getElementById('btn-withdrawal');
const withdrawalBalance = document.getElementById('withdrawal-balance');


// Event

// deposit Amount section
depositButton.addEventListener('click', function () {
    // Step-01: get input amount
    const NewAmountStr = depositAmount.value;
    const NewAmount = parseFloat(NewAmountStr);

    // step-02: clear input field
    depositAmount.value = '';

    // step-03: Check NaN & Negative Values
    if (isNaN(NewAmount) || NewAmount < 0) {
        alert("Please Enter a Valid Number!");
        return;
    }

    // step-04: Get Previous balance & convert --> Number.
    const PreviousBalanceStr = depositBalance.innerText;
    const PreviousBalance = parseFloat(PreviousBalanceStr);

    // step-05: Update deposit Balance
    const deposit = PreviousBalance + NewAmount;
    depositBalance.innerText = deposit;

    // step-06: Convert total amount --> number
    const Balance = totalBalance.innerText;
    const mainBalance = parseFloat(Balance);

    // step-07: update main balance
    totalBalance.innerText = mainBalance + NewAmount;

});

// Withdrawal Amount section
WithdrawalButton.addEventListener('click', function () {
    // Step-01: get input amount & convert into number.
    const NewAmountStr = WithdrawalAmount.value;
    const NewAmount = parseFloat(NewAmountStr);

    // step-02: clear input field
    WithdrawalAmount.value = '';

    // step-03: Check NaN & Negative Values
    if (isNaN(NewAmount) || NewAmount < 0) {
        alert("Please Enter a Valid Number!");
        return;
    }
    // step-04: Get Previous balance & convert --> Number.
    const PreviousBalanceStr = withdrawalBalance.innerText;
    const PreviousBalance = parseFloat(PreviousBalanceStr);

    // step-05: Convert total amount --> number
    const Balance = totalBalance.innerText;
    const mainBalance = parseFloat(Balance);

    // step-06: Check total balance > withdrawal balance
    if (NewAmount > mainBalance) {
        alert(`You don't have that Much amount in your bank account`);
        return; // function will stop here.
    }

    // step-07: Update Withdrawal Balance
    const deposit = PreviousBalance + NewAmount;
    withdrawalBalance.innerText = deposit;

    // step-08: update main balance
    totalBalance.innerText = mainBalance - NewAmount;


});
