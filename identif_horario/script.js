function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date() 
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `<strong>AGORA SÃO: ${hora}:${min}:${seg}</strong>`
    if(hora >= 0 && hora < 12){
        img.src = 'fotodia.png'
        msg2.innerHTML = '<strong>BOM DIA!</strong>'
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        msg2.innerHTML = '<strong>BOM TARDE!</strong>'
    }
    else{
        img.src = 'fotonoite.png'
        msg2.innerHTML = '<strong>BOM NOITE!</strong>'
    }
}
