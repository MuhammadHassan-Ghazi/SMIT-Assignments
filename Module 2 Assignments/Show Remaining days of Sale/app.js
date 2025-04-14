
function calculateDaysLeft() {
    var current = new Date().getTime();
    var saleEnd = new Date("14 Apr 2025 00:00:00").getTime();

    var res = (saleEnd - current) / (1000 * 60 * 60 * 24);
    res = Math.ceil(res); 
    return res;
}

document.getElementById('remDays').innerHTML = calculateDaysLeft();
