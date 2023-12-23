

for(let i = 0; i < document.getElementsByClassName("drum").length; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function (){
        triggerSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    })

    document.getElementsByClassName("drum")[i].addEventListener("keydown", (event) => { 
        triggerSound(event.key);
        buttonAnimation(event.key);
    })

}

function triggerSound(key){ 
    let note;
    if (key == "w"){
        note = "tom-1";
    } else if (key === "a"){
        note = "tom-2";
    } else if (key === "s"){
        note = "tom-3";
    } else if (key === "d"){
        note = "tom-4";
    } else if (key === "j"){
        note = "snare";
    } else if (key === "k"){
        note = "crash";
    } else if (key === "l"){
        note = "kick-bass";
    }
    let sound = new Audio(`sounds/${note}.mp3`);
    sound.play();
}

function buttonAnimation(key){
    document.querySelector(`.${key}`).classList.add("pressed");
    setTimeout(function () {
        document.querySelector(`.${key}`).classList.remove("pressed");
    }, 100)

}