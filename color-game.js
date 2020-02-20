let colors = generateRandomColors(6);
let h1 = document.querySelector("h1");
//let resetButton = docuemnt.querySelector("#reset");
let resetButton = document.getElementById("reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let currentBtn = "easy";

resetButton.addEventListener("click", function () {
    //generate all new colors
    if (currentBtn === 'easy') {
        colors = generateRandomColors(3);
    } else {
        colors = generateRandomColors(6);
    }
    //pick a new randon color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;

    //messageDisplay.textContent = "";
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
});

// let colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];

//rgb runs from 0 - 5
//now i need to loop through all colors
//the below is going in order of the array

let squares = document.querySelectorAll(".square");
let messageDisplay = document.querySelector("#message");

let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;
//add click listeners to the squares

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //Add color number to span in HTML 

    squares[i].addEventListener("click", (e) => {
        let colourClicked = e.toElement.style.backgroundColor;
        //compare the pickedColor to the clickedColour
        // console.log(colourClicked, pickedColor);
        //change the color of the h1 (let h1 is added at the top)
        let trimmedColourClicked = colourClicked.replace(/\s/g, '');
        let trimmedPickedColor = pickedColor.replace(/\s/g, '');
        if (trimmedColourClicked == trimmedPickedColor) {
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?"
            correctColor(pickedColor);
            h1.style.background = colourClicked;
        } else {
            e.toElement.style.backgroundColor = '#232323';
            messageDisplay.textContent = "Try Again";
        }
    });
};

const correctColor = (correctbox) => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = correctbox;
    }
}

//ensure the color in the title
function pickColor() {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random];
};

//make an array for the 'colors'... add num random colors... return the array

function generateRandomColors(num) {
    let arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    // Template Literals
    return `rgb(${r}, ${g}, ${b})`;
    // return "rgb(" + r + ", " + g + ", " + b + ")";
}
// function generateRandomColors(num) {
//     let arr = []
//     arr.push(randomColor())
//     for (var i = 0; i < num; i++) {
// }
//     return arr;
// }

easyBtn.addEventListener("click", function () {
    currentBtn = 'easy';
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }

})

hardBtn.addEventListener("click", function () {
    currentBtn = 'hard';
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
})