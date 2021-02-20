
//INPUT: Cust enters amount and check day of the week.

function discount() {
    
    let subtotal = parseFloat(document.getElementById('subtotalamt').value);
    var dayOfWeek = new Date().getDay();

    //PROCESSING: Determine customer's discount if purchased made on Tuesday or Wednesday and if total items is more than 50 USD
    let total;
    if (subtotal > 50 && dayOfWeek == 2) {
        total = subtotal * 0.9;
    }
    else if (subtotal > 50 && dayOfWeek == 3) {
        total = subtotal * 0.9;
    }
    else {
        total = subtotal;
    }

    //OUTPUT: Displays final rate after taxes
    finalRate = total * 1.06
    document.getElementById('output').innerHTML = '$' + finalRate.toFixed(2)
}