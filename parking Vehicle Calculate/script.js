
function Calculate() {

    // Get input values
    let vehicle = document.getElementById("vehicle").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    // Check input
    if (start == "" || end == "") {
        alert("Please enter parking time!");
        return;
    }

    // Convert time to minutes
    let startTime = Number(start.split(":")[0]) * 60
                  + Number(start.split(":")[1]);

    let endTime = Number(end.split(":")[0]) * 60
                + Number(end.split(":")[1]);

    // Calculate parking time
    let totalMinutes = endTime - startTime;
    // Support overnight parking
    if (totalMinutes <= 0) {
        totalMinutes = totalMinutes + 1440;
    }
    // Calculate parking hours
    let hours = Math.max(1, Math.floor(totalMinutes / 60));

    // Set parking rates
    let normalRate;
    let overtimeRate;

    if (vehicle == "car") {
        normalRate = 500;
        overtimeRate = 1000;
    } else {
        normalRate = 200;
        overtimeRate = 300;
    }
    // Calculate normal and extra hours
    let normalHours = Math.min(hours, 8);
    let overtimeHours = Math.max(hours - 8, 0);

    // Calculate parking fee
    let totalFee;
    if (hours <= 8) {
        totalFee = hours * normalRate;
    } else {
        totalFee = hours * overtimeRate;
    }
    // Convert Riel to Dollar
    let dollar = totalFee / 4000;

    // Display Riel
    document.getElementById("riel").value =
        totalFee.toLocaleString() + " ៛";
    
    // Display Dollar
    document.getElementById("dollar").value =
        dollar.toFixed(2) + " $";

    // Display result
    document.getElementById("result").innerHTML =
        "<b>Result of parking</b><br>" +
        "Type of vehicle: " + vehicle + "<br>" +
        "Time of parking: " + hours + " ម៉ោង<br>" +
        "Normal Time: " + normalHours + " ម៉ោង<br>" +
        "OverTime: " + overtimeHours + " ម៉ោង<br>" +
        "Total parking fee: " +
        totalFee.toLocaleString() + " ៛";

}
