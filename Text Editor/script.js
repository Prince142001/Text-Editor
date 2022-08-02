let userInput=document.getElementById("getText");
let showResult=document.getElementById("showText");

// ----------------------------- Update Text in next TextArea ------------------------------
userInput.addEventListener("input",updateText);

function updateText(e) {
    showResult.textContent=e.target.value;
}

// ----------------------------- Make Bold ------------------------------
document.querySelector('.makeBold').addEventListener("click",makeBold);

function makeBold() {
    showResult.style.fontWeight=900;
}

// ----------------------------- Make Italic ------------------------------
// document.querySelector('.makeItalic').addEventListener("click",makeItalic);

// function makeItalic() {
//     showResult.style.fontStyle='italic';
// }

// ----------------------------- Make Underline ------------------------------
// document.querySelector('.makeUnderline').addEventListener("click",makeUnderline);

// function makeUnderline() {
//     showResult.style.textDecoration='underline';
// }

// ----------------------------- On Left ------------------------------
// document.querySelector('.onLeft').addEventListener("click",onLeft);

// function onLeft() {
//     showResult.style.fontStyle='italic';
// }
// ----------------------------- Make Italic ------------------------------
// document.querySelector('.makeItalic').addEventListener("click",makeItalic);

// function makeItalic() {
//     showResult.style.fontStyle='italic';
// }






















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