
let title = document.querySelector("h1");
let boton1 = document.getElementById("btn-1"); 
let boton2 = document.getElementById("btn-2"); 
let boton3 = document.getElementById("btn-3"); 


// Botón 1
boton1.addEventListener("mouseenter", function() {
    console.log("Mouse Enter botón 1");
    bgColor("rgb(0, 255, 204)");
    title.textContent = "¡Hola Cristina!";
    title.style.color = "rgb(25, 0, 255)";
});
boton1.addEventListener("mouseleave", mouseLeave);

boton1.addEventListener("click", function() {
    console.log("Click botón 1");
    title.textContent = "¡Adiós Cristina!";
    title.style.color = "rgb(255, 0, 195)";
});

const botons = document.querySelectorAll(".btn");

const coordinates = [
    { x: 100, y: 500 },
    { x: 100, y: 530 },
    { x: 100, y: 560 }
];

botons.forEach((boton, index) => {
    boton.style.left = coordinates[index].x + "px";
    boton.style.top = coordinates[index].y + "px";
});

// Botón 2 (color azul)
boton2.addEventListener("mouseenter", function() {
    console.log("Mouse Enter botón 2");
    bgColor("rgb(95, 100, 255)");
    title.textContent = "¡Tenemos que hacer tarea!";
    title.style.color = "rgb(255, 0, 0)";
});

boton2.addEventListener("mouseleave", mouseLeave);

boton2.addEventListener("click", function() {
    console.log("Click botón 1");
    title.textContent = "¡CORREE!";
    title.style.color = "rgb(255, 0, 195)";
});

// Botón 3 (color rojo)
boton3.addEventListener("mouseenter", function() {
    console.log("Mouse Enter botón 3");
    bgColor("rgb(255, 80, 80)");
});

boton3.addEventListener("mouseleave", mouseLeave);


// Función para salir (todos regresan a negro)
function mouseLeave() {
    console.log("Mouse Leave");
    bgColor("rgb(0, 0, 0)");
}

// Cambiar color de fondo
function bgColor(rgb) {
    document.body.style.backgroundColor = rgb;
}

bgColor("rgb(0, 0, 0)");