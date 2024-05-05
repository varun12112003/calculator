const display=document.querySelector(".display")


function AppenTodisplay(input){

    display.value +=input;
}

function  cleatDisplay(){
        display.value=" ";
}

function claculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="error";
    }
       
}