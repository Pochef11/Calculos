// Se crea una constante y se asigna al boton

const botonsumar = document.getElementById("Btnsumar");

// El boton estará atento cuando de click y ejecutará la funcion "sumar"
botonsumar.addEventListener("click", sumar);

function sumar (){
    // Detectar las variables
    const num1= Number (document.getElementById("numero1").value);
    const num2= Number (document.getElementById("numero2").value);
    const divresultado = document.getElementById("result_suma");
    // Operacion logica
    resultado= num1 + num2;

    // Imprimir el resultado
    // alert("El resultado de la suma es: "+ resultado);
    divresultado.innerText= resultado;
}


const botonrestar = document.getElementById("Btnrestar");
botonrestar.addEventListener("click", restar);

function restar (){

    const num3= Number (document.getElementById("numero3").value);
    const num4= Number (document.getElementById("numero4").value);
    const divresultado = document.getElementById("result_resta");
    
    resultado= num3 - num4;

    divresultado.innerText= resultado;
}


const botonmultiplicar = document.getElementById("Btnmultiplicar");
botonmultiplicar.addEventListener("click", multiplicar);

function multiplicar (){
    
    const num5= Number (document.getElementById("numero5").value);
    const num6= Number (document.getElementById("numero6").value);
    const divresultado = document.getElementById("result_multi");
    
    resultado= num5 * num6;
    divresultado.innerText= resultado;
}


const botondividir = document.getElementById("Btndividir");
botondividir.addEventListener("click", dividir);

function dividir (){
    
    const num7= Number (document.getElementById("numero7").value);
    const num8= Number (document.getElementById("numero8").value);
    const divresultado = document.getElementById("result_divi");
    
    resultado= num7 / num8;
    divresultado.innerText= resultado;
}


const botonasende = document.getElementById("Btnnumeros");
botonasende.addEventListener("click", numeros);

function numeros (){
    
    const asendientes= document.getElementById("imprimir");
    
    imprimir.innerHTML= "";

    for (let x=0;x<=8;x++){
        
        const list = document.createElement("li");
        list.setAttribute("class", "list-group-item");
        list.innerText=`${x}`;
        asendientes.appendChild(list);
    }
    
}

const botoncali = document.getElementById("Btncali");
botoncali.addEventListener("click", Pase);

function Pase (){
    let califi= Number (document.getElementById("numero11").value);

    let result= document.getElementById("imprimirresultadoverificar");

    if (califi <=8){
        result.innerText = "Reprobadote"
    }
    else{
        result.innerText="Pansazo"
    }
    
}


