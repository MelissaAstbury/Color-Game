let colors = generateRandomColors(6);

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
        let trimmedColourClicked = colourClicked.replace(/\s/g, '');
        let trimmedPickedColor = pickedColor.replace(/\s/g, '');
        if (trimmedColourClicked == trimmedPickedColor) {
            messageDisplay.textContent = "Correct";
            correctColor(pickedColor);
            // setTimeout(() => {
            //     generateRandomColors(6);
            // }, 2000);
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