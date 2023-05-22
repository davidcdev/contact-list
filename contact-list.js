/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres */

let miListaDeContactos = ['Bruce Wayne', 'Clark Kent', 'The Flash', 'Wonder Woman', 'Black Adam'];

/* Crea una función para añadir un nuevo contacto a una lista */

<<<<<<< Updated upstream
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

/* let nuevoContacto = {
    id: "id",
    nombres: "nombres",
    apellidos: "apellidos",
    teléfono: "teléfono",
    ubicaciones: {
        ciudad: "ciudad",
        dirección: "dirección"
    }
} */

// Intento 1: lo malo es que toca pasar cada propiedad con su valor al llamar la función, sería más práctico usar prompt, pero no he logrado que funcione con prompt.
let añadirContacto = (nuevoContacto) => {
    let add = miListaDeContactos.push(nuevoContacto);
=======
const addNewContact = (id,nombres,apellidos,telefono,ciudad,direccion) => {
    let newContact = {};

    newContact.id = id;
    newContact.nombres = nombres;
    newContact.apellidos = apellidos;
    newContact.telefono = telefono;
    newContact.ubicaciones = {};
    newContact.ubicaciones.ciudad = ciudad;
    newContact.ubicaciones.direccion = direccion;

    miListaDeContactos.push(newContact);
>>>>>>> Stashed changes
}

addNewContact('Spiderman', 'Peter', 'Parker', 1234567890, 'New York', 'Queens');
addNewContact('SpongeBob', 'Bob Esponja', 'Pantalones Cuadrados', 0987654321, 'Fondo de Bikini', 'La piña en el fondo del mar');
addNewContact('Black Widow', 'Natasha', 'Romanov', 31245346756, 'New York', 'Cannot Locate');

/* Crea una función para borrar un contacto existente de la lista */

 let borrarContacto = x => {
    let eliminarContacto = miListaDeContactos.splice(`${x}`, 1);
}
borrarContacto(4); 

/* console.log(miListaDeContactos); */
/* Crea una función para imprimir en consola los contactos presentes en la lista */

function verContactos() {
    for(let contactos of miListaDeContactos) {
        console.log(contactos);
    }
}
verContactos(); 

<<<<<<< Updated upstream
// Comprobamos que son un objeto
console.log(typeof miListaDeContactos[6]);
=======

// Bonus: Añade una función que permita actualizar un contacto

const modifyContact = function (array,index,property,value) {
    return array[index][property] = value;
}

modifyContact(miListaDeContactos, 6, this.direccion, "Shield Base"); 
>>>>>>> Stashed changes
