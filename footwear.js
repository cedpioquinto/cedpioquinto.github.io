function footwear(){
// Input -get user selection from the text box
    // Progressing - Choose the correct Footwear 
    let footwear
    let weather = document.getElementById("weather").value


//PROCESSING: user assigned info to specified footwear
    if (weather=="hot"){footwear="Sandals";}
    else if(weather=="rain"){footwear="Galoshes";}
    else if(weather=="snow"){footwear="Boots";}
    else{footwear="Shoes";}

    //OUTPUT: Displays the appropriate footwear for the weather
    document.getElementById('output').innerHTML =  'I highly recommend you to wear ' +  footwear + '.';
}



    
        
    



