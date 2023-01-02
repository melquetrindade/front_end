function jogar(){
    var res = window.document.getElementById('res')
    res.innerHTML = ''
    var jog = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    var comp = Math.floor(Math.random() * (6 - 1 + 1)) + 1
    var total = jog + comp

    var imgjog = document.createElement('img')
    imgjog.setAttribute('id', 'fotojog')
    var imgcom = document.createElement('img')
    imgcom.setAttribute('id', 'fotocomp')

    if(jog == 1){
        imgjog.setAttribute('src', 'fase1.png')
    }
    else if(jog == 2){
        imgjog.setAttribute('src', 'fase2.png')
    }
    else if(jog == 3){
        imgjog.setAttribute('src', 'fase3.png')
    }
    else if(jog == 4){
        imgjog.setAttribute('src', 'fase4.png')
    }
    else if(jog == 5){
        imgjog.setAttribute('src', 'fase5.png')
    }
    else{
        imgjog.setAttribute('src', 'fase6.png')
    }

    const parag1 = document.createElement("p")
    parag1.setAttribute('id', 'pJog')
    const texto1 = document.createTextNode('DADO DO JOGADOR:')
    parag1.appendChild(texto1)
    res.appendChild(parag1)
    res.appendChild(imgjog)
    const parag = document.createElement("p")
    parag.setAttribute('id', 'pCom')
    const texto = document.createTextNode("DADO DO COMPUTADOR: ")
    parag.appendChild(texto)
    res.appendChild(parag)

    if(comp == 1){
        imgcom.setAttribute('src', 'fase1.png')
    }
    else if(comp == 2){
        imgcom.setAttribute('src', 'fase2.png')
    }
    else if(comp == 3){
        imgcom.setAttribute('src', 'fase3.png')
    }
    else if(comp == 4){
        imgcom.setAttribute('src', 'fase4.png')
    }
    else if(comp == 5){
        imgcom.setAttribute('src', 'fase5.png')
    }
    else{
        imgcom.setAttribute('src', 'fase6.png')
    }
    res.appendChild(imgcom)

    var op = window.document.getElementsByName('bola')
    var resultado = window.document.getElementById('resultado')
    var prova = total%2

    if(op[0].checked){
        if(prova == 0){
            resultado.innerHTML = `A SOMA DOS DADOS FOI ${total}. DEU PAR, VOCÊ PERDEU!`
        }
        else{
            resultado.innerHTML = `A SOMA DOS DADOS FOI ${total}. DEU ÍMPAR, VOCÊ GANHOU!`
        }
    }
    else{
        if(prova == 0){
            resultado.innerHTML = `A SOMA DOS DADOS FOI ${total}. DEU PAR, VOCÊ GANHOU!`
        }
        else{
            resultado.innerHTML = `A SOMA DOS DADOS FOI ${total}. DEU ÍMPAR, VOCÊ PERDEU!`
        }
    }
}