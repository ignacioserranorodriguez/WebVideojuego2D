'use strict'

const li = document.querySelectorAll('.li')
const bloque = document.querySelectorAll('.bloque')

li.forEach( ( cadaLi , i )=>{
    li[i].addEventListener('click',()=>{
        li.forEach( ( cadaLi , i )=>{
            li[i].classList.remove('visible')
            bloque[i].classList.remove('visible')
        })

        li[i].classList.add('visible')
        bloque[i].classList.add('visible')

    })
})