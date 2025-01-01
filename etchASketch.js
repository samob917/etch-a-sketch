let container = document.querySelector(".container");

for (let i = 0; i < 64; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-element");
    newDiv.textContent = `${i}`;
    container.appendChild(newDiv);
}