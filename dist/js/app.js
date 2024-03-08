'use strict';

var bloque = document.querySelectorAll('.bloque');
var h2 = document.querySelectorAll('.h2');

h2.forEach(function (cadaH2, i) {
    h2[i].addEventListener('click', function () {

        bloque.forEach(function (cadaBloque, i) {
            bloque[i].classList.remove('activo');
        });

        bloque[i].classList.add('activo');
    });
});