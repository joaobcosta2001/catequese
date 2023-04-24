var d = new Date("2023-05-20T11:00:00.00");




function updateTimeLeft(){
    var timeLeft = (d - (new Date())) /1000  //time left in seconds

    var daysLeft = Math.floor(timeLeft / 86400)
    timeLeft -= daysLeft * 86400
    var hoursLeft = Math.floor(timeLeft / 3600)
    timeLeft -= hoursLeft * 3600
    var minutesLeft = Math.floor(timeLeft / 60)
    timeLeft -= minutesLeft * 60
    var secondsLeft = Math.floor(timeLeft)

    document.getElementById("daysNumber").innerHTML = daysLeft.toString().padStart(2, '0')
    document.getElementById("hoursNumber").innerHTML = hoursLeft.toString().padStart(2, '0')
    document.getElementById("minutesNumber").innerHTML = minutesLeft.toString().padStart(2, '0')
    document.getElementById("secondsNumber").innerHTML = secondsLeft.toString().padStart(2, '0')
    setTimeout(updateTimeLeft,1000);
}

updateTimeLeft()
