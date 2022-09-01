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


}

function compute() {


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





                                                                
                                                                                            
                                                                                                    
                                                                                                        
                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            