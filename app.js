// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value
    
    if (nombre !== '') {
        amigos.push(nombre);
        
        const lista = document.getElementById('listaAmigos');
        const elemento = document.createElement('li');
        elemento.textContent = capitalizarPalabra(nombre);
        lista.appendChild(elemento);
        
        input.value = '';
    } else {
        alert('Por favor, escribe un nombre válido');
    }
}

// Función para mostrar un amigo aleatorio
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo primero');
        return;
    }

    // Elegir un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoElegido = capitalizarPalabra(amigos[indiceAleatorio]);
    
    // Mostrar solo ese amigo

    resultado.innerHTML = '';
    const elemento = document.createElement('li');
    elemento.textContent = `Tu amigo secreto es: ${amigoElegido}`;
    resultado.appendChild(elemento);
    amigos = [];
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

function capitalizarPalabra(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }

/*function amigoSorteado(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}*/