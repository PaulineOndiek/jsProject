class Calculation {
  constructor(firstTextElement, secondTextElement) {
    this.firstTextElement = firstTextElement
    this.secondTextElement = secondTextElement
    this.clear()
  }

  clear() {
    this.second = ''
    this.first = ''
    this.operation = undefined
  }

  appendNumber(number) {
    if (number === '.' && this.first.includes('.')) return
    this.second = this.second.toString() + number.toString()
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

  getDisplayNumber(number) {
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

  updateDisplay() {
    this.secondTextElement.innerText =
      this.getDisplayNumber(this.second)
    if (this.operation != null) {
      this.firstTextElement.innerText =
        `${this.getDisplayNumber(this.first)} ${this.operation}`
    } else {
      this.firstTextElement.innerText = ''
    }
  }
}

const numerics = document.querySelectorAll('[data-number]')
const operations = document.querySelectorAll('[data-operation]')
const equals = document.querySelector('[data-equal]')
const clearing = document.querySelector('[data-clear]')
const firstTextElement = document.querySelector('[data-first-operand]')
const secondTextElement = document.querySelector('[data-second-operand]')

const calculation = new Calculation(firstTextElement, secondTextElement)

numerics.forEach(button => {
  button.addEventListener('click', () => {
    calculation.appendNumber(button.innerText)
    calculation.updateDisplay()
  })
})

operations.forEach(button => {
  button.addEventListener('click', () => {
    calculation.selectOperation(button.innerText)
    calculation.updateDisplay()
  })
})

equals.addEventListener('click', button => {
  calculation.computation()
  calculation.updateDisplay()
})

clearing.addEventListener('click', button => {
  calculation.clear()
  calculation.updateDisplay()
})

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













