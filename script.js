let columns = 1;

// Adds rows to table
function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
    row.classList.add("row");
    table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}

// Removes rows from table
function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}


// Adds columns to table
function addColumn() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    for (let i = 0; i < tr.length; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        tr[i].appendChild(cell);
    }
    columns++;
}

// Removes columns to table
function removeColumn() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    if (tr.length == 0) {
        alert('Error: there is nothing to remove');
    return this;
    }
    for (let i = 0; i < tr.length; i++) {
        tr[i].removeChild(tr[i].lastChild);
    }
    columns--;
}
