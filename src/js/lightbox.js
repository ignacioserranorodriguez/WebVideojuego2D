'use strict'

const enlaces = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const ligthboxGrande = document.querySelector('.lightboxGrande');
const cerrar = document.querySelector('.cerrar');

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault();
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta );

        lightbox.classList.add('activo');
        ligthboxGrande.setAttribute('src', ruta);

    })
})

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');
})