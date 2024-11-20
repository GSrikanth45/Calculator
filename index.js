
const display=document.getElementById('display');

function appendToDisplay(val){

    display.value += val;

    return val;

}
function calculate(){

    try{
    	let x = display.value;

	    let y = eval(x);

    	display.value = y;

    	return y;
    }
    catch(error){
    	display.value="";
    }

}
function clearDisplay(){

    display.value = '';

}