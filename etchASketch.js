let container = document.querySelector(".container");

for (let i = 0; i < 16*16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("grid-element");
    newDiv.setAttribute("id", `${i}`);
    newDiv.textContent = `${i}`;
    container.appendChild(newDiv);
}