let timer;
let startingValue;
let stoppedValue;
let firstStage = true;
let audio = new Audio('./bell - edgepixel - pixabay.mp3');
const input = document.getElementById('inputValue');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const stageEle = document.getElementById('stage');
const mainImage = document.getElementById('mainImage');

disable(stopButton);
disable(resetButton);

function startTimer(){
    if(stoppedValue != input.value){
        startingValue = input.value;
        audio.play();
    }
    clearInterval(timer);
    timer = setInterval(myTimer, 1000);
    enable(stopButton);
    enable(resetButton);
    disable(startButton);
}

function myTimer() {
    input.value--;
    if(input.value == 0){
        if(firstStage){
            audio.play();
            firstStage = false;
            input.value = startingValue;
            stageEle.textContent = "EYES CLOSED";
            mainImage.style.filter = "brightness(0.2)";
            return;
        }
    clearInterval(timer);
    audio.play();
    setTimeout(()=>{audio.currentTime = 0; audio.play();}, 3000);
    stageEle.textContent = "MEDITATION COMPLETE";
    mainImage.style.filter = "";
    disable(stopButton);
    }
}

function stopTimer(){
    stoppedValue = input.value;
    clearInterval(timer);
    enable(startButton);
    disable(stopButton);
}

function resetTimer(){
    firstStage = true;
    input.value = startingValue;
    clearInterval(timer);
    enable(startButton);
    disable(resetButton);
    disable(stopButton);
    stageEle.textContent = "STARE IMAGE";
    mainImage.style.filter = "";
}

function changeImage(img){
    mainImage.src = img.src;
}

function disable(element){ element.setAttribute("disabled",""); }
function enable(element){ element.removeAttribute("disabled"); }