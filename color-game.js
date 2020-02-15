let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

//rgb runs from 0 - 5
//now i need to loop through all colors
//the below is going in order of the array

let squares = document.querySelectorAll(".square");

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    //Add color number to span in HTML 
    let pickedColor = colors[3];
    let colorDisplay = document.getElementById("colorDisplay");

    colorDisplay.textContent = pickedColor;
    //add click listeners to the squares

    squares[i].addEventListener("click", (e) => {
        let colourClicked = e.toElement.style.backgroundColor;
        //compare the pickedColor to the clickedColour
        if (colourClicked === pickedColor) {
            alert('You are right');
        } else {
            alert("You are wrong");
        }
    });
};