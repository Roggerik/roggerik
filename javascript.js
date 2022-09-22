let lineaUno = document.getElementById('lineaUno');
let linea2 = document.querySelector('.lineaDos');
let linea3 = document.getElementsByClassName('.lineaTres');
let hamburguer = document.querySelector('.hamburguer');
let navbar = document.querySelector('.navbar');
let body=document.querySelector('body');
let temaUno = document.querySelector('.temaUno');
let temaDos = document.querySelector('.temaDos');
let temaTres = document.querySelector('.temaTres');
let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
cont = 0
hamburguer.addEventListener('click',()=>{
    if (cont == 0){
        hamburguer.classList.add('active');
        navbar.classList.add('navbar-active');
        cont= 1
    }else{
        hamburguer.classList.remove('active');
        navbar.classList.remove('navbar-active');
        cont = 0
    }
    
})

temaUno.addEventListener('click',()=>{
    let temaU = 0
    if(temaU ==0){
        body.classList.add('temaUno');
        body.classList.remove('temaDos');
        body.classList.remove('temaTres');
    }
});

temaDos.addEventListener('click',()=>{
    let temaD = 0
    if(temaD==0){
        body.classList.remove('temaUno');
        body.classList.add('temaDos');
        body.classList.remove('temaTres');
    }
});

temaTres.addEventListener('click',()=>{
    let temaT = 0
    if(temaT==0){
        body.classList.remove('temaUno');
        body.classList.remove('temaDos');
        body.classList.add('temaTres');
    }
});

text1.addEventListener('click',()=>{
    let cRubik = 0
    if(cRubik==0){
        body.style.fontFamily='Ms Madi';
    }
});


text2.addEventListener('click',()=>{
    let cRubik = 0
    if(cRubik==0){
        body.style.fontFamily='Pacifico';
    }
});

text3.addEventListener('click',()=>{
    let cOpen = 0
    if(cOpen==0){
        body.style.fontFamily='Open Sans';
    }
});


openSans.addEventListener('click',()=>{
    let cOpen = 0
    if(cOpen==0){
        body.style.fontFamily='Open Sans';
    }
});
