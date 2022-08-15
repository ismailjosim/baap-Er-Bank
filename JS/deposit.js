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

    // step-02: Get deposit balance Amount
    const PreviousBalanceStr = depositBalance.innerText;
    const PreviousBalance = parseFloat(PreviousBalanceStr);

    // step-03: input + balance amount
    const deposit = PreviousBalance + NewAmount;
    depositBalance.innerText = PreviousBalance + NewAmount;

    // step-04: Convert total amount to number
    const Balance = totalBalance.innerText;
    const mainBalance = parseFloat(Balance);

    // step-05: update main balance
    totalBalance.innerText = mainBalance + NewAmount;

    // step-06: clear input field
    depositAmount.value = '';
});

// Withdrawal Amount section
WithdrawalButton.addEventListener('click', function () {
    // Step-01: get input amount
    const NewAmountStr = WithdrawalAmount.value;
    const NewAmount = parseFloat(NewAmountStr);

    // step-02: Get deposit balance Amount
    const PreviousBalanceStr = withdrawalBalance.innerText;
    const PreviousBalance = parseFloat(PreviousBalanceStr);

    // step-03: input + balance amount
    const deposit = PreviousBalance + NewAmount;
    withdrawalBalance.innerText = PreviousBalance + NewAmount;

    // step-04: Convert total amount to number
    const Balance = totalBalance.innerText;
    const mainBalance = parseFloat(Balance);

    // step-05: update main balance
    totalBalance.innerText = mainBalance - NewAmount;

    // step-06: clear input field
    WithdrawalAmount.value = '';
});
