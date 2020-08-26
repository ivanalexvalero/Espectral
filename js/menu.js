// Estas funciones son para una paginacion de filas en una
//misma pagina web
let pagina = document.getElementById('pagina');
let pagina2 = document.getElementById('pagina2');
let pagina3 = document.getElementById('pagina3');
let pagina4 = document.getElementById('pagina4');
let pagina5 = document.getElementById('pagina5');



function paginas() {
    let desplazamiento_actual = window.pageYOffset;
    
    
    if (desplazamiento_actual >=400) {
        pagina.classList.remove('actived');
        pagina.className = ('no_actived');
        
    } else {
        pagina.classList.remove('no_actived');
        pagina.className = ('actived');
     
    }

}


function paginas2() {
    let desplazamiento_actual = window.pageYOffset;
if ((desplazamiento_actual >=400)&&(desplazamiento_actual <=1100)) {
        pagina2.classList.remove('no_actived2');
        pagina2.className = ('actived2');
        
    } else {
        pagina2.classList.remove('actived2');
        pagina2.className = ('no_actived2');
     
    }
}


function paginas3() {
    let desplazamiento_actual = window.pageYOffset;
if ((desplazamiento_actual >=1100)&&(desplazamiento_actual <=1950)) {
        pagina3.classList.remove('no_actived3');
        pagina3.className = ('actived3');
        
    } else {
        pagina3.classList.remove('actived3');
        pagina3.className = ('no_actived3');
     
    }
}

function paginas4() {
    let desplazamiento_actual = window.pageYOffset;
if ((desplazamiento_actual >=1950)&&(desplazamiento_actual <=2550)) {
        pagina4.classList.remove('no_actived4');
        pagina4.className = ('actived4');
        
    } else {
        pagina4.classList.remove('actived4');
        pagina4.className = ('no_actived4');
     
    }
}

function paginas5() {
    let desplazamiento_actual = window.pageYOffset;
if ((desplazamiento_actual >=2550)&&(desplazamiento_actual <=3103)) {
        pagina5.classList.remove('no_actived5');
        pagina5.className = ('actived5');
        
    } else {
        pagina5.classList.remove('actived5');
        pagina5.className = ('no_actived5');
     
    }
}




window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);    
    paginas();
    paginas2();
    paginas3();
    paginas4();
    paginas5();
});

