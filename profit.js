let today = new Date();

document.getElementById("date").innerHTML =
"Today's Date : " +
today.toLocaleDateString("en-PK",{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric"
});

// Get data from Local Storage

let sales = JSON.parse(localStorage.getItem("sales")) || [];

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Calculate Total Sales

let totalSales = sales.reduce(function(sum,sale){

    return sum + sale.amount;

},0);

// Calculate Total Expenses

let totalExpenses = expenses.reduce(function(sum,expense){

    return sum + expense.amount;

},0);

// Show totals

document.getElementById("sales").innerHTML =
"Rs. " + totalSales;

document.getElementById("expenses").innerHTML =
"Rs. " + totalExpenses;

// Calculate Profit

let profit = totalSales - totalExpenses;

let result = document.getElementById("result");

if(profit >= 0){

    result.style.color = "green";

    result.innerHTML =
    "Net Profit : Rs. " + profit;

}

else{

    result.style.color = "red";

    result.innerHTML =
    "Net Loss : Rs. " + Math.abs(profit);

}