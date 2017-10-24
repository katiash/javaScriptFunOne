var HOUR=7;
var MINUTE=5;
var PERIOD="PM";

var day_period;

if(PERIOD=="AM"){ 
    if(HOUR<=6){
        day_period=" at night.";
    }
    else{
        day_period=" in the morning.";
    }
}
else{

    if(6<=HOUR<12){
        day_period=" in the evening.";
    }
    else{
        day_period=" in the afternoon.";
    }
}

if(MINUTE<30){
    if(MINUTE==25)
    {
        console.log("It's a quarter after " + HOUR + day_period);
    }
    
    else if(MINUTE==5){
        console.log("It's 5 after " + HOUR + day_period);
    }

    else{
        console.log("It's just after " + HOUR + day_period);        
    }
}
   
else if(MINUTE >30){
    console.log("It's almost " + (HOUR+1) + day_period);
}