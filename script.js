

//definition of the grid size
const rows = prompt("How many rows in the grid?");
const columns = prompt("How mamy colums in the grid?");
const tileGenerated = []; //contains the different tiles id
const divTiles = [];

let a = function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor
}

//Get the grid element Id
const gridContainer = document.getElementById("main");
gridContainer.setAttribute('style','grid-template-columns: repeat('+columns+',1fr)');
 

for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++){
        // Create a grid item element
        const gridItem = document.createElement("div");
        gridItem.className = 'tiles';
        gridItem.id = `tile${i + 1}-${j + 1}`;
        gridItem.textContent = `Cell ${i + 1}-${j + 1}`;

        tileGenerated.push(`tile${i + 1}-${j + 1}`);

        //Append the grid to the grid container
        gridContainer.appendChild(gridItem)
        //gridItem.addEventListener("mouseover", alert("ca marche!"))
    }
}

const parentDiv = document.getElementById("main");
let tiles = document.getElementsByClassName('tiles');

parentDiv.addEventListener("mouseover", (event) => {
    //if(event.target.className === 'tiles') {
    if (tileGenerated.includes(event.target.id)) {

        let tiles = document.getElementById(event.target.id);
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        //tiles.style.background = '#777';
        
        tiles.style.background = `#${randomColor}`;
        tiles.style.opacity = 0.33;
    }
})








