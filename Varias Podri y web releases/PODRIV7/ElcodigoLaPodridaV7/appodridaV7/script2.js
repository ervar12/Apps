let users = [];
let buttonCreated = false;

function startProgram() {
  const numberOfHands = parseInt(prompt("Cuantas manos jugamos AMEO:"));
  if (isNaN(numberOfHands) || numberOfHands <= 0) {
    alert("SOS BOLUDO???!!!");
    return;
  }
  console.log("Número de manos:", numberOfHands); // Verificar en consola
  createTable(numberOfHands);
}

function addUser() {
  const userName = document.getElementById("userName").value.trim();
  if (userName !== "") {
    users.push(userName);
    createTable();
    document.getElementById("userName").value = "";
  }
}

function createTable(numberOfHands) {
  const table = document.getElementById("numberTable");
  table.innerHTML = ""; // Clear existing table

  if (numberOfHands === 0) {
    console.error("El número de manos no puede ser 0.");
    return;
  }

  // Creacion de celditas
  let maxCells = numberOfHands; // aca me las asegur
  users.forEach(user => {
    maxCells = Math.max(maxCells, user.length);
  });

  // agrega , no tocar vamoooo era aca el bug edit
  const headerRow = table.insertRow();
  headerRow.insertCell().appendChild(document.createTextNode("Usuario"));
  for (let i = 1; i <= numberOfHands; i++) {
    headerRow.insertCell();
    headerRow.contentEditable = true
  }

//.appendChild(document.createTextNode(i)) como te busq!!

  // ajusto aca, bien arranca los arrays
  users.forEach(user => {
    const userRow = table.insertRow();
    const userCell = userRow.insertCell();
    userCell.appendChild(document.createTextNode(user));
    for (let i = 1; i <= numberOfHands; i++) {
      const cell = userRow.insertCell();
      cell.contentEditable = true;
      cell.dataset.user = user;
      cell.dataset.total = 0;
    }
    const totalCell = userRow.insertCell(); // Cell for user total
    totalCell.dataset.user = numberOfHands;
  });
  
  //comento para q no repita, perfecto era este!
/*  for (let i = 1; i <= numberOfHands; i++) {
    const headerCell = headerRow.insertCell();
    headerCell.appendChild(document.createTextNode(i));

    // Add rows for numbers 1 to numberOfHands
    for (let j = 0; j < users.length; j++) {
      const cell = table.rows[j + 1].insertCell();
      cell.contentEditable = true;
      cell.dataset.user = table.rows[j + 1].cells[0].innerText;
      cell.dataset.total = 0;
    }
  }*/
  
//este bucle esta abajo , increible como use la logica para lograr la repeticion esta ! 
  /*for (let i=numberOfHands-1 ; i!= numberOfHands;i++) {
    const headerCell = headerRow.insertCell();
    headerCell.appendChild(document.createTextNode(numberOfHands));}*/
 /* for (let i = numberOfHands -1; i != numberOfHands;i++) {
      const headerCell = headerRow.insertCell();
      headerCell.appendChild(document.createTextNode(numberOfHands));}*/

    /* // este loop lo uso para repetir manos
    for (let j = 0; j < users.length; j++) {
      const cell = table.rows[j + 1].insertCell();
      cell.contentEditable = true;
      cell.dataset.user = table.rows[j + 1].cells[0].innerText;
      cell.dataset.total = 0;
    }
  }*/




  for (let i = numberOfHands -1; i > 0; i--) {
    const headerCell = headerRow.insertCell();
    headerCell.appendChild(document.createTextNode('Pasame el tanteador'));
  
    // Add rows for numbers numberOfHands to 1
    for (let j = 0; j < numberOfHands ; j++) {
      const cell = table.rows[j+numberOfHands].insertCell();
      cell.contentEditable = true;
      cell.dataset.user = table.rows[j+1].cells[0].innerText;
      cell.dataset.total = 0;
    }

  }
  

  /*const sumPartialButton = document.createElement("button");
  sumPartialButton.textContent = "Suma Parcial";
  sumPartialButton.onclick = calculatePartialSum;
  table.parentNode.insertBefore(sumPartialButton, table.nextSibling);*/

  // Verificar si el botón ya ha sido creado 
  //nunca te olvides de las flags boluuuuu


}



function calculatePartialSum() {
  const table = document.getElementById("numberTable");
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let sum = 0;
    const cells = rows[i].cells;
    // Obtener el nombre de usuario de la primera celda de la fila
    const userName = cells[0].innerText;

    for (let j = 1; j < cells.length - 1; j++) {
      const value = parseInt(cells[j].innerText) || 0;
      sum += value;
    }
    cells[cells.length - 1].innerText = "El " + userName + " suma: " + sum;
  }
  
  // Obtener la última celda de la última fila
  const lastRow = rows[rows.length - 1];
  const lastCell = lastRow.cells[lastRow.cells.length - 1];
  
  // Establecer el foco en la última celda de la última fila
  lastCell.focus();
}

if (!buttonCreated) {
  const sumPartialButton = document.createElement("button");
  sumPartialButton.textContent = "Suma Parcial";
  sumPartialButton.onclick = calculatePartialSum;
  sumPartialButton.classList.add("modern-button");
  const table = document.getElementById("numberTable");
  table.parentNode.insertBefore(sumPartialButton, table.nextSibling);
  
  // Actualizar la variable de control
  buttonCreated = true;
}


function focusLastColumn() {
  const table = document.getElementById("numberTable");
  const rows = table.rows;
  const lastRow = rows[rows.length - 1];
  const lastCell = lastRow.cells[lastRow.cells.length - 1];
  lastCell.focus();
}


/*// Add the following code to display an alert when the user tries to refresh or reload the page
window.onbeforeunload = function() {
  return "OJO NENEEE VAS A SER CAGADAAAAA......";
};*/

const form = document.getElementById('my-form');
const input = document.getElementById('name');

let hasUnsavedData = false;

input.addEventListener('input', () => {
  if (input.value !== '') {
    hasUnsavedData = true;
    window.addEventListener('beforeunload', handleBeforeUnload);
  } else {
    hasUnsavedData = false;
    window.removeEventListener('beforeunload', handleBeforeUnload);
  }
});

function handleBeforeUnload(event) {
  if (hasUnsavedData) {
    event.preventDefault();
    event.returnValue = '';
    return input.value !== '' ? 'seguuuuro boludddoo!' : undefined;
  }
};
