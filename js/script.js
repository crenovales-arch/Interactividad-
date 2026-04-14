let a = "Hola";
let b = "Mundo";
let c = a + " " + b;

console.log(c);

function saludar(nombre="Mundo") {
    alert("Hola " + nombre);
}

saludar("Cristina");


function chageColor() {
    const r= Math.random() * 255; 
    const g= Math.random() * 255; 
    const b= Math.random() * 255;    
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

document.addEventListener("click", chageColor);