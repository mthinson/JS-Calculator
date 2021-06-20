const submit = document.getElementById('equal');
const clear = document.getElementById('clear');
const btn = document.querySelectorAll('.button');
const arrow = document.getElementById('arrow');

let display = document.getElementById('display');

   btn.forEach(element => {
       element.addEventListener('click', (e)=>{

        switch(value = e.target.innerText){
            case 'C':
                //console.log('c is working');
               display.innerText = "";
                break;
            case '=':
                //console.log("= is working");
                try{
                   display.innerText = Function('"use strict";return (' + display.innerText + ')')(); //alternative to eval();
                }
                catch{
                    display.innerText = "Error!"
                }
                
                break
            case '←':
                //console.log('arrow is working');
                if (display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
                //console.log(value);
        }

       })
   });
    



