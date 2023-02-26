document.addEventListener("DOMContentLoaded", () => {

    // VARIABLES ++++++++++++++++++++++++++++++++++++++++
    //Elementos Capturados
    const showFilters = document.querySelector("#showFilters");
    const filteredPics = document.querySelector("#filteredPics");
    const selectedFilter = document.querySelector("#selectedFilter");
    const filterMessage = document.querySelector("#filterMessage");
    const filtersCont = document.querySelector("#filtersCont");


    // Constantes programa

    const URL = "../assets/Viajes/"
    const fragment = document.createDocumentFragment();
    
    //Creación de array de objetos, uno general, y luego específicos por TAG
    const objGeneralPics = [
        {tag1:"Water", url:"viajes-1.jpg", alt:"viaje 1", title:"foto de viaje 1"},
        {tag1:"Water", url:"viajes-2.jpg", alt:"viaje 2", title:"foto de viaje 2"},
        {tag1:"Road", url:"viajes-3.jpg", alt:"viaje 3", title:"foto de viaje 3"},
        {tag1:"Water", tag2:"Town", url:"viajes-4.jpg", alt:"viaje 4", title:"foto de viaje 4"},
        {tag1:"Bridge", tag2:"Water", url:"viajes-5.jpg", alt:"viaje 5", title:"foto de viaje 5"},
        {tag1:"Road", tag2:"Water", url:"viajes-6.jpg", alt:"viaje 6", title:"foto de viaje 6"},
        {tag1:"Mountain", tag2:"Town", url:"viajes-7.jpg", alt:"viaje 7", title:"foto de viaje 7"}
    ];
     //Objetos por TAGS

    const objWater = [
        {url:"viajes-1.jpg", alt:"viaje 1", title:"foto de viaje 1"},
        {url:"viajes-2.jpg", alt:"viaje 2", title:"foto de viaje 2"},
        {url:"viajes-4.jpg", alt:"viaje 4", title:"foto de viaje 4"},
        {url:"viajes-5.jpg", alt:"viaje 5", title:"foto de viaje 5"},
        {url:"viajes-6.jpg", alt:"viaje 6", title:"foto de viaje 6"}
    ]

    let objRoad = [
        {url:"viajes-3.jpg", alt:"viaje 3", title:"foto de viaje 3"},
        {url:"viajes-6.jpg", alt:"viaje 6", title:"foto de viaje 6"},
    ]

    let objTown = [
        {url:"viajes-4.jpg", alt:"viaje 4", title:"foto de viaje 4"},
        {url:"viajes-5.jpg", alt:"viaje 5", title:"foto de viaje 5"},
        {url:"viajes-7.jpg", alt:"viaje 7", title:"foto de viaje 7"}
    ]

    let objMountain = [
        {url:"viajes-6.jpg", alt:"viaje 6", title:"foto de viaje 6"},
        {url:"viajes-7.jpg", alt:"viaje 7", title:"foto de viaje 7"}
    ]

    let objBridge = [
        {url:"viajes-5.jpg", alt:"viaje 5", title:"foto de viaje 5"}
    ]

    let objForest = [

    ]

    const arrayFilters = [  //les añado un segundo elemento al array, para convertirlo en el ID de cada botón por separado.
        ["Water", "B1"],
        ["Town", "B2"],
        ["Mountain", "B3"],
        ["Road", "B4"],
        ["Bridge", "B5"],
        ["Forest", "B6"]
    ];
    
    // EVENTOS ++++++++++++++++++++++++++++++++++++++++++
    //*click que muestra los botones de filtrar
    showFilters.addEventListener('click', () => {
        alert("Showing filters...");
        paintFilters();
    })

    //*click que muestra las fotos
    filtersCont.addEventListener('click', ({target})=> {
        if(target.matches("#B1")) {
            paintWater();
        }
        if(target.matches("#B2")) {
            paintTown();
        }
        if(target.matches("#B3")) {
            paintMountain();
        }
        if(target.matches("#B4")) {
            paintRoad();
        }
        if(target.matches("#B5")) {
            paintBridge();
        }
        // if(target.matches("B6")) {
        //     // paintForest(); esta función no se ha creado.
        // }
    });

    
    // FUNCIONES ++++++++++++++++++++++++++++++++++++++++
    
    //!funciones para pintar las imgs según el TAG.

    const paintWater=()=>{

        filteredPics.innerHTML = "";

        objWater.forEach((item) => {

            const waterTitle = document.createElement('H3');
            waterTitle.textContent = item.alt;

            const imgWater = document.createElement('IMG');
            imgWater.classList.add('imgSize');
            imgWater.src = URL + item.url;
            imgWater.alt = item.alt;
            imgWater.title = item.title;

            filteredPics.append(waterTitle, imgWater);

        })
    }

    const paintTown=()=>{

        filteredPics.innerHTML = "";

        objTown.forEach((item) => {

            const townTitle = document.createElement('H3');
            townTitle.textContent = item.alt;

            const imgTown = document.createElement('IMG');
            imgTown.classList.add('imgSize');
            imgTown.src = URL + item.url;
            imgTown.alt = item.alt;
            imgTown.title = item.title;

            filteredPics.append(townTitle, imgTown);

        })
        };

    const paintMountain=()=>{
        
        filteredPics.innerHTML = "";

        objMountain.forEach((item) => {

            const mountainTitle = document.createElement('H3');
            mountainTitle.textContent = item.alt;

            const imgMountain = document.createElement('IMG');
            imgMountain.classList.add('imgSize');
            imgMountain.src = URL + item.url;
            imgMountain.alt = item.alt;
            imgMountain.title = item.title;

            filteredPics.append(mountainTitle, imgMountain);
    })
    };

    const paintRoad=()=>{
        
        filteredPics.innerHTML = "";

        objRoad.forEach((item) => {

            const roadTitle = document.createElement('H3');
            roadTitle.textContent = item.alt;

            const imgRoad = document.createElement('IMG');
            imgRoad.classList.add('imgSize');
            imgRoad.src = URL + item.url;
            imgRoad.alt = item.alt;
            imgRoad.title = item.title;

            filteredPics.append(roadTitle, imgRoad);
    })
    };

    const paintBridge=()=>{
        
        filteredPics.innerHTML = "";

        objBridge.forEach((item) => {

            const bridgeTitle = document.createElement('H3');
            bridgeTitle.textContent = item.alt;

            const imgBridge = document.createElement('IMG');
            imgBridge.classList.add('imgSize');
            imgBridge.src = URL + item.url;
            imgBridge.alt = item.alt;
            imgBridge.title = item.title;

            filteredPics.append(bridgeTitle, imgBridge);
    })
    };


    //!Función que pinta los botones de los filtros
    const paintFilters = () => {

        filtersCont.innerHTML = "";
        
        arrayFilters.forEach((item) => {

            const buttonsElement = document.createElement('BUTTON');
            buttonsElement.classList.add("buttonStyle");
            buttonsElement.id = item[1]

            buttonsElement.textContent = item[0];

            filtersCont.append(buttonsElement);
        })
    }
    

    const init=()=>{           //*función que inicializa todo
        alert("You can filter images by tags! Try it now!");
    }
    init();
    // +++++++++++++++++++++++++++++++++++++++++++++++++
    
    }) //!LOADED