/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres */

let miListaDeContactos = ['Bruce Wayne', 'Clark Kent', 'The Flash', 'Wonder Woman', 'Black Adam'];

/* Crea una función para añadir un nuevo contacto a una lista */

/* let añadirContacto = (nombre) => {
    let nuevoContacto = miListaDeContactos.push(`${nombre}`);
}
añadirContacto('Peter Parker'); */

/* 
Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección
*/

let nuevoContacto = {
    id: "id",
    nombres: "nombres",
    apellidos: "apellidos",
    teléfono: "teléfono",
    ubicaciones: {
        ciudad: "ciudad",
        dirección: "dirección"
    }
}

// Intento 1: lo malo es que toca pasar cada propiedad con su valor al llamar la función, sería más práctico usar prompt, pero no he logrado que funcione con prompt.
let añadirContacto = (nuevoContacto) => {
    let add = miListaDeContactos.push(nuevoContacto);
}

añadirContacto({id:"Spiderman",nombres:"Peter",apellidos:"Parker",teléfono:1234567890,ciudad:"New York",dirección: "Queens"});
añadirContacto({id:"SpongeBob",nombres:"Bob Esponja",apellidos:"Pantalones Cuadrados",teléfono:1234567890,ciudad:"Fondo de Bikini",dirección: "La piña en el fondo del mar"});
añadirContacto({id:"Black Widow",nombres:"Natasha",apellidos:"Romanov",teléfono:1234567890,ciudad:"New York",dirección: "Cannot locate"});


/* Crea una función para borrar un contacto existente de la lista */

let borrarContacto = x => {
    let eliminarContacto = miListaDeContactos.splice(`${x}`, 1);
}
borrarContacto(1);

/* Crea una función para imprimir en consola los contactos presentes en la lista */

function verContactos() {
    for(let contactos of miListaDeContactos) {
        console.log(contactos);
    }
}
verContactos();