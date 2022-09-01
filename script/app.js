console.log("Hello World");

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

class calculator{
    constructor(firstTextElement, secondTextElement){
    this.firstTextElement=firstTextElement
    this.secondTextElement=secondTextElement
    this.erase=erase()
}
}


function erase () {
this.first=""
this.second=""
this.operation="undefined"

}

const calculation= new calculator(firstTextElement, secondTextElement)

function appendNumber(number) {
  if (number === '.' && this.second.includes('.')) return
  this.second = this.second.toString() + number.toString()


}

function selectOperation (operation) {
  if (this.second === '') return
  if (this.first !== '') {
    this.computation()
  }
  this.operation= operation
  this.first = this.second
  this.second= ''

}


function computation() {
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

numerics.forEach(button=>{
button.addEventListener("click", () => {
calculation.appendNumber(button.innerText)
console.log(calculation)
calculation.update
} )
})

operation.forEach(button=>{
    button.addEventListener("click", ()=>{
      calculation.selectOperation(button.innerText)  
      console.log(calculation)
      calculation.update
      
    })
})

clearing.addEventListener("click", button=>{
calculation.erase(button.innerText)
calculation.update


    } 
)

equal.addEventListener(
  "click", button=>{
    calculation.equal(button.innerText)
    calculation.update
    
  }  
)





                                                                
                                                                                            
                                                                                                    
                                                                                                        
                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            