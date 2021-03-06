//create a sequence five times multiplied up to 12 format
let output = '';
let result = 0;

//Processing: calculate 12 times 
for (let i = 1; i <= 12; i++) {    
    result = 5 * i;
    // OUTPUT: Shows the result
    output += `5 × ${i} = ${result}<br>`;}
document.getElementById('output').innerHTML = output;
