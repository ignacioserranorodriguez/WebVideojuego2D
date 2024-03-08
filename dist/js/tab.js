'use strict';

var li = document.querySelectorAll('.li');
var tabs = document.querySelectorAll('.tabs');

li.forEach(function (cadaLi, i) {
    li[i].addEventListener('click', function () {
        li.forEach(function (cadaLi, i) {
            li[i].classList.remove('visible');
            tabs[i].classList.remove('visible');
        });

        li[i].classList.add('visible');
        tabs[i].classList.add('visible');
    });
});