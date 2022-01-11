let columns = 1;
let mouseOver = false;

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


function removeRow() {
    let row = document.getElementsByClassName("row");
    let tr = Array.from(row);
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
}



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



function fillAllUncoloredCells() {
  let color = document.querySelector("#color").value;
  let allCells = document.getElementsByTagName("td");
  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].style.backgroundColor == "") {
      allCells[i].style.backgroundColor = color;
    }
  }
}


function fillAllCells() {
  let color = document.querySelector("#color").value;
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = color;
    }
}


function clearAllCells() {
    let allCells = document.getElementsByTagName("td");
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].style.backgroundColor = "";
    }
}


function colorChange(cell){
    let color = document.querySelector("#color").value;
    cell.addEventListener("click", function() {
      cell.style.backgroundColor = color;
    })

    cell.addEventListener("mousedown", function() {
        mouseOver = true;
        cell.style.backgroundColor = color;
    })

    cell.addEventListener("mousemove" , function() {
        if (mousOver == true)
        {
            cell.style.backgroundColor = color;
        }
    })

    cell.addEventListener("mouseup" , function() {
        if (mouseOver == true)
        {
            mouseOver = false;
        }
    })
}
