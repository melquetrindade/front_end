let imenu = window.document.getElementById('op')
let menu = window.document.getElementById('fundoMenu')
let i1 = window.document.getElementById('img1')
let i2 = window.document.getElementById('img2')
let i3 = window.document.getElementById('img3')
let i4 = window.document.getElementById('img4')

imenu.addEventListener('click', clicou)
imenu.addEventListener('mouseenter', entrou)
imenu.addEventListener('mouseout', saiu)

function clicou(){
    menu.style.backgroundColor = 'yellow'
    i1.style.display = 'block'
    i2.style.display = 'block'
    i3.style.display = 'block'
    i4.style.display = 'block'
    menu.style.position = 'absolute'
    menu.style.width = '100px'
    menu.style.left = '0px'
    menu.style.opacity =''
}

function entrou(){
    menu.style.backgroundColor = 'yellow'
}

function saiu(){
    menu.style.backgroundColor = 'rgb(22, 22, 22)'
}