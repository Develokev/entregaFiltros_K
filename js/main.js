document.addEventListener("DOMContentLoaded", () => {

// VARIABLES ++++++++++++++++++++++++++++++++++++++++
//Elementos Capturados
const showPics = document.querySelector('#showPics');
const imgBlock = document.querySelector('#imgBlock');
// Constantes
const URL = "../assets/Viajes/"

const arrayPics = [
    ["viajes-1.jpg", "viaje 1", "foto de viaje 1"],
    ["viajes-2.jpg", "viaje 2", "foto de viaje 2"],
    ["viajes-3.jpg", "viaje 3", "foto de viaje 3"],
    ["viajes-4.jpg", "viaje 4", "foto de viaje 4"],
    ["viajes-5.jpg", "viaje 5", "foto de viaje 5"],
    ["viajes-6.jpg", "viaje 6", "foto de viaje 6"],
    ["viajes-7.jpg", "viaje 7", "foto de viaje 7"]
]

// EVENTOS ++++++++++++++++++++++++++++++++++++++++++
showPics.addEventListener('click', () => {
    alert("Showing pictures...");
    paintPics();
})


// FUNCIONES ++++++++++++++++++++++++++++++++++++++++

//!función para pintar las imgs al clickar el botón.
const paintPics = () => {

    imgBlock.innerHTML = "";

    arrayPics.forEach((item) => {

        const imgTitle = document.createElement('H3');
        
        imgTitle.textContent = item[1];

        const imgElement = document.createElement("IMG");
        imgElement.classList.add("imgSize")
        imgElement.src = URL + item[0];
        imgElement.alt = item[1];
        imgElement.title = item[2];

        imgBlock.append(imgTitle, imgElement);
    });
    }

    const init=()=>{           //*función que inicializa todo
        alert("Hi, welcome to my travels photo profolio!");
    }
    init();

// +++++++++++++++++++++++++++++++++++++++++++++++++

}) //!LOADED