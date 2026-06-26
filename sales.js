let sales = JSON.parse(localStorage.getItem("sales")) || [];

// Show today's date automatically

let today = new Date();

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("date").innerHTML =
"Today's Date : " + today.toLocaleDateString("en-PK", options);


// Add Sale Function
function loadSales(){

    let total = 0;

    for(let i = 0; i < sales.length; i++){

        let row = document.createElement("tr");

row.innerHTML = `
    <td>${sales[i].name}</td>
    <td>Rs. ${sales[i].amount}</td>
`;

        document.getElementById("tableBody").appendChild(row);

        total += sales[i].amount;

    }

document.getElementById("total").innerHTML = "Rs. " + total;

}

loadSales();
function addSale(){

let name = document.getElementById("name").value.trim();

    let amount = Number(document.getElementById("amount").value);

    if(name === "" || amount <= 0){

alert("Please enter a valid name and amount.");
        return;
    }

    // Save complete sale in array
    sales.push({
        name: name,
        amount: amount
    });
localStorage.setItem("sales", JSON.stringify(sales));
    // Create new row in table

    let row = document.createElement("tr");
row.innerHTML = `
    <td>${name}</td>
    <td>Rs. ${amount}</td>
`;

    document.getElementById("tableBody").appendChild(row);

    // Calculate total

    let total = sales.reduce(function(sum, sale){

        return sum + sale.amount;

    }, 0);

    document.getElementById("total").innerHTML = total;

    // Show all sales in console

    console.clear();

    console.log("------ Sales Array ------");
    console.log(sales);

    console.log("------ Sales Details ------");

    for(let i = 0; i < sales.length; i++){

        console.log(
            "Product: " + sales[i].name +
            " | Amount: Rs. " + sales[i].amount
        );

    }

    console.log("Total Sales = Rs. " + total);

    // Clear input boxes

    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";

}
function clearSales(){

    if(confirm("Are you sure you want to delete all sales?")){

        localStorage.removeItem("sales");
        location.reload();

    }

}