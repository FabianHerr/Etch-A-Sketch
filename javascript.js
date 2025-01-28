// Create variable for the container of all the divs forming the div
const container = document.querySelector(".container");

// Create 256 (16x16) divs (grid)
for(let i = 0 ; i < 256 ; i ++){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.height = "40px";
    div.style.width = "40px";
    div.style.border = "1px solid black";
    container.appendChild(div);
}

// Select all the boxes of the grid
const grids = document.querySelectorAll(".grid");
grids.forEach(grid =>{
    grid.addEventListener("mouseenter", ()=>{
        grid.style.backgroundColor = "blue";
    });
    grid.addEventListener("mouseleave", ()=>{
        grid.style.backgroundColor = "black";
    });
});

// Select resize button
const resize = document.querySelector("button");

// Create const for input and for the container of the grid
let userInput;
resize.addEventListener("click",()=>{
    userInput = prompt("Enter number of squares per side of the new grid:");
    let size = parseInt(userInput,10);
    if ( isNaN(size) || size > 100 || size < 0 ){
        alert("Invalid input! Your input must be an integer between 0 and 100.")
    }
    else{
        createGrid(size)
    }

});

function createGrid(size){
    container.innerHTML = "";  //Erase previous grid
    let dimensions = (672-(size*2))/size;
    // Create grid of length userInput
    for(let i = 0 ; i < size*size ; i ++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.style.height = `${dimensions}px`;
        div.style.width = `${dimensions}px`;
        div.style.border = "1px solid black";
        container.appendChild(div);
    }

    // Select the new grid boxes
    const grids = document.querySelectorAll(".grid");
    grids.forEach(grid =>{
        grid.addEventListener("mouseenter", ()=>{
            grid.style.backgroundColor = "blue";
        });
        grid.addEventListener("mouseleave", ()=>{
            grid.style.backgroundColor = "black";
        });
    });
}