const productos = [
    //Vestidos
    {
        id: "vestido-azul",
        titulo: "Vestido Azul",
        imagen: "./prod_img/vestido-azul.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 20
    },
    {
        id: "vestido-blanco",
        titulo: "Vestido Blanco",
        imagen: "./prod_img/vestido-blanco.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 21
    },
    {
        id: "vestido-naranja",
        titulo: "Vestido Naranja",
        imagen: "./prod_img/vestido-naranja.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 18
    },
    {
        id: "vestido-verde",
        titulo: "Vestido Verde",
        imagen: "./prod_img/vestido-verde.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 20
    },
    {
        id: "vestido-rojo",
        titulo: "Vestido Rojo",
        imagen: "./prod_img/vestido-rojo.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 25
    },
    {
        id: "vestido-rosa",
        titulo: "Vestido Rosa",
        imagen: "./prod_img/vestido-rosa.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 28
    },
    {
        id: "vestido-negro",
        titulo: "Vestido Negro",
        imagen: "./prod_img/vestido-negro.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 20
    },
    {
        id: "vestido-marron",
        titulo: "Vestido Marrón",
        imagen: "./prod_img/vestido-marron.jpg",
        categoria: {
            nombre: "Vestidos",
            id: "vestido"
        },
        precio: 32
    },
    //Sudaderas
    {
        id: "sudadera-gris",
        titulo: "Sudadera Moschino",
        imagen: "./prod_img/sudadera-gris.jpg",
        categoria: {
            nombre: "sudadera",
            id: "Sudaderas"
        },
        precio: 89
    },
    {
        id: "sudadera-verde",
        titulo: "Sudadera Verde",
        imagen: "./prod_img/sudadera-verde.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudadera"
        },
        precio: 30
    },
    {
        id: "sudadera-marron",
        titulo: "Sudadera Marrón",
        imagen: "./prod_img/sudadera-marron.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudadera"
        },
        precio: 25
    },
    {
        id: "sudadera-roja",
        titulo: "Sudadera Roja",
        imagen: "./prod_img/sudadera-roja.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudadera"
        },
        precio: 22
    },
    {
        id: "sudadera-rosa",
        titulo: "Sudadera Rosa",
        imagen: "./prod_img/sudadera-rosa.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudadera"
        },
        precio: 18
    },
    {
        id: "sudadera-amarilla",
        titulo: "Sudadera Amarilla",
        imagen: "./prod_img/sudadera-amarilla.jpg",
        categoria: {
            nombre: "Sudaderas",
            id: "sudadera"
        },
        precio: 20
    },
    //Abrigos
    {
        id: "abrigo-amarillo",
        titulo: "Abrigo Amarillo",
        imagen: "./prod_img/abrigo-amarillo.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 35
    },
    {
        id: "abrigo-morado",
        titulo: "Abrigo Morado",
        imagen: "./prod_img/abrigo-morado.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 30
    },
    {
        id: "abrigo-rojo",
        titulo: "Abrigo Rojo",
        imagen: "./prod_img/abrigo-rojo.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 40
    },
    {
        id: "abrigo-verde",
        titulo: "Abrigo Verde",
        imagen: "./prod_img/abrigo-verde.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigo"
        },
        precio: 32
    },
    //Chubasqueros
    {
        id: "chubasquero-amarillo",
        titulo: "Chubasquero Amarillo",
        imagen: "./prod_img/chubasquero-amarillo.jpg",
        categoria: {
            nombre: "Chubasqueros",
            id: "chubasquero"
        },
        precio: 15
    },
    {
        id: "chubasquero-azul",
        titulo: "Chubasquero Azul",
        imagen: "./prod_img/chubasquero-azul.jpg",
        categoria: {
            nombre: "Chubasqueros",
            id: "chubasquero"
        },
        precio: 22
    },
    {
        id: "chubasquero-gris",
        titulo: "Chubasquero Gris",
        imagen: "./prod_img/chubasquero-gris.jpg",
        categoria: {
            nombre: "Chubasqueros",
            id: "chubasquero"
        },
        precio: 35
    },
    {
        id: "chubasquero-verde",
        titulo: "Chubasquero Verde",
        imagen: "./prod_img/chubasquero-verde.jpg",
        categoria: {
            nombre: "Chubasqueros",
            id: "chubasquero"
        },
        precio: 30
    },
    //Jersey
    {
        id: "jersey-blanco",
        titulo: "Jersey Blanco",
        imagen: "./prod_img/jersey-blanco.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 20
    },
    {
        id: "jersey-rojo",
        titulo: "Jersey Rojo",
        imagen: "./prod_img/jersey-rojo.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 8
    },
    {
        id: "jersey-marino",
        titulo: "Jersey Marino",
        imagen: "./prod_img/jersey-marino.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 15
    },
    {
        id: "jersey-marron",
        titulo: "Jersey Marrón",
        imagen: "./prod_img/jersey-marron.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 12
    },
    {
        id: "jersey-rosa",
        titulo: "Jersey Rosa",
        imagen: "./prod_img/jersey-rosa.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 10
    },
    {
        id: "jersey-azul",
        titulo: "Jersey Azul",
        imagen: "./prod_img/jersey-azul.jpg",
        categoria: {
            nombre: "Jerseis",
            id: "jersey"
        },
        precio: 8
    },
    //Collares
    {
        id: "collar-rojo",
        titulo: "Collar Rojo",
        imagen: "./prod_img/collar-rojo.jpg",
        categoria: {
            nombre: "Collares",
            id: "collar"
        },
        precio: 12
    },
    {
        id: "collar-amarillo",
        titulo: "Collar Amarillo",
        imagen: "./prod_img/collar-amarillo.jpg",
        categoria: {
            nombre: "Collares",
            id: "collar"
        },
        precio: 10
    },
    {
        id: "collar-negro",
        titulo: "Collar Negro",
        imagen: "./prod_img/collar-negro.jpg",
        categoria: {
            nombre: "Collares",
            id: "collar"
        },
        precio: 8
    },
    {
        id: "collar-verde",
        titulo: "Collar Verde",
        imagen: "./prod_img/collar-verde.jpg",
        categoria: {
            nombre: "Collares",
            id: "collar"
        },
        precio: 8
    },
    //Arneses
    {
        id: "arnes-rojo",
        titulo: "Arnes Rojo",
        imagen: "./prod_img/arnes-rojo.jpg",
        categoria: {
            nombre: "Arneses",
            id: "arnes"
        },
        precio: 15
    },
    {
        id: "arnes-rosa",
        titulo: "Arnes Rosa",
        imagen: "./prod_img/arnes-rosa.jpg",
        categoria: {
            nombre: "Arneses",
            id: "arnes"
        },
        precio: 15
    },
    {
        id: "arnes-azul",
        titulo: "Arnes Azul",
        imagen: "./prod_img/arnes-azul.jpg",
        categoria: {
            nombre: "Arneses",
            id: "arnes"
        },
        precio: 15
    },
    //Lazos
    {
        id: "lazo-rojo",
        titulo: "Lazo rojo",
        imagen: "./prod_img/lazo-rojo.jpg",
        categoria: {
            nombre: "Lazos",
            id: "lazo"
        },
        precio: 15
    },
    {
        id: "lazo-amarillo",
        titulo: "Lazo Amarillo",
        imagen: "./prod_img/lazo-amarillo.jpg",
        categoria: {
            nombre: "Lazos",
            id: "lazo"
        },
        precio: 15
    },
    {
        id: "lazo-rosa",
        titulo: "Lazo Rosa",
        imagen: "./prod_img/lazo-rosa.jpg",
        categoria: {
            nombre: "Lazos",
            id: "lazo"
        },
        precio: 15
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".agregar");
const numero = document.querySelector("#numero");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(item => {
        
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <figure>
                <img src="${item.imagen}" alt="${item.titulo}">
            </figure>
            <div class="info-product">
                <h2>${item.titulo}</h2>
                <p class="price">${item.precio}€</p>
                <button class="agregar" id="${item.id}">Añadir al carrito</button>
            </div>    
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => 
            boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find( item =>
                item.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(item => 
                item.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
        
        
        
    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

const productosEnCarrito = [];

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(item => 
        item.id === idBoton);

    if(productosEnCarrito.some(item => item.id === idBoton)) {
        const index = productosEnCarrito.findIndex(item =>
            item.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
    }

}


/*
<div class="item">
    <figure>
        <img src="prod img/vestido-azul.jpg" alt="reloj">
    </figure>
    <div class="info-product">
        <h2>Vestido Azul</h2>
        <p class="price">20€</p>
        <button class="agregar">Añadir al carrito</button>
    </div>
</div>
*/