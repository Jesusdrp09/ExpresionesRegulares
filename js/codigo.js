let palabraInput = document.getElementById("palabra");
let validar = document.getElementById("validar");
let resultado = document.getElementById("mensaje");

validar.onclick = ()=>{
    if(haySimilitud()){
        resultado.innerText = "Correcto";
        console.log("Hay similitud");
    }else{
        resultado.innerText = "Incorrecto";
        console.log("No hay similitud");
    }
}

palabraInput.oninput = ()=>{
    if(haySimilitud() && !palabraInput.classList.contains("correcto")){
        palabraInput.classList.add("correcto");
        console.log("correcto");
    }else if(!haySimilitud() && palabraInput.classList.contains("correcto")){
        palabraInput.classList.toggle("correcto");
    }
}

const haySimilitud = ()=>{
    let palabraverificar = document.getElementById("palabra").value;
    let expresion = document.getElementById("expresion").value;
    console.log(palabraverificar);
    console.log(expresion);
    if(verificar(palabraverificar, expresion)){
        return true;
    }else{
        return false;
    }
}

const verificar = (palabraverificar, expresion) =>{
    let Myrege = new RegExp(expresion, 'g');
    array = Myrege.exec(palabraverificar);
    try {
        console.log(array[0]);
        if(verificarSimilitud(array[0], palabraverificar)){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        if(e instanceof TypeError){
            console.log("null");
        }
    }
}

const verificarSimilitud = (variable, palabraverificar)=>{
    if(variable == palabraverificar){
        return true;
    }else{
        return false;
    }
}