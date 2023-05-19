/* Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres */

let miListaDeContactos = ['Bruce Wayne', 'Clark Kent', 'The Flash', 'Wonder Woman', 'Black Adam'];

//Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:

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

// Comprobamos que son un objeto
console.log(typeof miListaDeContactos[6]);

// Bonus: Añade una función que permita actualizar un contacto

const modifyContact = function (array,index,property,value) {
    return array[index][property] = value;
}

modifyContact(miListaDeContactos, 6, "dirección", "Shield Base");
console.log(miListaDeContactos);