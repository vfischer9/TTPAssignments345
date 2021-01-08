let numRows = 1;
let numCols = 1;

function addRow(){
    let grid = document.getElementById('grid');
    let newRow = document.createElement("tr");

    for(let i = 0; i < numCols; i++) {
        let cell = document.createElement("td");
        newRow.appendChild(cell);
    }
    grid.appendChild(newRow);
    numRows++;
}
