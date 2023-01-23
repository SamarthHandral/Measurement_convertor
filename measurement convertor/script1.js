let fahrenheit    =document.getElementById("fahrenheit");
let celsius   =document.getElementById("celsius");
let kelvin    =document.getElementById("kelvin");

function fahrenheitToOther(val){
    celsius.value =  (val-32)/1.8; 
    kelvin.value =  ((val-32)/1.8)+273.15;   
    
}
function celsiusToOther(val){
    fahrenheit.value = (val*1.8)+32;
    kelvin.value = val+237.15;  
   
}
function kelvinToOther(val){
    fahrenheit.value = ((val-273.15)*1.8)+32;
    celsius.value = val-272.15;  
}
    

function convertToOthers(convertFrom,value){    
    switch(convertFrom){
        case "fahrenheit" : fahrenheitToOther (parseFloat(value)); break;
        case "celsius": celsiusToOther(parseFloat(value)); break;
        case "kelvin" : kelvinToOther(parseFloat(value)); break;
    }
}