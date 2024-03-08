'use strict';

var grande = document.querySelector('.grande');
var punto = document.querySelectorAll('.punto');

punto.forEach(function (cadaPunto, i) {
    punto[i].addEventListener('click', function () {

        var posicion = i;
        var operacion = posicion * -25;

        grande.style.transform = 'translateX(' + operacion + '%)';

        punto.forEach(function (cadaPunto, i) {
            punto[i].classList.remove('activo');
        });
        punto[i].classList.add('activo');
    });
});