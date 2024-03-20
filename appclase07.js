function sumarDesdePrompt() {
	let num1 = prompt("Numero 1:");
	let num2 = prompt("Numero 2:");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	let suma = num1 + num2;
    return suma;

}
SeguridadRobot=sumarDesdePrompt();

console.log("#Seguridad= " + SeguridadRobot);
alert(SeguridadRobot +": Entendido no eres un robot");
document.write("No eres un Robotin :D :" + SeguridadRobot + "<br>");



function nombre(){
    let usuarioNombre = prompt("¿Cual es tu nombre?");
    return usuarioNombre;
}
console.log("Bienvenido " );
document.write("Bienvenido " +  + "<br>");

function edad(){
    let usuarioEdad = prompt("¿Cual es tu edad?");
    edadConv=parseInt(usuarioEdad);

    if(edadConv > 17){
        console.log("Eres Mayor de edad, edad: " +edadConv);
        document.write("Validado " + edadConv +"!, eres mayor de edad ;) <br>");
    }else{
        alert(edadConv +": Debes ser mayor de edad para ingresar a la pagina");
        edad();
    }
}


function cotizacion() {
	let cotizacion = confirm("¿quisieras solicitar una cotizacion?");
    if(cotizacion){
        console.log("Eres un Cliente " );
        document.write("Perfecto " +"!, en breve te contactaremos ;) <br>");
    }else{
        console.log("Eres un Visitante " );
        document.write("No hay problema " +" , te invitamos a revisar nuestros servicios ;) <br>");
    }
    return cotizacion;
}

