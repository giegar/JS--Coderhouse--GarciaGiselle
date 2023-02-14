
class cliente {
    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

let arrayClientes = [];

class libro {
    constructor(titulo, genero, autor, precio) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.precio = precio;
    }
}

const libro1 = new libro("fuego y sangre", "Fantasía", "George R R Martin", 10500);
const libro2 = new libro("choque de reyes", "Fantasía", "George R R Martin", 10800);
const libro3 = new libro("la tia cosima", "Novelas", "Florencia Bonelli", 6000);
const libro4 = new libro("el hechizo del agua", "Novelas", "Florencia Bonelli", 8000);
const libro5 = new libro("las venas abiertas de america latina", "Historia", "Eduardo Galeano", 5000);
const libro6 = new libro("sobrenatural", "Autoayuda", "Joe Dispenza", 3000);
const libro7 = new libro("la revolucion de la glucosa", "Salud", "Jessie Inchausp", 3500);
const libro8 = new libro("el lobo queria festejar su cumpleaños", "Infantil", "Editorial Auzou", 2500);

const arrayBiblioteca = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8];

const arrayTitulos = [libro1.titulo, libro2.titulo, libro3.titulo, libro4.titulo, libro5.titulo, libro6.titulo, libro7.titulo, libro8.titulo]

const arrayPrecios = [libro1.precio, libro2.precio, libro3.precio, libro4.precio, libro5.precio, libro6.precio, libro7.precio, libro8.precio];

let arrayElegidos = [];
let arrayCarrito = [];

function menu() {
    alert("Bienvenidx a Librerias Cosmos");
    let opcion = parseInt(prompt("¿Que desea hacer? \n 1) Registrarse \n 2) Comprar libros \n 3) Consultar catalogo detallado"));
    return opcion;
}

function menuSecundario (){
    let opcion = parseInt(prompt("¿Como desea continuar? \n 1) Registrarse \n 2) Comprar libros \n 3) Consultar catalogo detallado"));
    return opcion;
}

// ----->> Registrar cliente <<------

function registroCliente() {
    let nombre = prompt("Ingrese su nombre completo");
    let dni = parseInt(prompt("Ingrese su DNI"));
    let cliente = new cliente(nombre, apellido, dni);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

// ----->> Comprar libros <<------

function compraLibro() {
    let compra = 0
    let totalCompra = 0;

    do {
        // se llena el carrito
        compra = prompt("¿Desea añadir un libro? Para finalizar escriba 'salir'. \n Los libros disponibles son: \n"+ libro1.titulo + "\n" + libro2.titulo + "\n" + libro3.titulo + "\n" + libro4.titulo + "\n" + libro5.titulo + "\n" + libro6.titulo + "\n" + libro7.titulo + "\n" + libro8.titulo);

        compra = compra.toLowerCase();

        let libro = arrayBiblioteca.find(libro => libro.titulo === compra);
        
        arrayElegidos.push(libro);
        arrayCarrito.push(libro.precio);

        totalCompra = totalCompra + libro.precio
        
        console.log("Libros elegidos: /n" + arrayElegidos + "/n Total de la compra:" + totalCompra) 
        
        alert("Tiene " + arrayCarrito.length + " libros en el carrito. El total es de " + totalCompra)
    }   
    while(compra != "salir");

}

// ----->> Consultar catalogo <<------
function catalogo() {
    arrayBiblioteca.forEach((libro) => {
        console.log(libro);
    })
}

let opcion = menu(); 
switch(opcion) {
    case 1: 
        registroCliente();
        menuSecundario()
        break;
    case 2: 
        compraLibro();
        alert("Su compra ha sido finalizada. Tiene " + arrayCarrito.length + " libros en el carrito. El total es de " + totalCompra);
        menuSecundario()
        break;
    case 3: 
        catalogo();
        menuSecundario()
        break;
    case 4:
        alert("Muchas gracias. Ya puede cerrar el navegador")
    default: 
        alert("Apreta F5 y volve a empezar")
        break;
}