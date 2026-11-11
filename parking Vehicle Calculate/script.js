function Calculate(){
    let vehicle = document.getElementById("vehicle").value;
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    if(start == "" || end ==""){
        alert("Please enter parking time!");
        return;
    }
    let starttime = number(start.split(":")[0]) * 60 +
     Numberstart.split(":")[1];
    let endTime = Number(end.split(":")[0])* 60 +
    Number (end .split(":")[1]);

    let totalMinutes = endTime - starttime;
    if (totalMinutes <= 0 ){
        totalMinutes = totalMinutes + 1440;
    }
    let hours = Math.ceil(totalMinutes/60);
    let normalRate;
    let overtimeRate;
    if(vehicle == "car"){
        normalRate = 500;
        overtimeRate = 1000;

    }else{
        normalRate = 200;
        overtimeRate = 300;
    }
    let normalHours = Math.min(hours,8);
    let overtimeHours = Math .max(hours - 8,0);
    let totalFee = (normalHours * normalRate)
                    + (overtimeHours * overtimeRate)
    let dollar = totalFee / 4000;
    document.getElementById("riel") .value = totalFee.toLocaleString() + "riel";
    document.getElementById("dollar").value = dollar.toFixed(2) = "dollar";
    document.getElementById("result").innerHTML = 
    "<b>Result of calculate</br><br>" +
    "Type of vehicle: " + vehicle + "<br>" +
        "រយៈពេលផ្ញើ: " + hours + " ម៉ោង<br>" +
        "ម៉ោងធម្មតា: " + normalHours + " ម៉ោង<br>" +
        "ម៉ោងលើស: " + overtimeHours + " ម៉ោង<br>" +
        "ថ្លៃផ្ញើសរុប: " +
        totalFee.toLocaleString() + " ៛";


}