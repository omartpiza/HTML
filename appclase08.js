function validarNivelPrograma() {
    let nivelPrograma = prompt('Desarrollador, ¿Puedes escribir tu nivel en el programa de Desarrollo de software?');
    while (nivelPrograma !== 'code 102') {
        alert('Haz memoria! ¿En qué nivel del programa te encuentras?');
        nivelPrograma = prompt('Ingresa otra vez el nivel del programa en el que te encuentras ');
    }
    alert('¡Perfecto, ya has ingresado!');
    document.write('¡Bienvenido al sitio web de Desarrolladores CODE 102! <br>');
}

function calificarPagina() {
    let numero = prompt('¿Con cuántas estrellas calificarías esta página (1-10)?');
    for (let i = 0; i < numero; i++) {
        document.write('<img src="https://img.freepik.com/vector-premium/icono-estrella-aislado-icono-estrella-vector-amarillo-estrella-diseno-plano-estrella-vector_118339-1876.jpg" width="80px">');
    }
}

validarNivelPrograma();
calificarPagina();