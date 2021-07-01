let nowTurn = 0;
let brownScore = 0;
let greenScroe = 0;

// When window load finished..
window.addEventListener('load', function () {
    // Add all pressable boards click events
    var pressableBoards = document.getElementsByClassName("pressable-board");
        
    Array.prototype.forEach.call(pressableBoards, (target, index) => {
        target.addEventListener('click', (e) => {
            if(e.target.childNodes.length != 0) {
                // Already Clicked not click.
                console.log("CAN`T!");
            }
            else {
                let addTarget;
                if(nowTurn == 0) addTarget = new BrownCircle();
                else addTarget = new GreenX();
                e.target.appendChild(addTarget.element);
                nowTurn = (nowTurn + 1) % 2;
                setTurnPoint();
            }
        })
    });

    // toggle turn.
    setTurnPoint();
    // make score
    setScore();
});

function setScore() {
    document.getElementById("brown-team-score").innerText = "" + brownScore;
    document.getElementById("green-team-score").innerText = "" + greenScroe;
}

function setTurnPoint() {
    // If nowTurn == 0, Brown Turn. If not, Green Turn
    if(nowTurn == 0) {
        document.getElementById("brown-turn").classList.remove('non-visible');
        document.getElementById("green-turn").classList.add('non-visible');
    }
    else {
        document.getElementById("brown-turn").classList.add('non-visible');
        document.getElementById("green-turn").classList.remove('non-visible');
    }
}

function eventBlocker(el, ev) {
    ev.stopPropagation();
}

class BrownCircle {
    constructor() {
        let divEl = document.createElement('div');
        divEl.innerHTML = 
        `<div class="outer-circle">
            <div class="inner-circle" onClick="eventBlocker(this, event)"></div>
        </div>`;
        this.element = divEl.firstChild;
    }
}

class GreenX {
    constructor() {
        let divEl = document.createElement('div');
        divEl.innerHTML = 
        `<div class="x-container" onClick="eventBlocker(this, event)">
            <div class="x-left"></div>
            <div class="x-right"></div>
        </div>`;
        this.element = divEl.firstChild;
    }
}