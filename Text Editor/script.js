let userInput = document.getElementById("getText");
let showResult = document.getElementById("showText");
let btnClick = document.querySelectorAll('.btn');

// ----------------------------- If the text area is blank then show alert box ------------------------------

for (let i = 0; i < btnClick.length; i++) {
    btnClick[i].addEventListener("click", textAreaBlank);

    function textAreaBlank() {
        if (userInput.value == "") {
            alert(`
            Textarea is blank...
            To do any event on this button please fill the textare..
            `);
        }
    }
}

// ----------------------------- Update Text in next TextArea ------------------------------
userInput.addEventListener("input", updateText);

function updateText(e) {
    showResult.textContent = e.target.value;
}

// ----------------------------- Make Bold ------------------------------
document.querySelector('.makeBold').addEventListener("click", makeBold);

function makeBold() {
    showResult.classList.toggle('makeBold');
}

// ----------------------------- Make Italic ------------------------------
document.querySelector('.makeItalic').addEventListener("click", makeItalic);

function makeItalic() {
    // showResult.style.fontStyle='italic';
    showResult.classList.toggle('makeItalic');
}

// ----------------------------- Make Underline ------------------------------
document.querySelector('.makeUnderline').addEventListener("click", makeUnderline);

function makeUnderline() {
    showResult.classList.toggle('makeUnderline');
}

// ----------------------------- Make Strike ------------------------------
document.querySelector('.makeStrike').addEventListener("click", makeStrike);

function makeStrike() {
    showResult.classList.toggle('makeStrike');
}

// ----------------------------- On Left ------------------------------
document.querySelector('.onLeft').addEventListener("click", onLeft);

function onLeft() {
    showResult.classList.toggle('onLeft');
}

// ----------------------------- On Center ------------------------------
document.querySelector('.onCenter').addEventListener("click", onCenter);

function onCenter() {
    showResult.classList.toggle('onCenter');
}

// ----------------------------- On Right ------------------------------
document.querySelector('.onRight').addEventListener("click", onRight);

function onRight() {
    showResult.classList.toggle('onRight');
}

// ----------------------------- Dark Light Mode ------------------------------
let btnDarkLightMode = document.querySelector('.changeBgColor');
// .addEventListener("click", darkLightMode)

function darkLightMode(e) {
    e.classList.toggle("fa-moon-o");

    btnDarkLightMode.classList.toggle('darkMode')
}

// ----------------------------- Clear both the Container ------------------------------
document.querySelector('.removeContent').addEventListener("click", removeContent);

function removeContent() {
    userInput.value = "";
    showResult.innerHTML = "";
}