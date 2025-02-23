document.addEventListener('keydown', function (event) {
    // Prevent default action for some keys like "Enter"
    event.preventDefault();

    // Check which key was pressed
    if (event.key >= '0' && event.key <= '9') {
        inputValue(event.key); // Numbers 0-9
    } else if (event.key === '%') {
        inputValue('%'); // Percentage
    } else if (event.key === '/') {
        inputValue('/'); // Division
    } else if (event.key === '*') {
        inputValue('*'); // Multiplication
    } else if (event.key === '-') {
        inputValue('-'); // Subtraction
    } else if (event.key === '+') {
        inputValue('+'); // Addition
    } else if (event.key === '.') {
        inputValue('.'); // Decimal
    } else if (event.key === 'Enter') {
        result(); // Equals sign
    } else if (event.key === 'Backspace') {
        clearValue(); // Delete
    } else if (event.key === 'Delete') {
        clearAll(); // AC (clear all)
    }
});



function inputValue(val){
    var input = document.getElementById("input");
    if(input.value == "" && (val == "00"  || val == 0)) return;
    if(input.value == "" && val == ".") val = "0.";
    if(input.value == "Error") input.value = "";
    input.value += val;
}

function result(){
    var input = document.getElementById("input");
    try{
        var result = eval(input.value)
        input.value = result == 0 ? "" : result
    }
    catch(e){
        input.value = "Error"
    }
}

function clearAll(){
    var input = document.getElementById("input");
    input.value = ""
}

function clearValue(){
    var input = document.getElementById("input");
    if(input.value == "Error") {
        input.value = "";
        return;
    };
    var editval = input.value.slice(0, -1);
    input.value = editval
}