// 1 out the text Called after 2.5 seconds
function delayMessage() {
    setTimeout(function () {
        console.log("called after 2.5 second");
    }, 2.5 * 1000);
}
delayMessage()

// 2
function logOut(delay, stringToLog) {
    setTimeout(function () {
        console.log(stringToLog)
    }, delay * 1000);
}
logOut(5, "called after 5 second");

// 3 
function LogOutString() {
    logOut(5, "called after 5 second");
}
addEventListener("click", LogOutString);

// 4 
let earth = function earthLogger() {
    return "earth"
};
let saturn = function saturnLogger() {
    return "saturn"
};
function planLogFunction(planet) {
    console.log(planet())
}
planLogFunction(earth);
planLogFunction(saturn);

// 5
function logLocation() {
    navigator.geolocation.getCurrentPosition(success,error);  
}
const  pageBody = document.querySelector("body")

function success(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const  locationDiv = document.createElement("div");
    locationDiv.innerHTML = `<p>this is the latitude: ${lat}</p>
    <p>This is the longitude: ${long}</p>`;
    pageBody.appendChild(locationDiv);
}

function error(err) {
        let errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.innerHTML = `<p>${err.message}</p>`;
        pageBody.appendChild(errorDiv);
    }

    let locationBtn = document.getElementById("locationBtn")
    locationBtn.addEventListener("click", logLocation);

    //7 
    let callback = function (delay) {
        let theMessage = `will logs out after ${delay} seconds`
        console.log(theMessage);
    }
    function runAfterDelay(delay, callback) {
        setTimeout(callback(delay), delay * 1000);
    }
    console.log(runAfterDelay(1, callback));
    console.log(runAfterDelay(5, callback));


    //8 
    pageBody.addEventListener("dblclick", function () {
        setTimeout(parInsereter, 0.5 * 1000)
    });

    function parInsereter() {
        const p = document.querySelector("p");
        p.innerText = "double click!";
        pageBody.appendChild(p);
    }

    // 9 

    function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
        shouldTellFunnyJoke ?  logFunnyJoke() : logBadJoke();
    }

    let reddel = [{
        que: "What do Alexander the Great and Winnie the Pooh have in common ?",
        ans: " the Same middle name."
    },
    {
        que: "Did you hear about the guy whose whole left side was cut off?",
        ans: `He's all right now.`
    }
    ];

    function randomReddel() {
        let max = 1;
        return Math.floor(Math.random() * (max + 1));
    }
    let number = randomReddel();

    let question = reddel[number].que; // return a number ? 

    function logFunnyJoke() {
        console.log(question);
        setTimeout(function () {
            console.log(reddel[number].ans);
        }, 2 * 1000);
    }

    function logBadJoke() {
        console.log(`i don't tell bad jokes :p`)
    }
    jokeCreator(true, logFunnyJoke, logBadJoke);
    jokeCreator(false, logFunnyJoke, logBadJoke);

    // function as a variable 
    const funArray = [
        firstFunc,
        secondFunc,
        thirdFunc
    ]
    function firstFunc() {
        console.log("i am the first function");
    }
    function secondFunc() {
        console.log("i am the second function");
    }
    function thirdFunc() {
        console.log("i am the third function");
    }
funArray.forEach(func => func());

    /*Create a function as a const and try creating a function normally.
     Call both functions. */
    const funcExpression = function () {
        return "I am an unnamed exression function"
    }
    function normalFunc() {
        return "I am a normal function";
    }
    funcExpression();
    normalFunc();

    /*Create an object that has a key whose value is a function. 
    Try calling this function.*/
     function myName (name) {
        return `my name is ${name}`;
    }

   function myAge (age) {
        return `my age is ${age}`;
    }

    let funcObj = {
        Name: myName,
        age: myAge,
    }

    funcObj.Name("maha");
    funcObj.age("25");