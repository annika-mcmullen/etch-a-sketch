//JavaScript logic for etch-a-sketch

let container = document.querySelector('#containerDiv');


//use a for loop to  create 16x16 divs and append to add to html
// for (let i=0; i < 16; i++){
//     for (let j=0; j<16; j++){
//         let boxDiv = document.createElement('div');
//         boxDiv.className= "grid-box";
//         container.appendChild(boxDiv);
//     }
// }
//creates a div for each row allowing graph to be limited to 16x16
for (let i = 0; i < 16; i++) {
   let rowContainer = document.createElement('div');
   rowContainer.className = "grid-row";
    for (let j = 0; j < 16; j++) {
        let boxDiv = document.createElement('div');
        boxDiv.className = "grid-column";
        rowContainer.appendChild(boxDiv);
    }
    container.appendChild(rowContainer);
}
