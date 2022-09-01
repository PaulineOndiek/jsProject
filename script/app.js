console.log("Hello World");
class calculation{
    constructor(firstTextElement, secondTextElement){
    this.firstTextElement=firstTextElement
    this.secondTextElement=secondTextElement
    this.clear()
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
const clear=document.querySelector("[data-clear]")
console.log(clear);
const equal=document.querySelector("[data-equal]")
console.log(equal)

clear () {
this.first=""
this.second=""
this.operator="undefined"

}

appendNumber(number) {


}

selectOperation (operator) {


}

compute() {


}



const calculation= new calculation(firstTextElement, secondTextElement)


numerics.forEach(button=>{
button.addEventListener("click", () => {
calculation.appendNumber(button.innerText)
calculation.updateDisplay 
text.value=target.textContent

} )
})

operation.forEach(button=>{
    button.addEventListener("click", ()=>{
      calculation.selectOperation(button.innerText)  
      calculation.updateDisplay
      text.value=target.textContent
    })
})

clear.addEventListener("click", button=>{
calculation.clear(button.innerText)
calculation.updatedDisplay
text.value=target.textContent

    }

    
)

equal.addEventListener(
  "click", button=>{
    calculation.equal(button.innerText)
    calculation.updateDisplay
    text.value=target.textContent
  }  
)





//                                                                         decimal.addEventListener(
//                                                                             "click", function (event) {
//                                                                                 text.value=event.target.textContent
//                                                                             }
//                                                                             )

                                                                                            
                                                                                                    
                                                                                                        
                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            