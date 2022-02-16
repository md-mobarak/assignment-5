document.getElementById('calculate-button').addEventListener('click', function name(params) {
    let totalBalanceInput = document.getElementById('total-income')
    let totalBalanceNumber = parseFloat(totalBalanceInput.value);
    let totalBalance = totalBalanceNumber;

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

    // Expenses 
    let expensesInput = document.getElementById('total-expenses')
    let expensesNumber = parseFloat(expensesInput.innerText)
    expensesInput.innerText = totalExpenses


    let restBalanceInput = document.getElementById('rest-balance')
    let restBalanceNumber = parseFloat(restBalanceInput.innerText)
    restBalanceInput.innerText = totalExpensesMinus
});

document.getElementById('save').addEventListener('click', function name(params) {

    let saveInput = document.getElementById('save-input');
    let saveNumber = parseFloat(saveInput.value);
    let saveTotal = saveNumber;

    let total = totalExpensesMinus * saveTotal;
    let totalinput = total / 100;
    console.log(totalinput);


})


