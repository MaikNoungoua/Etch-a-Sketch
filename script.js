let round = Math.round; //used to change any string in integer
const userRequest = round(prompt("Please enter your name", "This is a number between 1 and 20"));

let gridSize = [userRequest,userRequest];
//console.log(gridSize);

//creation of the main container with the red border

const mainContainer  = document.createElement("div");
mainContainer.setAttribute("id","main");
mainContainer.textContent = "Here is the div mate";

document.body.appendChild(mainContainer);


// creation of the inner tiles



for (i = 1; i < userRequest + 1;){
    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class","tiles");
    mainContainer.appendChild(innerDiv);
    innerDiv.textContent = `I am tile number ${i}`; 
    i++;
}


