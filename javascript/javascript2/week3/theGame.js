const form = document.querySelector("form");
const playerL = document.querySelector("#playerL");
const playerS = document.querySelector("#playerS");
const result = document.querySelector("#result");

form.addEventListener("submit", startGame);

let counterPlayerL
let counterPlayerS



function startGame(e) {
    e.preventDefault();
    const input = e.target.getElementByID("number");
    const seconds = Number(input.value);
    if (!isNaN(seconds)) {
        counterPlayerL = 0;
        counterPlayerS = 0;
        TrackingPlayersWithIn(seconds);
        playerL.innerText = counterPlayerL;
        playerS.innerText = counterPlayerS;
        return;
    }
}


function TrackingPlayersWithIn(sec) {
    counterPlayerL = 0;
    counterPlayerS = 0;
    document.addEventListener('keyup', Counter);
    setTimeout(() => {
        debugger
        document.removeEventListener('keyup', Counter);
        showResult();
    }, sec * 1000);
}

function Counter(e) {
    if (e.key === 's' || e.key === 'S')
        counterPlayerS++
    if (e.key === 'l' || e.key === 'L')
        counterPlayerL++

    playerL.innerText = counterPlayerL;
    playerS.innerText = counterPlayerS;
}

function showResult() {
    const winner = counterPlayerL > counterPlayerS ? "PLAYER L" : (counterPlayerL != counterPlayerS ? "PLAYER S" : "NO ONE");
    result.innerText = " The winner is " + winner;
}