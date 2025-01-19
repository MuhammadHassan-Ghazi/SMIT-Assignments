
// for(var i = 1 ; i <= 100 ;i++){
//     for(var j = 1 ; j <= i ; j++){
//         document.write('*')
//     }
//     document.write('<br />')
// }


let n = 20; // Number of rows
let final = ""
for (let i = 1; i <= n; i++) {
    let row = '';
    
    // Adding spaces for the current row
    for (let j = 1; j <= n - i; j++) {
        row += ' ';
    }
    
    // Adding stars for the current row
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += '*';
    }

    final += row + '<br />'
    console.log(row)
}

// document.getElementById('pattern').innerHTML = final;