function tabuada(){
    var selec = document.getElementById('resul')
    selec.innerHTML = ''
    var numtxt = document.getElementById('txtbotao')
    var num = Number(numtxt.value)
    if(numtxt.value.length == 0){
        window.alert('[ERRO], Digite um número!')
    }
    else{
        for(var i=1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num*i}`
            selec.appendChild(item)
        }
    }
}