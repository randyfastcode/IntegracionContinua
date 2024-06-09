// index.js
function holaMundo() {
    return "Hola Mundo";
}

module.exports = holaMundo;


function nombreCompleto(nombre,apellido){
    let user = `Hola ${nombre} ${apellido}`;
    return user;
}
module.exports = nombreCompleto;

function suma(a,b){
    let resultado  = a + b;
    return resultado;
}
module.exports = suma;