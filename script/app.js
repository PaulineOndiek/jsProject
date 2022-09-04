
class Calculation {

  constructor(firstTextElement, secondTextElement) {
    this.firstTextElement = firstTextElement
    this.secondTextElement = secondTextElement
    this.erase()
  }
  erase() {
    this.first = ""
    this.second = ""
    this.operation = "undefined"
  
  }


  appendNumber(number) {
    if (number === '.' && this.second.includes('.'))
      return this.second = this.second.toString() + number.toString()

  }

  selectOperation(operation) {
      if (this.second === '') return
      if (this.first !== '') {
        this.computation()
      }
      this.operation = operation
      this.first = this.second
      this.second = ''
    
    }
    
    
     computation() {
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
      this.first = ''
    }
  
    displayNumber(number) {
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

    update() {
      this.secondTextElement.innerText =
        this.displayNumber(this.second)
      if (this.operation != null) {
        this.firstTextElement.innerText =
          `${this.displayNumber(this.first)} ${this.operation}`
      } else {
        this.firstTextElement.innerText = ''
      }
    }
}

const firstTextElement = document.querySelector("[data-first]")
console.log(firstTextElement)
const secondTextElement = document.querySelector("[data-second]")
console.log(secondTextElement);
const numerics = document.querySelectorAll("[data-number]");
console.log(numerics);
const operation = document.querySelectorAll("[data-operation]");
console.log(operation);
const clearing = document.querySelector("[data-clear]")
console.log(clearing);
const equal = document.querySelector("[data-equal]")
console.log(equal)





const calculation = new Calculation(firstTextElement, secondTextElement)

numerics.forEach(button => {
  button.addEventListener("click", () => {
    console.log(button)
    calculation.appendNumber(button.innerText)
    console.log(calculation)
    calculation.update()
  })
})



operation.forEach(button => {
  button.addEventListener("click", () => {
    calculation.selectOperation(button.innerText)
    calculation.update()

  })
})

clearing.addEventListener("click", button => {
  calculation.erase(button.innerText)
  calculation.update


}
)

equal.addEventListener(
  "click", button => {
    calculation.equal(button.innerText)
    calculation.update

  }
)

document.addEventListener('keydown', function (event) {
  let patternForNumbers = /[0-9]/g;
  let patternForOperators = /[+\-*\/]/g
  if (event.key.match(patternForNumbers)) {
    event.preventDefault();
    calculation.appendNumber(event.key)
    calculation.updateDisplay()
  }
  if (event.key === '.') {
    event.preventDefault();
    calculation.appendNumber(event.key)
    calculation.updateDisplay()
  }
  if (event.key.match(patternForOperators)) {
    event.preventDefault();
    calculation.selectOperation(event.key)
    calculation.updateDisplay()
  }
  if (event.key === 'Enter' || event.key === '=') {
    event.preventDefault();
    calculation.computation()
    calculation.updateDisplay()
  }
  if (event.key == 'Delete') {
    event.preventDefault();
    calculation.clearing()
    calculation.updateDisplay()
  }
  document.addEventListener('keydown', function (event) {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*\/]/g
    if (event.key.match(patternForNumbers)) {
      event.preventDefault();
      calculation.appendNumber(event.key)
      calculation.updateDisplay()
    }
    if (event.key === '.') {
      event.preventDefault();
      calculation.appendNumber(event.key)
      calculation.updateDisplay()
    }
    if (event.key.match(patternForOperators)) {
      event.preventDefault();
      calculation.selectOperation(event.key)
      calculation.updateDisplay()
    }
    if (event.key === 'Enter' || event.key === '=') {
      event.preventDefault();
      calculation.computation()
      calculation.updateDisplay()
    }
    if (event.key == 'Delete') {
      event.preventDefault();
      calculation.clearing()
      calculation.updateDisplay()
    }
  
  });
  


});








