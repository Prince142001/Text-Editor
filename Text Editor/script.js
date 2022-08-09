let userInput=document.getElementById("getText");
let showResult=document.getElementById("showText");

// userInput.addEventListener("input",ifTextFeildBlank);
// function ifTextFeildBlank{
//     if (userInput.value=='blank') {
        
//     }
// }

// ----------------------------- Update Text in next TextArea ------------------------------
userInput.addEventListener("input",updateText);

function updateText(e) {
    showResult.textContent=e.target.value;
}

// ----------------------------- Make Bold ------------------------------
document.querySelector('.makeBold').addEventListener("click",makeBold);

function makeBold() {
    showResult.classList.toggle('makeBold')
}

// ----------------------------- Make Italic ------------------------------
document.querySelector('.makeItalic').addEventListener("click",makeItalic);

function makeItalic() {
    // showResult.style.fontStyle='italic';
    showResult.classList.toggle('makeItalic')
}

// ----------------------------- Make Underline ------------------------------
document.querySelector('.makeUnderline').addEventListener("click",makeUnderline);

function makeUnderline() {
    showResult.classList.toggle('makeUnderline')
}

// ----------------------------- Make Strike ------------------------------
document.querySelector('.makeStrike').addEventListener("click",makeUnderline);

function makeUnderline() {
    showResult.classList.toggle('makeStrike')
}

// ----------------------------- On Left ------------------------------
document.querySelector('.onLeft').addEventListener("click",onLeft);

function onLeft() {
    showResult.classList.toggle('onLeft')
    console.log('click left');
}

// ----------------------------- On Right ------------------------------
document.querySelector('.onRight').addEventListener("click",onRight);

function onRight() {
    showResult.classList.toggle('onRight');
    console.log('click right');
}

// ----------------------------- Clear both the Container ------------------------------
document.querySelector('.removeContent').addEventListener("click",removeContent);

function removeContent() {
    userInput.value="";
    showResult.innerHTML="";
}
























// function italic() {
    // let userInput=document.getElementById("getText").value;

    // document.getElementById("showText").innerHTML=userInput;
    // document.getElementById("showText").style.fontStyle="italic";    
// }

// // ----------------------------- Make Italic ------------------------------
// document.querySelector('.makeItalic').addEventListener("click",makeItalic);

// function makeItalic() {
//     let userInput=document.getElementById("getText").value;

//     document.getElementById("showText").innerHTML=userInput;
//     document.getElementById("showText").style.fontStyle="italic";    
// }