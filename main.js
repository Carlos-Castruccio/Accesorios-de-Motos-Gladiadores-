//==================================
//  Productos de Accesorios de Motos
//  "Gladiadores"
//===================================
const PRODUCTOS = [
    {
        id: 1,
        nombre: "Ninetcome",
        precio: 195000,
        imagen: "./imagen/campera-6.jpg",
        stock: 10,
    },
    {
        id: 2,
        nombre: "Always A Head",
        precio: 200000,
        imagen: "./imagen/campera-7.jpg",
        stock: 25,
    },
    {
        id: 3,
        nombre: "Simpson",
        precio: 250000,
        imagen: "./imagen/casco-31.jpg",
        stock: 12,
    },
    {
        id: 4,
        nombre: "Aral",
        precio: 220000,
        imagen: "./imagen/casco-33.jpg",
        stock: 18,
    },
    {
        id: 5,
        nombre: "Royal Enfield",
        precio: 260000,
        imagen: "./imagen/casco-34.jpg",
        stock: 20,
    },
    {
        id: 6,
        nombre: "Antiparra Fox Racing Air",
        precio: 110000,
        imagen: "./imagen/antiparra-1.avif",
        stock: 15,
    },
    {
        id: 8,
        nombre: "Antiparra Fox Racing Main",
        precio: 115000,
        imagen: "./imagen/antiparra-2.avif",
        stock: 17,
    },
    {
        id: 9,
        nombre: "Antiparra X",
        precio: 90000,
        imagen: "./imagen/antiparra-3.png",
        stock: 22,
    },
    {
        id: 7,
        nombre: "Guantes Pro Biker",
        precio: 80000,
        imagen: "./imagen/guantes-10.jpg",
        stock: 11,
    },
    {
        id: 10,
        nombre: "Guantes Fox",
        precio: 95000,
        imagen: "./imagen/guantes-2.avif",
        stock: 15,
    },
    {
        id: 11,
        nombre: "Botas Fox RangerM",
        precio: 125000,
        imagen: "./imagen/botas-1.avif",
        stock: 15,
    },
    {
        id: 12,
        nombre: "Botas Fox RangerN",
        precio: 130000,
        imagen: "./imagen/botas-2.avif",
        stock: 17,
    },
];


const carritoBoton = document.getElementById('boton-carrito');
const carritoDinamico = document.getElementById('carrito');
const cerrarCarrito = document.getElementById('cerrar-carrito');
const contenedorProductos = document.getElementById('contenedor-productos');
const carritoDinamicoInterno = document.getElementById('carrito-dinamico-interno');
const total = document.getElementById('total');
const finalizarCompra = document.getElementById('finalizar-compra');
const contador = document.getElementById('contador-carrito');

let carrito= [];

carritoBoton.addEventListener("click", ()=>{
    carritoDinamico.classList.toggle('mostrar-carrito');
})

cerrarCarrito.addEventListener("click", ()=>{
    carritoDinamico.classList.remove('mostrar-carrito')
})

const calculadoraTotal = ()=> {
    let total = carrito.reduce((acc, el)=>{
        return (acc += el.precio)
    }, 0)
    return total;
}
const agregarACarrito= ()=> {
    carritoDinamicoInterno.innerHTML='';
    carrito.forEach((producto) => {
        carritoDinamicoInterno.innerHTML += `<div>
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        </div>`
    })
    let calculoTotal= calculadoraTotal()
    total.innerHTML = `<p class="total"> Total = ${calculoTotal}</p>`
    actualizarContadorCarrito();
}

const agregarEventoDeBotones= ()=>{
    const botones = document.getElementsByClassName('boton-agregar');
    const arrayBoton = Array.from(botones);

    arrayBoton.forEach(boton => {
        boton.addEventListener('click', (event)=>{
            let id = event.target.parentElement.id
            let producto = PRODUCTOS.find(el=>el.id == id)
            console.log(producto)
            carrito.push({...producto})
            agregarACarrito()
        })
    })
}
const renderizarProductos= ()=>{
    contenedorProductos.innerHTML='';
    PRODUCTOS.forEach((producto)=>{
        contenedorProductos.innerHTML += 
        `<section class="imagen-productos" id="${producto.id}">
        <img  src="${producto.imagen}" alt="${producto.nombre}"/>
        <h2>${producto.nombre}</h2>
        <span class="precio">$${producto.precio}</span>
        <button class="boton-agregar">Agregar al carrito</button>
        </section>
        `;
    })
    agregarEventoDeBotones()
}

finalizarCompra.addEventListener('click', ()=>{
    carrito=[] 
    agregarACarrito();
    actualizarContadorCarrito();
})

renderizarProductos();

function actualizarContadorCarrito() {
    contador.textContent = carrito.length;
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        carritoDinamico.classList.remove("mostrar-carrito");
    }
});