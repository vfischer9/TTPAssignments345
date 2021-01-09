let numRows = 1;
let numCols = 1;

let cellColored = false;

//issue1
function addRow(){
    let grid = document.getElementById('grid');
    let newRow = document.createElement("tr");

    for(let i = 0; i < numCols; i++) {
        let cell = document.createElement("td");
        newRow.appendChild(cell);
        changeColor(cell);
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
        changeColor(cell);
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


//issue6
let chosenColor = 'pink';
const chooseColor = (color) => {
  chosenColor = color;
};

function changeColor(cell) {
    cell.classList.add('isNotColored');
    cell.addEventListener('click', colorChanged);

    cell.addEventListener('mousedown', (e) => {
        cellColored = true;
  });
  
  cell.addEventListener('mouseup', (e) => {
    if (cellColored) {
    cellColored = false;
    }
  });

  cell.addEventListener('mousemove', (e) => {
    if (cellColored) {
        cell.style.backgroundColor = chosenColor;
    }
  });
}

function colorChanged() {
  this.style.backgroundColor = chosenColor;
  this.classList.remove('isNotColored');
}

//issue7
function fillAllBlank() {
    let cells = document.getElementsByTagName('td');
    let cellsList = [...cells];

    const uncoloredCells = cellsList.filter(cell => {
        return cell.classList.contains('isNotColored');
    });

    uncoloredCells.forEach(cell => {
        cell.style.backgroundColor = chosenColor;
        cell.classList.remove('isNotColored');
    })
}

//issue8
function fillAll(){
    let cells = document.getElementsByTagName('td');
    let cellsList = [...cells];

    cellsList.forEach(cell => {
        cell.style.backgroundColor = chosenColor;
        cell.classList.remove('isNotColored');
    })
}