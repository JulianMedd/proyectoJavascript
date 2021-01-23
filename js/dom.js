function constructorCajaProducto(producto) {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const descripcion = document.createElement('p');
    const precio = document.createElement('p');
    const button = document.createElement('button');

    image.src = producto.image;
    title.textContent = producto.name;
    descripcion.textContent = producto.description;
    precio.textContent = producto.prieceByUser;
    button.textContent = 'OFRECER MAS';

    article.classList.add('producto');
    div.classList.add('img');
    precio.classList.add('producto__precio');
    button.classList.add('btn');
    button.id = 'btn'
    

    div.appendChild(image);
    article.appendChild(div);
    article.appendChild(title);
    article.appendChild(descripcion);
    article.appendChild(precio);
    article.appendChild(button);

    console.log(article)
    return article;

}

window.addEventListener('load', function() {

    const productosContenedor = document.getElementById('productosSubastado__contenedor');

    products.forEach(function(producto){
        if(producto.Stock){
            const cajaProducto = constructorCajaProducto(producto);
            productosContenedor.appendChild(cajaProducto);
        }
    });

    const ofrecerMas = document.getElementById('btn');

    ofrecerMas.addEventListener('click',() => {
        
        let oferta = prompt('INGRESE SU OFERTA');
        if(parseInt(oferta) > products.prieceByUser){
            this.precio.textContent = oferta;
        }else{
            alert('oferta INVALIDA');
        }
    })
})