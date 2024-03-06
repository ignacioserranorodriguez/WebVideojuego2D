'use strict'

const li = document.querySelectorAll('.li')
const tabs = document.querySelectorAll('.tabs')

li.forEach( ( cadaLi , i )=>{
    li[i].addEventListener('click',()=>{
        li.forEach( ( cadaLi , i )=>{
            li[i].classList.remove('visible')
            tabs[i].classList.remove('visible')
        })

        li[i].classList.add('visible')
        tabs[i].classList.add('visible')

    })
})