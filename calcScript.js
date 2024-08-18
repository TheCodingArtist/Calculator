//To dislay each button on the screen
const displayContent =(content)=>{
     input.value += content
}
//To clear inside textbox/calculator-screen
const clr = ()=>{
 input.value =""
}
//To calculate we can use evaluate function "eval()".
//it is a predefined function of java script.
const result = ()=>{
   input.value = eval(input.value)
}

