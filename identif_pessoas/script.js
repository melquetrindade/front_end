function verificar(){
    var data = new Date()
    var anoA = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > anoA){
        window.alert('[ERRo] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = anoA - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'HOMEM'
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src', 'crianca_m.png')
            }
            else if(idade <= 22){
                img.setAttribute('src', 'jovem_m.png')
            }
            else if(idade <= 60){
                img.setAttribute('src', 'adulto_m.png')
            }
            else{
                img.setAttribute('src', 'idoso_m.png')
            }
        }
        else{
            genero = 'MULHER'
            if(idade >= 0 && idade <= 12){
                genero = 'MULHER'
                img.setAttribute('src', 'crianca_f.png')
            }
            else if(idade <= 22){
                img.setAttribute('src', 'jovem_f.png')
            }
            else if(idade <= 60){
                img.setAttribute('src', 'adulto_f.png')
            }
            else{
                img.setAttribute('src', 'idosa_f.png')
            }
        }
        res.innerHTML = `DETECTAMOS ${genero} DE ${idade} ANOS`
        res.appendChild(img)
    }
}