//JavaScript logic for etch-a-sketch

let container = document.querySelector('#containerDiv');

//game board size is set to 16 by default, updated later
let userWidth = 16;
let userHeight =16;
// creates etch-a-sketch board to user size requirements


function drawBoard(userWidth, userHeight){
    for (let i = 0; i < userHeight; i++) {
        let rowContainer = document.createElement('div');
        rowContainer.className = "grid-row";
        for (let j = 0; j < userWidth; j++) {
            let boxDiv = document.createElement('div');
            boxDiv.className = "grid-column";
            rowContainer.appendChild(boxDiv);
        }
        container.appendChild(rowContainer);

    }
    //node list of all the boxes within grid
    let boxList = document.querySelectorAll('.grid-column');
    //add event listener for mouseover
    boxList.forEach(function (box) {
        box.addEventListener("mouseover", function () {
            box.style.background = "blue";
    });
});

}
//Starting game board at default size 16x16
drawBoard(userWidth, userHeight);
//gives ability to clear board after every game session
function clearBoard(container){
    while(container.lastElementChild){
        container.removeChild(container.lastElementChild);
    }
}

//node list of all the boxes within grid
//let boxList = document.querySelectorAll('.grid-column');
// //add event listener for mouseover
// boxList.forEach(function (box) {
//     box.addEventListener("mouseover", function () {
//         box.style.background = "blue";
//     });
// });

let newGameBtn = document.querySelector('#newBoardBtn');
//event listener to create a new game
newGameBtn.addEventListener('click', ()=> {
    userWidth = prompt("How many squares wide would you like your new board?", "16");
    userHeight= prompt("How many squares wide would you like your new board?", "16");

    //check input is valid
    if (userWidth===NaN || userHeight === NaN){
        alert("Please enter a valid board size");
    }
    else if (userWidth > 100 || userHeight >100 || userWidth < 2 || userHeight < 2){
        alert("Please enter a number between 2 and 100!");
    }
    //clear the existing board and redraw with user specs
    clearBoard(container);
    drawBoard(userWidth, userHeight);
});

// //add event listener for mouseover
// boxList.forEach(function (box) {
//     box.addEventListener("mouseover", function () {
//         box.style.background = "blue";
//     });
// });
