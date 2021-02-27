function sumOdds() {
    // INPUT: User will enter the number/Integer to input text field
    let n = parseInt(document.getElementById('integer').value); //converting string to a number by using parseInt
    let sumOdds = 0;

    // PROCESSING: Will calculate odd numbers using repetition structure
    for (let odd = 1; odd <= n; odd += 2) {

        // Sum up the odd numbers
        sumOdds = sumOdds + odd;
    }

    // OUTPUT: Displays the total result from odd calculations.
    document.getElementById('output').innerHTML = `Total Sum of Odd Value is ${sumOdds}.`; 

}
    