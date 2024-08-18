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
     try 
     {
           input.value = eval(input.value)
          console.log('try block');  
     } 
        catch (err)
        {
          console.log(err);
          console.log('catch block');
          input.value = "Syntax Error"
        }
}

//Function for deleting last added value from calculator
const del = ()=>{
   input.value = input.value.slice(0,-1)
}