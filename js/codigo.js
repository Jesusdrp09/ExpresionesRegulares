let validar = document.getElementById("validar");

validar.onclick = ()=>{
    let resultado = document.getElementById("mensaje");
    if(haySimilitud()){
        resultado.innerText = "Correcto";
        console.log("Hay similitud");
    }else{
        resultado.innerText = "Incorrecto";
        console.log("No hay similitud");
    }
}

const haySimilitud = ()=>{
    let palabraverificar = document.getElementById("palabra").value;
    let expresion = document.getElementById("expresion").value;
    
    console.log(palabraverificar);
    console.log(expresion);

    return verificarExpresion(palabraverificar, expresion);
}

const verificarExpresion = (palabraverificar, expresion) =>{
    let Myrege = new RegExp(expresion, 'g');
    let array = Myrege.exec(palabraverificar);
    try {
        console.log(array[0]);
        if(array[0] == palabraverificar){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        if(e instanceof TypeError){
            console.log("Array vacio (null)");
        }
    }
}