'use strict';

var enlaces = document.querySelectorAll('.ul .a');
var lightbox = document.querySelector('.lightbox');
var ligthboxGrande = document.querySelector('.lightboxGrande');
var cerrar = document.querySelector('.cerrar');

enlaces.forEach(function (cadaEnlace, i) {
    enlaces[i].addEventListener('click', function (e) {
        e.preventDefault();
        var ruta = cadaEnlace.querySelector('.img').src;
        console.log(ruta);

        lightbox.classList.add('activo');
        ligthboxGrande.setAttribute('src', ruta);
    });
});

cerrar.addEventListener('click', function () {
    lightbox.classList.remove('activo');
});