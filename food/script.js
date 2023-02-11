let imenu = window.document.getElementById('op')
let menu = window.document.getElementById('fundoMenu')
let icone2 = window.document.querySelector('p.icone')
let i1 = window.document.getElementById('img1')
let i2 = window.document.getElementById('img2')
let i3 = window.document.getElementById('img3')
let i4 = window.document.getElementById('img4')

imenu.addEventListener('click', clicou)

function clicou(){
        menu.style.backgroundColor = 'red'
        i1.style.display = 'inline-block'
        i2.style.display = 'inline-block'
        i3.style.display = 'inline-block'
        i4.style.display = 'inline-block'

        menu.style.position = 'absolute'
        menu.style.width = '100px'
        menu.style.height = '500px'
        menu.style.left = '0px'
        menu.style.opacity ='1'
}


//function entrou(){
//    menu.style.backgroundColor = 'red'
//}

//function saiu(){
//    menu.style.backgroundColor = 'rgb(22, 22, 22)'
//}
