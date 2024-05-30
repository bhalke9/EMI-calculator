
let loanAmountValue, interestRateValue, MonthsToPayValue; // Define variables in the global scope

function calculateLoan() {
    loanAmountValue = parseFloat(document.getElementById("loan-amount").value); // Parse input values to numbers
    interestRateValue = parseFloat(document.getElementById("interest-rate").value);
    MonthsToPayValue = parseFloat(document.getElementById("months-to-pay").value);
}

function loanCalculation() {
    // Ensure loanAmountValue, interestRateValue, and MonthsToPayValue have valid values
    if (isNaN(loanAmountValue) || isNaN(interestRateValue) || isNaN(MonthsToPayValue)) {
        alert('Please enter valid numbers for loan amount, interest rate, and months to pay.');
        return;
    }

    let r = interestRateValue / 12 / 100;
    let emi = ((loanAmountValue * r * Math.pow(1 + r, MonthsToPayValue)) / (Math.pow(1 + r, MonthsToPayValue) - 1)).toFixed(2);
    document.getElementById("payment").innerHTML = `Monthly Payment: ${emi}`;
}
