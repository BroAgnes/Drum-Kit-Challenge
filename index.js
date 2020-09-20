let buttons = document.querySelectorAll(".drum");

function drumSound(pressedDrum){
    buttonAnimation(pressedDrum);
    switch (pressedDrum) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "s":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(pressedDrum);
            break;
    }
}

//detecting mouse click

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function() {
        drumSound(this.innerHTML);
    });
    
}

//detecting keyboard press
document.addEventListener("keydown", function(event){
    drumSound(event.key);
});

function buttonAnimation(pressedDrum) {
    let activeDrum = document.querySelector("." + pressedDrum);
    activeDrum.classList.add("pressed");
    setTimeout(function() {
        activeDrum.classList.remove("pressed");
    }, 100);
}

