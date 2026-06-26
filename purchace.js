let sendBtn = document.getElementById("sendBtn");
let vendorSelect = document.getElementById("vendor");

let vendors = JSON.parse(localStorage.getItem("vendors")) || [];

vendors.forEach(function(vendor){

    let option = document.createElement("option");

    option.text = vendor;
    option.value = vendor;

    vendorSelect.appendChild(option);

});
sendBtn.addEventListener("click", function () {

    let vendor = document.getElementById("vendor").value;
    let name = document.getElementById("name").value;
    let shop = document.getElementById("shop").value;
    let address = document.getElementById("address").value;
    let item = document.getElementById("item").value;

    if (
        vendor === "Select Mall" ||
        name === "" ||
        shop === "" ||
        address === "" ||
        item === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    let purchase = {
        vendor,
        name,
        shop,
        address,
        item
    };

    let purchases = JSON.parse(localStorage.getItem("purchases")) || [];

    purchases.push(purchase);

    localStorage.setItem("purchases", JSON.stringify(purchases));

    alert("Purchase saved successfully!");

    document.getElementById("vendor").selectedIndex = 0;
    document.getElementById("name").value = "";
    document.getElementById("shop").value = "";
    document.getElementById("address").value = "";
    document.getElementById("item").value = "";
});
