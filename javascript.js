//JavaScript logic for etch-a-sketch

let container = document.querySelector('#container');

//use a for loop to  create 16x16 divs and append to add to html
for (let i=0; i < 16; i++){
    for (let j=0; j<16; j++){
        let boxDiv = document.createElement('div');
        boxDiv.className= "grid-box";
        container.appendChild(boxDiv);
    }
}
