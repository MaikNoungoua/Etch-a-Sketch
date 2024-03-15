

//definition of the grid size
const rows = prompt("How many rows in the grid?");
const columns = prompt("How mamy colums in the grid?");

//Get the grid element Id
const gridContainer = document.getElementById("main");

for (i = 0; i < rows; i++) {
    for (j = 0; j < columns; j++){
        // Create a grid item element
        const gridItem = document.createElement("div");
        gridItem.className = 'tiles';
        gridItem.textContent = `Cell ${i + 1}-${j + 1}`;

        //Append the grid to the grid container
        gridContainer.appendChild(gridItem)
    }
}




