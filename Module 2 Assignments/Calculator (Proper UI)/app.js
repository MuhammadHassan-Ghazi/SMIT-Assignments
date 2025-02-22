function inputValue(val){
    var input = document.getElementById("input");
    if(input.value == "" && (val == "00"  || val == 0)) return;
    if(input.value == "" && val == ".") val = "0.";
    input.value += val;
}

function result(){
    var input = document.getElementById("input");
    var result = eval(input.value)
    input.value = result == 0 ? "" : result
}

function clearAll(){
    var input = document.getElementById("input");
    input.value = ""
}

function clearValue(){
    var input = document.getElementById("input");
    var editval = input.value.slice(0, -1);
    input.value = editval
}