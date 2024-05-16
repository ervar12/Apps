/*APP BETA PARA JUGAR CARTAS, COMO LA PODRIDA, Y TAMBIEN SIRVE PARA  ARMAR UN PRESUPUESTO
// Y HACER LA SUMAS PARCIALES
//AUTOR ERVAR LUIS MOLINA*/

let users = [];
let buttonCreated = false;

var lastScrollLeft = window.scrollX || document.documentElement.scrollLeft;
var scrollRightButton = document.querySelector('.scroll-right-button');
var sumPartialButton = document.querySelector('.modern-button');


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
  if (!buttonCreated) {
    
    const enviarPorWhatsApp = document.createElement("button");
    const sumPartialButton = document.createElement("button");
    const scrollRightButton = document.createElement("button");

    enviarPorWhatsApp.textContent = "Manda x guasap!";
    enviarPorWhatsApp.onclick = enviarPorWhatsApp1;
    enviarPorWhatsApp.classList.add("whatsapp-btn");
    table.parentNode.appendChild(enviarPorWhatsApp)//, table.nextSibling);   



    sumPartialButton.textContent = "Suma Parcial";
    sumPartialButton.onclick = calculatePartialSum;
    sumPartialButton.classList.add("modern-button");
    table.parentNode.insertBefore(sumPartialButton, table.nextSibling);

    scrollRightButton.textContent = "Ir a resultados";
    scrollRightButton.onclick = function() {
        window.scrollTo(document.body.scrollWidth, 0);
    };
    scrollRightButton.classList.add("scroll-right-button");
       // Insertar el botón scrollRightButton al final del body
       table.parentNode.appendChild(scrollRightButton, table.nextSibling);  
       
          // Centrar los botones
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(enviarPorWhatsApp);
    buttonContainer.appendChild(sumPartialButton);
    buttonContainer.appendChild(scrollRightButton);
    table.parentNode.insertBefore(buttonContainer, table.nextSibling);

     // document.body.appendChild(scrollRightButton);

    
    // Actualizar la variable de control
    buttonCreated = true;}
    //que siga la vista
   /* window.addEventListener('scroll', function() {
      var scrollLeft = window.screenX || document.documentElement.scrollLeft;
      
      if (scrollLeft > lastScrollLeft) {
        // El usuario se desplaza hacia la derecha
        scrollRightButton.style.left = scrollLeft + 'px';
        sumPartialButton.style.left = scrollLeft + 'px';
      } else if (scrollLeft < lastScrollLeft) {
        // El usuario se desplaza hacia la izquierda
        scrollRightButton.style.left = scrollLeft + 'px';
        sumPartialButton.style.left = scrollLeft + 'px';
      }
      
      // Actualiza la última posición de desplazamiento horizontal
      lastScrollLeft = scrollLeft;
    });*/
    

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
    cells[cells.length - 1].innerText = "El " + userName + " suma: " + sum  ;
    
  }
  
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

//para whatsapp

function obtenerDatosTabla() {
  var datosTabla = [];
  var table = document.getElementById("numberTable");
  for (var i = 1, row; row = table.rows[i]; i++) {
      var fila = [];
      var colCount = row.cells.length;
      // Obtener solo el texto de la última celda de la fila
      var textoUltimaCelda = row.cells[colCount - 1].innerText;
      fila.push(textoUltimaCelda);
      datosTabla.push(fila);
  }
  return datosTabla;
}

function formatearMensaje(datosTabla) {
  var mensaje = "Resultados:\n";
  datosTabla.forEach(function(fila) {
      mensaje += fila.join('\t') + '\n';
  });
  return encodeURIComponent(mensaje);
}

function enviarPorWhatsApp1() {
  var datosTabla = obtenerDatosTabla();
  var mensaje = formatearMensaje(datosTabla);
  var url = "https://api.whatsapp.com/send?text=" + mensaje;
  window.open(url, '_blank');
}

/*window.addEventListener('scroll', function() {
  var scrollRightButton = document.querySelector('.scroll-right-button');
  var sumPartialButton = document.querySelector('.modern-button');
  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;

// Comprueba si el usuario se está desplazando hacia la derecha
if (scrollLeft > 0) {
  scrollRightButton.style.left = scrollLeft + 'px';
  sumPartialButton.style.left = scrollLeft + 'px';
} else {
  // Si no, asegúrate de que los botones vuelvan a su posición original
  scrollRightButton.style.left = '0';
  sumPartialButton.style.left = '0';
}
});*/

/*var lastScrollLeft = window.scrollX || document.documentElement.scrollLeft;
var scrollRightButton = document.querySelector('.scroll-right-button');
var sumPartialButton = document.querySelector('.modern-button');

window.addEventListener('scroll', function() {
  var scrollLeft = window.screenX || document.documentElement.scrollLeft;
  
  if (scrollLeft > lastScrollLeft) {
    // El usuario se desplaza hacia la derecha
    scrollRightButton.style.left = scrollLeft + 'px';
    sumPartialButton.style.left = scrollLeft + 'px';
  } else if (scrollLeft < lastScrollLeft) {
    // El usuario se desplaza hacia la izquierda
    scrollRightButton.style.left = scrollLeft + 'px';
    sumPartialButton.style.left = scrollLeft + 'px';
  }
  
  // Actualiza la última posición de desplazamiento horizontal
  lastScrollLeft = scrollLeft;
});*/




function mostrarImagen() {
  // Obtener el elemento de imagen por su ID
  const imagen = document.getElementById("imagen");
  
  // Cambiar el estilo de la imagen para hacerla visible
  imagen.style.display = "block";}


function handleBeforeUnload(event) {
  if (hasUnsavedData) {
    event.preventDefault();
    event.returnValue = '';
    return input.value !== '' ? 'seguuuuro boludddoo!' : undefined;
  }
};
