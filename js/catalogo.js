// Catálogo de productos de EcoMarket
const productos = [
  { id: 1, nombre: "Botella de bambú", precio: 12.5, descripcion: "Botella reutilizable de bambú con tapa hermética. Libre de BPA, evita el uso de botellas plásticas desechables y el bambú es un material renovable de rápido crecimiento.", imagen: "img/botella-bambu.webp" },
  { id: 2, nombre: "Bolsa de tela orgánica", precio: 6.0, descripcion: "Bolsa de algodón orgánico para tus compras. Cultivado sin pesticidas químicos, reemplaza cientos de bolsas plásticas y es lavable y reutilizable por años.", imagen: "img/bolsa-tela.webp" },
  { id: 3, nombre: "Cepillo de dientes biodegradable", precio: 3.5, descripcion: "Cepillo de bambú con cerdas biodegradables. El mango es compostable, evita que toneladas de plástico terminen en el mar y viene en empaque de papel reciclado.", imagen: "img/cepillo-bambu.webp" },
  { id: 4, nombre: "Jabón artesanal", precio: 4.0, descripcion: "Jabón natural sin químicos agresivos. Hecho con aceites vegetales, sin parabenos ni sulfatos, biodegradable y sin empaque plástico.", imagen: "img/jabon-artesanal.webp" },
  { id: 5, nombre: "Set de cubiertos reutilizables", precio: 9.0, descripcion: "Tenedor, cuchara y cuchillo en estuche de tela. Sustituye los cubiertos plásticos de un solo uso, su material es duradero y reciclable, y el estuche es de tela reutilizable.", imagen: "img/cubiertos.webp" },
  { id: 6, nombre: "Pajillas de acero", precio: 5.5, descripcion: "Pack de 4 pajillas de acero con cepillo limpiador. Acero inoxidable reciclable, duran toda la vida y eliminan las pajillas plásticas que contaminan los océanos.", imagen: "img/pajillas-acero.webp" }
];

//para mi commit 2
const contenedor = document.getElementById("catalogo-contenedor");

function crearCard(producto) {
  return `
    <div class="col-12 col-sm-6 col-lg-4">
      <div class="card h-100 shadow-sm">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.descripcion}</p>
          <p class="fw-bold mt-auto">$${producto.precio.toFixed(2)}</p>
        </div>
      </div>
    </div>
  `;
}

function renderizarCatalogo(lista) {
  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="text-center">No se encontraron productos.</p>`;
    return;
  }
  contenedor.innerHTML = lista.map(crearCard).join("");
}

if (contenedor) {
  renderizarCatalogo(productos);
}

// Búsqueda en tiempo real
const buscador = document.getElementById("buscador");

function filtrarProductos() {
  const texto = buscador.value.trim().toLowerCase();
  const filtrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.descripcion.toLowerCase().includes(texto)
  );
  renderizarCatalogo(filtrados);
}

if (buscador && contenedor) {
  buscador.addEventListener("input", filtrarProductos);
}