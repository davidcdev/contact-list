/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres */

let miListaDeContactos = ['Bruce Wayne', 'Clark Kent', 'The Flash', 'Wonder Woman', 'Black Adam'];

/* Crea una función para añadir un nuevo contacto a una lista */

let añadirContacto = (nombre) => {
    let nuevoContacto = miListaDeContactos.push(`${nombre}`);
}
añadirContacto('Peter Parker');

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