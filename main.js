const pantalla = document.querySelector(".pantalla");
const buttons = document.querySelectorAll(".btn");


buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // console.log(button.textContent); //Arroja el contenido de ese boton, Muy importante

        const botonApretado = button.textContent;

       if(button.id === "c") {
        pantalla.textContent  = "0";
        return; //Para cortar la funcion aca y no me ejecute los if de abajo
        //Muy importante el return,si no ejecutara los otro if y nunca funcionara
       }
       if(button.id === "borrar") {
        if((pantalla.textContent.length === 1) || pantalla.textContent == "Error!") { //Si tengo un digito que me lo resete a 0 cuando borro
            pantalla.textContent = "0"
        }
    
        else{ //Si no le hacemos un slice para borrar el ultimo digito
            pantalla.textContent = pantalla.textContent.slice(0,-1); //Asi arrancara desde atras y borrar la ultima posicion

        }
        return; //Importante cortar la funcion con este return
      
       }
       if(button.id === "igual") {
    
        /*
        Eval lo que hace es evaluar un conjunto de string que tenga
        operaciones matematicas en formato string, me arrojara el resultado
        de esas operaciones matematicas
        */
       try{
        pantalla.textContent = eval(pantalla.textContent);

       }
       catch{ //Si en el eval hay algo que no puede leer, ejemplo muchos signos de operaciones
        pantalla.textContent = "Error!";
       }
       
        return;
       }


        if((pantalla.textContent === "0") || pantalla.textContent === "Error!"){ //Si en la patalla hay un cero
            pantalla.textContent = botonApretado; //Para que si me salta error el numero no se agregue atras
        }
        else{
            pantalla.textContent += botonApretado;
        }

    })
})