const catDeProductos = document.getElementById("catalogoDeProductos")


/*<article class="producto">
            <img src="../img/vino2.jpg" alt="Vino 2">
            <h2>Vino Blanco Seco</h2>
            <p>Descripción del vino blanco seco. </p>
            <p class="precio">$18.00</p>
            <button>Añadir al carrito</button>
</article>*/

function mostrarArticulos(listaJSON){
    catDeProductos.innerHTML = ""
    for (let i = 0; i < listaJSON.length; i++) {
        const lista = listaJSON[i];
        const articulo = document.createElement('article');
        articulo.className = "producto";
    
        const imagen = document.createElement('img');
        imagen.setAttribute('src', `../img/${lista.foto}`);
        imagen.innerHTML = lista.foto;
        const nombre = document.createElement('h2');
        nombre.innerHTML = lista.nombre;
        const descripcion = document.createElement('p');
        descripcion.innerHTML = lista.descripcion;
        const precio = document.createElement('p');
        precio.className = "precio";
        precio.innerHTML = `$ ${lista.precio}`;
        const boton = document.createElement('button');
        boton.innerHTML = "Añadir al carrito";
    
        
        articulo.appendChild(imagen);
        articulo.appendChild(nombre);
        articulo.appendChild(descripcion);
        articulo.appendChild(precio);
        articulo.appendChild(boton);
    
        catDeProductos.appendChild(articulo)
    }
}
function filtroTipo(tipoDeVino) {
    const filtrados = listaDeArticulosJSON.filter( art => art.tipo.includes(tipoDeVino));
    mostrarArticulos(filtrados)
}
mostrarArticulos(listaDeArticulosJSON)
