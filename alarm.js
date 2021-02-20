//INPUT: This will give the user's status to check their daily schedule using get the current month, current day of the month, and current day of the week from their computer’s clock:


function checkAlarm() {
    let now = new Date();
    let month = now.getMonth();         
    let dayOfMonth = now.getDate();   
    let dayOfWeek = now.getDay();      
    let sleep;
    let alert = sleep;

    //PROCESSING: By using compound condition will be able to determine today's schedule that will indicate if the user will sleep or get back to work.

    if ( month == 0 && dayOfMonth == 1 || month == 6 && dayOfMonth == 4 || month == 11 && dayOfMonth == 4 || dayOfWeek == 0 && dayOfWeek == 6 ) {
        
        alarm = "Hey! You are authorized to 'Sleep in' today ";      
    }
    else {

        alarm = "Get up! You need to work.  " ;
    }

    //OUTPUT: Displays the information to the user if it will be a dayoff or go back to work status.
        
          document.getElementById("outputDiv").innerHTML = alarm;
        }



