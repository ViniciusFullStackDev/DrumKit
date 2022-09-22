// // usando .addEventListener para capturar eventos de mouse e teclado
// document.querySelector("button").addEventListener("click", handlerClick);

// function handlerClick () {
//     alert("I got clicked")
// }



//----------------------------------------------------------------------------



//desafio aula 162. adicionar o evento click a todos os botões ao mesmo tempo
let drumButtons = document.querySelectorAll("button.drum")
let audios = ["sounds/tom-1.mp3", "sounds/tom-2.mp3",
    "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3"]

for (let b = 0; b < drumButtons.length; b++) {
    let drumAudio = new Audio(audios[b])
    document.querySelectorAll("button")[b].addEventListener("click", function () {
        drumAudio = new Audio(audios[b])
        drumAudio.play()

        btnAnimation(this.innerHTML)
    });
}

document.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            let snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            let crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            let kickBass = new Audio("sounds/kick-bass.mp3")
            kickBass.play()
            break;

        default: console.log(btnInnerHTML);
    }

    btnAnimation(e.key)
})

function btnAnimation (currentKey) {
    
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}



//----------------------------------------------------------------------------



// // --usando switch statement--

// let drumButtons = document.querySelectorAll("button.drum")

// for (let b = 0; b < drumButtons.length; b++) {
//     document.querySelectorAll("button")[b].addEventListener("click", function () {
//         var btnInnerHTML = this.innerHTML

//         switch (btnInnerHTML) {
//             case "w":
//                 let tom1 = new Audio("sounds/tom-1.mp3")
//                 tom1.play()
//                 break;
//             case "a":
//             let tom2 = new Audio("sounds/tom-2.mp3")
//                 tom2.play()
//                 break;
//             case "s":
//                 let tom3 = new Audio("sounds/tom-3.mp3")
//                 tom3.play()
//                 break;
//             case "d":
//                 let tom4 = new Audio("sounds/tom-4.mp3")
//                 tom4.play()
//                 break;
//             case "j":
//                 let snare = new Audio("sounds/snare.mp3")
//                 snare.play()
//                 break;
//             case "k":
//                 let crash = new Audio("sounds/crash.mp3")
//                 crash.play()
//                 break;
//             case "l":
//                 let kickBass = new Audio("sounds/kick-bass.mp3")
//                 kickBass.play()
//                 break;

//             default: console.log(btnInnerHTML);
//         }

//     });
// }




//-----------------------------------------------------------------------------



// //--usando .addEventListener para com function anônima--

// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked")
// });



//-----------------------------------------------------------------------------



// //--usando o próprio evento (".evento", ex: .onclick, .onload, .onmouseover), como uma função--

// document.querySelector("button").onclick = function (e) {
//     document.querySelector("button").classList.add("pressed")
//     alert("I got clicked")
// }

