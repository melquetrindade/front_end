const previousOperationText = document.querySelector("#previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator{
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    // adiciona digitos
    addDigit(digito){
        if(digito === "." && this.currentOperationText.innerHTML.includes(".")){
            return
        }

        this.currentOperation = digito
        this.updateScreen()
    }

    // adiciona operações
    processOperation(operation){

        if(this.currentOperationText.innerText === "" && operation !== "C"){
            if(this.previousOperationText.innerHTML !== ""){
                this.changeOperation(operation)
            }
            return
        }

        let operationValue
        const previous = Number(this.previousOperationText.innerHTML.split(" ")[0])
        const current = Number(this.currentOperationText.innerHTML)

        switch(operation){
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, previous, current)
                break
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, previous, current)
                break
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, previous, current)
                break
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, previous, current)
                break
            case "DEL":
                this.processDelOperation()
                break
            case "CE":
                this.processClearCurrentOperation()
                break
            case "C":
                this.processClearOperation()
                break
            case "=":
                this.processEqualOperation()
                break
            default:
                return
        }
    }

    // change value of the calculator screen
    updateScreen(operationValue = null, operation = null, previous = null, current = null){
        console.log(operationValue, operation, previous, current)

        if(operationValue === null){
            this.currentOperationText.innerHTML += this.currentOperation
        }
        else{
            if(previous === 0){
                operationValue = current
            }
            this.previousOperationText.innerHTML = `${operationValue} ${operation}`
            this.currentOperationText.innerHTML = ""
        }
    }

    changeOperation(operation){
        const mathOperation = ["+", "-", "/", "*"]
        if(!mathOperation.includes(operation)){
            return
        }
        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }

    processDelOperation(){
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }

    processClearCurrentOperation(){
        this.currentOperationText.innerText = ""
    }

    processClearOperation(){
        this.currentOperationText.innerHTML = ""
        this.previousOperationText.innerHTML = ""
    }

    processEqualOperation(){
        const operation = this.previousOperationText.innerText.split(" ")[1]
        this.processOperation(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerHTML

        if(Number(value) >= 0 || value === "."){
            calc.addDigit(value)
        }
        else{
            calc.processOperation(value)
        }

    })
})