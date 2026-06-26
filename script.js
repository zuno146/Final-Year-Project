let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// Today's Date

let today = new Date();

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("date").innerHTML =
"Today's Date : " + today.toLocaleDateString("en-PK", options);

function loadExpenses(){

    let total = 0;

    for(let i = 0; i < expenses.length; i++){

        let row = document.createElement("tr");

row.innerHTML = `
    <td>${expenses[i].name}</td>
    <td>Rs. ${expenses[i].amount}</td>
`;

        document.getElementById("tableBody").appendChild(row);

        total += expenses[i].amount;

    }

document.getElementById("total").innerHTML = "Rs. " + total;

}

loadExpenses();
// Add Expense

function addExpense(){

let expenseName = document.getElementById("expenseName").value.trim();

    let amount = Number(document.getElementById("amount").value);

    if(expenseName === "" || amount <= 0){

alert("Please enter a valid name and amount.");
        return;
    }

    // Save expense in array

    expenses.push({

        name: expenseName,
        amount: amount

    });
localStorage.setItem("expenses", JSON.stringify(expenses));
    // Create table row

    let row = document.createElement("tr");

row.innerHTML = `
    <td>${expenseName}</td>
    <td>Rs. ${amount}</td>
`;

    document.getElementById("tableBody").appendChild(row);

    // Calculate total expenses

    let total = expenses.reduce(function(sum, expense){

        return sum + expense.amount;

    },0);

    document.getElementById("total").innerHTML = total;

    // Console Output

    console.clear();

    console.log("------ Expense Array ------");
    console.log(expenses);

    console.log("------ Expense Details ------");

    for(let i = 0; i < expenses.length; i++){

        console.log(
            "Expense: " + expenses[i].name +
            " | Amount: Rs. " + expenses[i].amount
        );

    }

    console.log("Total Expenses = Rs. " + total);

    // Clear inputs

    document.getElementById("expenseName").value = "";
    document.getElementById("amount").value = "";

}
function clearExpenses(){

    if(confirm("Are you sure you want to delete all expenses?")){

        localStorage.removeItem("expenses");
        location.reload();

    }

}