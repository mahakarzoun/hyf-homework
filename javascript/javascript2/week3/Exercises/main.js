// variables 
// counter 
const body = document.querySelector('body');
const counterBtn = document.querySelector('button')
let count = -1
// delayBtn
const delayBtn = document.getElementById('delay')
let message;
const delayMessage = document.getElementById('delayMessage');
//mouseposition
let coords;
let mousePositionList = [];
//const averageCalculater= (preValue, currValue) => ((preValue + currValue) / mousePositionList.length)




counterBtn.addEventListener('click', () => {
    count += 1
    counterBtn.innerHTML = `counter : ${count}`;
})

function logMessage() {
    message = 'log in 3 seconds';
    delayMessage.innerText = message
    // message as alocal variable in thre function logmessage
    // const changeText = delayMessage.innerText
    setTimeout(() => {
        message = 'This text was delayed by 3 seconds';
        delayMessage.innerText = message
    }, 3000);
}

delayBtn.addEventListener('click', logMessage
)

/*() => {
    logMessage
    delayBtn.innerText=message  it doesnt work } */

//page onload 
const fullyLoaded = () => {
    const onload = document.getElementById('onload');
    onload.innerText = "DOM fully loaded and parsed";
}
window.addEventListener('load', fullyLoaded)
//window.onload = fullyLoad

// mous position 
// how to know the position of the mouse 
// creat a callback function settimeout 
// mouse event in the eventlistiner 

function Mouseposition(event) {
    const x = event.clientX;
    const y = event.clientY;
    coords = { 'x': x, 'y':y }
    const coordsForPointer = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("showCoords").innerText = coordsForPointer;
    mousePositionList.push(coords)
}
window.addEventListener('mouseover', 
    Mouseposition
)

setTimeout(()=> {
    window.removeEventListener('mouseover',Mouseposition);
    const x =  mousePositionList.map(element => element.x)
               .reduce((x1,x2)=>x1+x2)
    const y =  mousePositionList.map(element => element.y)
               .reduce((y1,y2)=>y1+y2)
    const averageX = Math.round(x/mousePositionList.length)
    const averageY = Math.round(y/mousePositionList.length)
    console.log(`average x and y position of a user after 30 seconds : (${averageX},${averageY})`)  
}, 30000)
