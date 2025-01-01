let container = document.querySelector(".container");
let gridSize = 16;

function getRandomRGB() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`
};

function createGrid(gridSize) {
    for (let i = 0; i < gridSize*gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("grid-element");
        newDiv.setAttribute("id", `${i}`);
        newDiv.addEventListener("mouseenter", function (e) {
            e.target.style.background = getRandomRGB();
        });
        newDiv.style.width = `${95/gridSize}vw`;
        newDiv.style.height = `${95/gridSize}vh`;
        container.appendChild(newDiv);
    }
}


createGrid(16);

let button = document.querySelector("button");
button.onclick = function () {
    let requestedGridSize = Number(prompt("Enter number of squares per side, must be less than 100."));

    if (!isNaN(requestedGridSize) && requestedGridSize < 100) {
        gridSize = requestedGridSize;
        console.log(`Changing grid size to ${gridSize} by ${requestedGridSize}.`);
        container.replaceChildren();
        createGrid(gridSize);
    } else if (isNaN(requestedGridSize)) {
        alert("Error: Must be a number.")
    } else {
        alert("Error: Must be less than 100.")
    };
};