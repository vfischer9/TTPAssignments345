let numRows = 1;
let numCols = 1;

//issue1
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

//issue2
function addCol(){
    let rows = document.querySelectorAll("tr");
    let rowIndex = 0;

    for(let i = 0; i < numRows; i++) {
        let cell = document.createElement("td");
        rows[rowIndex].appendChild(cell);
        rowIndex++;
    }
    numCols++;
}

//issue3
function removeRow(){
    let grid = document.getElementById('grid');
    grid.deleteRow(numRows-1);
    numRows--;
}

//issue4
function removeCol(){
    let rows = document.querySelectorAll("tr");
    let rowIndex = 0;
    for(let i = 0; i < numRows; i++) {
        rows[rowIndex].removeChild(rows[rowIndex].lastChild);
        rowIndex++;
    }
    numCols--;
}