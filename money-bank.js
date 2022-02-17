document.getElementById('calculate-button').addEventListener('click', function name(params) {
    let totalBalanceInput = document.getElementById('total-income')
    let totalBalanceNumber = parseFloat(totalBalanceInput.value);
    let totalBalance = totalBalanceNumber;

    //  error case 
    let errorCase1 = document.getElementById('error-case1')
    let errorCase2 = document.getElementById('error-case2')
    if (totalBalance < 0) {
        errorCase1.style.display = 'block'
    }
    else if (isNaN(totalBalance) == true) {
        errorCase2.style.display = 'block'
    }


    // expenses total
    let foodInput = document.getElementById('food-value');
    let foodNumber = parseFloat(foodInput.value)
    let foodTotal = foodNumber;


    let rentInput = document.getElementById('rent-value');
    let rentNumber = parseFloat(rentInput.value);
    let rentTotal = rentNumber;



    let clothsInput = document.getElementById('cloths-value');
    let clothsNumber = parseFloat(clothsInput.value);
    let clothsTotal = clothsNumber;


    let totalExpenses = foodTotal + rentTotal + clothsTotal;


    let totalExpensesMinus = totalBalance - totalExpenses;

    //  Expenses calculate
    let expensesInput = document.getElementById('total-expenses');
    let expensesNumber = parseFloat(expensesInput.innerText);
    expensesInput.innerText = totalExpenses;


    let restBalanceInput = document.getElementById('rest-balance');
    let restBalanceNumber = parseFloat(restBalanceInput.innerText)
    restBalanceInput.innerText = totalExpensesMinus;
    // error case 
    let errorCase6 = document.getElementById('error-case6')
    if (totalExpensesMinus < totalExpenses) {
        errorCase6.style.display = 'block'

    }
});

// save Button calculate

document.getElementById('save').addEventListener('click', function name(params) {
    let saveInput = document.getElementById('save-input');
    let saveNumber = parseFloat(saveInput.value);
    let saveTotal = saveNumber;

    let restBalanceInput = document.getElementById('rest-balance')
    let restBalanceNumber = parseFloat(restBalanceInput.innerText)
    let totalRestBalance = restBalanceNumber;

    let savingAmount = totalRestBalance * saveTotal / 100;
    //  error case 
    let errorCase3 = document.getElementById('error-case3')
    let errorCase4 = document.getElementById('error-case4')
    let errorCase5 = document.getElementById('error-case5')
    if (saveTotal > 100) {
        errorCase3.style.display = 'block'
    }
    else if (saveTotal < 0) {
        errorCase4.style.display = 'block'
    }

    else if (isNaN(saveTotal) == true) {
        errorCase5.style.display = 'block'
    }


    let savingAmountInput = document.getElementById('saving-amount')
    let savinAmountNumber = parseFloat(savingAmountInput.innerText);
    let totalSavingAmount = savinAmountNumber;
    savingAmountInput.innerText = savingAmount;



    //  remaining balance 
    let remainingBalanceInput = document.getElementById('remaining-balance');
    let remainingBalanceNumber = parseFloat(remainingBalanceInput.innerText);
    let totalRemainingBalance = remainingBalanceNumber;
    remainingBalanceInput.innerText = totalRestBalance - savingAmountInput.innerText

})


