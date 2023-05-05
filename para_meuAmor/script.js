let elRes1 = document.querySelector(".res1")
let elRes2 = document.querySelector(".res2")
let elTitle = document.querySelector("#perguntas")
let elObservacao = document.querySelector("#observacao")
let elBotao = document.querySelector("#botao")
let elBotao2 = document.querySelector("#botao2")
let elText1 = document.querySelector("#textRes1")
let elText2 = document.querySelector("#textRes2")
let elImg1 = document.querySelector("#img1")
let elImg2 = document.querySelector("#img2")


var positions = ["25%", "10%", "5%", "0%", "88%", "50%", "20%"]

var perguntas = [
    {"perg": "Quem é a mais linda?", "res1": "Raquel Ruciele", "res2": "Lana del rey"},
    {"perg": "Mais provável de ir bem em uma prova de exatas?", "res1": "Eu, é claro", "res2": "Melque..."},
    {"perg": "Qual a chance deu ler um livro ?", "res1": "mais facíl cair neve em parelhas", "res2": "a mesma chance de um coelho ter mais de um herdeiro"},
    {"perg": "vamos sair hojee ?", "res1": "vamooooooos", "res2": "depende do meu pai"},
    {"perg": "advinha qual é o meu papel de parede:", "res1": "imgs/sol.png", "res2": "imgs/lua.jpg"}

]

var respondeu = false
var cont = 1

elRes1.addEventListener("click",() => {
    res = verificaPerg()
    console.log("resposta: " + res)
    bifurcacao(res)
})

elRes2.addEventListener("click", () => {
    res = verificaPerg()
    console.log("resposta: " + res)
    bifurcacao(res)
})

elBotao.addEventListener("click", () => {
    if(respondeu == true){
        res = verificaPerg()
        elTitle.innerHTML = perguntas[res+1].perg
        elText1.innerHTML = perguntas[res+1].res1
        elText2.innerHTML = perguntas[res+1].res2
        if(res+1 == 4){
            elText1.classList.add("hide")
            elText2.classList.add("hide")
            elImg1.classList.remove("hide")
            elImg2.classList.remove("hide")

            elBotao.classList.remove("done")
            elBotao.classList.add("hide")

            elBotao2.classList.remove("hide")
            elBotao2.classList.add("done")
        }
        elObservacao.classList.remove("done")
        elObservacao.classList.add("hide")
    }
    else{
        window.alert("Responda a pergunta primeiro mocinha!!!")
    }
    respondeu = false
})

elBotao2.addEventListener("click", () => {
    if(respondeu == false){
        window.alert("Responda a pergunta primeiro mocinha!!!")
    }
    else{
        window.open('index2.html');
    }
})

function bifurcacao(index){
    if(index == 0){
        respondeu = true
        showDescription1()
    }
    else if(index == 1){
        respondeu = true
        showDescription2()
    }
    else if(index == 2){
        respondeu = true
        showDescription3()
    }
    else if(index == 3){
        respondeu = true
        showDescription4()
    }
    else{
        elText1.classList.add("hide")
        elText2.classList.add("hide")
        elImg1.classList.remove("hide")
        elImg2.classList.remove("hide")

        respondeu = true
        showDescription5()
    }
}

function showDescription1(){
    elObservacao.classList.remove("hide")
    elObservacao.classList.add("done")
    elObservacao.style.padding = "5px"
    elObservacao.innerHTML = "aqui sem surpresa né ? kkkkk"
}

function showDescription2(){
    elObservacao.classList.remove("hide")
    elObservacao.classList.add("done")
    elObservacao.innerHTML = "Parabêns, resposta correta!"
}

function showDescription3(){
    elObservacao.classList.remove("hide")
    elObservacao.classList.add("done")
    elObservacao.innerHTML = "ainda bem que você sabe!"
}

function showDescription4(){
    elObservacao.classList.remove("hide")
    elObservacao.classList.add("done")
    elObservacao.innerHTML = "aaeeeeee ela disse que vaaaai "
}

function showDescription5(){
    elObservacao.classList.remove("hide")
    elObservacao.classList.add("done")
    elObservacao.innerHTML = "é brincadeira amor, não fique com raiva kkkkkk"
}

function verificaPerg(){
    var pergunta = elTitle.innerHTML
    var contador = 0
    var retorno = 0
    perguntas.forEach(function(i){
        if(i.perg == pergunta){
            retorno = contador
        }
        contador += 1
    })

    return retorno
}


elRes1.addEventListener("mouseenter", () => {

    res = verificaPerg()
    if(res == 0){
        return
    }
    else if(res == 1){
        deslocarRes1()
    }
    else if(res == 2){
        return
    }
    else if(res == 3){
        return
    }
    else{
        deslocarRes1()
    }

}
)

elRes2.addEventListener("mouseenter", () => {
    res = verificaPerg()
    if(res == 0){
        deslocarRes2()
    }
    else if(res == 1){
        return
    }
    else if(res == 2){
        deslocarRes2()
    }
    else if(res == 3){
        deslocarRes2()
    }
    else{
        return
    }
})

function deslocarRes1(){
    if(cont == 7){
        cont = 1
    }
    if(cont == 1){
        elRes1.style.top = "35%",
        elRes1.style.left = "66%"
    }
    if(cont == 2){
        elRes1.style.top = "76%",
        elRes1.style.left = "30%"
    }
    if(cont == 3){
        elRes1.style.top = "3%",
        elRes1.style.left = "45%"
    }
    if(cont == 4){
        elRes1.style.top = "2%",
        elRes1.style.left = "2%"
    }
    if(cont == 5){
        elRes1.style.top = "34%",
        elRes1.style.left = "5%"
    }
    if(cont == 6){
        elRes1.style.top = "59%",
        elRes1.style.left = "10%"
    }
    cont ++
}

function deslocarRes2(){
    if(cont == 7){
        cont = 1
    }
    if(cont == 1){
        elRes2.style.top = "10%",
        elRes2.style.left = "76%"
    }
    if(cont == 2){
        elRes2.style.top = "76%",
        elRes2.style.left = "70%"
    }
    if(cont == 3){
        elRes2.style.top = "8%",
        elRes2.style.left = "25%"
    }
    if(cont == 4){
        elRes2.style.top = "75%",
        elRes2.style.left = "77%"
    }
    if(cont == 5){
        elRes2.style.top = "40%",
        elRes2.style.left = "16%"
    }
    if(cont == 6){
        elRes2.style.top = "70%",
        elRes2.style.left = "10%"
    }
    cont ++
}