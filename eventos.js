
document.addEventListener('DOMContentLoaded',function(){

// Seleccionamos los elementos
let botonsaludar = document.getElementById('elboton');
let divdelboton = document.getElementById('eldiv');


// Agregamos un evento 'click' al botón
botonsaludar.addEventListener('click', (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    alert('Hola!');
});

// Agregamos un evento 'click' al div del botón
divdelboton.addEventListener('click', () => {
    alert('Hola! Soy el div.');
    
});})