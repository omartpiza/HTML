let usuarioNombre = prompt("¿Cual es tu nombre?");
console.log("Bienvenido " + usuarioNombre);
document.write("Bienvenido " + usuarioNombre);

let usuarioEdad = prompt("¿Cual es tu edad?");
console.log("Edad= " + usuarioEdad);
document.write("Edad= " + usuarioEdad);

let cotizacion = confirm("¿quisieras solicitar una cotizacion?");
if(cotizacion){
    console.log("Eres un Cliente" + usuarioNombre);
    document.write("Perfecto " + usuarioNombre +"!, en breve te contactaremos ;)");
}else{
    console.log("Eres un Visitante" + usuarioNombre);
    document.write("No hay problema " + usuarioNombre +" , te invitamos a revisar nuestros servicios ;)");
}

let modoOscuro = confirm("¿Quieres cambiar a modo oscuro?");
if(modoOscuro){
    document.body.style.backgroundColor = "black";
    console.log("Activa modo oscuro" + usuarioNombre);
    document.write("Perfecto " + usuarioNombre +"!, ahora estas ahorrando energia ;)");
}else{
    console.log("No activa modo oscuro" + usuarioNombre);
    document.write("Perfecto " + usuarioNombre + "!, eres el jefe! ;)");
}
