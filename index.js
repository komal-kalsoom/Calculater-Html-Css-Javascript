const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const specialCharacter = ["%","*","/","-","+","="];
let output = "";
// calculate function based on button clicked.
const calculate = (btnValue) => {
    if(btnValue === "=" && output !==""){
        //if output has "%" replace with "/100" before evaluating
        output = eval(output.replace("%","/100"));
    }
    else if(btnValue === "AC"){
        output = "";
    }
    else if(btnValue === "DEL"){
        // remove last character from the output
        output = output.toString().slice(0,-1);
    }
    else{
        // if output is empty and button is specialCharacter then return
        if(output === "" && specialCharacter.includes(btnValue)) return;
         output += btnValue;
       
         }
    display.value = output;
}

// Add event listener to buttons, call calculate() on click
buttons.forEach((button)=>{
// button click 
button.addEventListener("click", e =>calculate(e.target.dataset.value))
})