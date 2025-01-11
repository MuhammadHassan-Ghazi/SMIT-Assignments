

function GenerateTable(){
    var Table = +document.getElementById("txtTableNo").value
    var Start = +document.getElementById("txtStartingPoint").value
    var End = +document.getElementById("txtEndingPoint").value

    var error = ""
    if(Table == 0)
        error = "Required : Table No"
    else if(Start == 0 && End == 0)
        error = "Reuired : Starting and Ending point"
    else if(Start == 0)
        error = "Reuired : Starting point"
    else if(End == 0)
        error = "Reuired : Ending point"
    else if(Start > End)
        error = "Ending point must be greater or equal to Starting point"

    if(error != "")
    {
        alert(error);
        return;
    }

    var result = ""
    for(var i = Start ; i <= End ; i ++)
    {
       result += Table + ' x ' + i + ' = ' + Table * i + "<br />" 
    }

    document.getElementById("PrintTable").innerHTML = result;
}