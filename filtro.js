// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


//Se cambia el nombre de las variables para mejorar la legibilidad del texto
const listaProductos = document.getElementById("lista-de-productos"); //Se cambia de name a getElementById
const textoIngresado = document.querySelector('input'); //Se elimina el punto antes de input, pues se trata de una etiqueta

const displayProductos=()=>{
for (let i = 0; i < productos.length; i++) {
  var documentReference2 = document.createElement("div")
  documentReference2.classList.add("producto")

  const tituloProductos = document.createElement("p")
  tituloProductos.classList.add("titulo")
  tituloProductos.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  documentReference2.appendChild(tituloProductos)
  documentReference2.appendChild(imagen)

  listaProductos.appendChild(documentReference2)
}
}

displayProductos(productos)
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = textoIngresado.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var documentReference3 = document.createElement("div")
    documentReference3.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    documentReference3.appendChild(ti)
    documentReference3.appendChild(imagen)
  
    listaProductos.appendChild(documentReference3)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}   