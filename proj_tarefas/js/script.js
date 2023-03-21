const btnAdd = document.querySelector("#add-tarefa")
const ulEl = document.querySelector("#list-cont")

btnAdd.addEventListener("click", function(e){
    e.preventDefault()
    processTarefa()
})

function processTarefa(){
    const inputEl = document.querySelector("#tarefaId").value

    if(inputEl){

        //clonar o bloco de tarefas
        const exBloco = document.querySelector(".template")
        const newBloco = exBloco.cloneNode(true)

        // add o título da tarefa
        newBloco.querySelector("#title").innerHTML = inputEl

        // removendo class desnecessárias 
        newBloco.classList.remove("template")
        newBloco.classList.remove("hide")

        // add a tarefa na lista
        ulEl.appendChild(newBloco)

        // add os eventos de done e close
        newBloco.querySelector(".done").addEventListener("click", function(){
            doneTask(this)
        })
        newBloco.querySelector(".close").addEventListener("click", function(){
            closeTask(this)
        })

        // limpa input
        document.querySelector("#tarefaId").value = ""
    }
}

function doneTask(doneEl){
    doneEl.parentNode.classList.toggle("done")
}

function closeTask(closeEl){
    closeEl.parentNode.remove(true)
}