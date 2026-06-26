let btn = document.getElementById("addVendorBtn");

btn.addEventListener("click", function () {

    let vendor = document.getElementById("vendorName").value.trim();

    if(vendor === ""){
        alert("Please enter a vendor name.");
        return;
    }

    let vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    vendors.push(vendor);

    localStorage.setItem("vendors", JSON.stringify(vendors));

    alert("Vendor added successfully!");

    document.getElementById("vendorName").value = "";
});