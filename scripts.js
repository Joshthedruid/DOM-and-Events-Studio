// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeOff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    const rocket = this.document.getElementById("rocket");

    let myPositionX = 360;
    let myPositionY = 250;

    takeOff.addEventListener("click", function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(response){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
        }
    });

    landing.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.")

        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        myPositionX = 360;
        myPositionY = 250;
        rocket.style.left = String(myPositionX) + "px";
        rocket.style.top = String(myPositionY) + "px";
    });

    missionAbort.addEventListener("click", function(){
        let response = window.confirm("Confirm that you want to abort the mission.");

        if(response){
            flightStatus.innerHTML = "Mission Aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            myPositionX = 360;
            myPositionY = 250;
            rocket.style.left = String(myPositionX) + "px";
            rocket.style.top = String(myPositionY) + "px";
        }
    });

    left.addEventListener("click", function(){
        if(myPositionX > -20){
            myPositionX -= 10;
            rocket.style.left = String(myPositionX) + "px";
        }
    });

    right.addEventListener("click", function(){
        if(myPositionX < 710){
            myPositionX += 10;
            rocket.style.left = String(myPositionX) + "px";
        }
    });

    up.addEventListener("click", function(){
        if(myPositionY > 0){
            let myNum = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = myNum + 10000;

            myPositionY -= 10;
            rocket.style.top = String(myPositionY) + "px";
        }
    });

    down.addEventListener("click", function(){
        if(myPositionY < 250){
            let myNum = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = myNum - 10000;

            myPositionY += 10;
            rocket.style.top = String(myPositionY) + "px";
        }
    });
});