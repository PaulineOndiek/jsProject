console.log("Hello World");
class calculator{
    constructor(firstTextElement, secondTextElement){
    this.firstTextElement=firstTextElement
    this.secondTextElement=secondTextElement
    this.erase=erase()
}
}

const firstTextElement=document.querySelector("[data-first]")
console.log(firstTextElement)
const secondTextElement=document.querySelector("[data-second]")
console.log(secondTextElement);
const numerics=document.querySelectorAll("[data-number]");
console.log(numerics);
const operation=document.querySelectorAll("[data-operation]");
console.log(operation);
const clearing=document.querySelector("[data-clear]")
console.log(clearing);
const equal=document.querySelector("[data-equal]")
console.log(equal)

function erase () {
this.first=""
this.second=""
this.operator="undefined"

}

function appendNumber(number) {
  if (number === '.' && this.second.includes('.')) return
  this.second = this.second.toString() + number.toString()


}

function selectOperation (operator) {
  if (this.second === '') return
  if (this.first !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''

}


function compute() {
  let result
  const prev = parseFloat(this.first)
  const current = parseFloat(this.second)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case '+':
      result = prev + current
      break
    case '-':
      result = prev - current
      break
    case '*':
      result = prev * current
      break
    case '÷':
      result = prev / current
      break
    default:
      return
  }
  this.second = result
  this.operation = undefined
  this.first= ''
}


 function update() {
        this.secondTextElement.innerText =
          this.displayNumber(this.second)
        if (this.operation != null) {
          this.firstTextElement.innerText =
            `${this.displayNumber(this.first)} ${this.operation}`
        } else {
          this.firstTextElement.innerText = ''
        }
      }

 function displayNUmber(number){
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`
  } else {
    return integerDisplay
  }

 }     
    

 function displayNumber(number) {
  if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }




const calculation= new calculator(firstTextElement, secondTextElement)


numerics.forEach(button=>{
button.addEventListener("click", () => {
calculation.appendNumber(button.innerText)
calculation.update


} )
})

operation.forEach(button=>{
    button.addEventListener("click", ()=>{
      calculation.selectOperation(button.innerText)  
      calculation.update
      
    })
})

clearing.addEventListener("click", button=>{
calculation.clear(button.innerText)
calculation.update


    }

    
)

equal.addEventListener(
  "click", button=>{
    calculation.equal(button.innerText)
    calculation.update
    
  }  
)





                                                                
                                                                                            
                                                                                                    
                                                                                                        
                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            