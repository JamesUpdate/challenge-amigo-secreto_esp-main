// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaDeAmigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor ingresa un nombre válido.');
        return;
    }

    // Validación: nombre vacío
    if (nombre === '') {
        alert('Por favor ingresa un nombre.');
        return;
    }

    // Validación: solo letras, espacios y caracteres con tilde o ñ
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if (!regex.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios (sin números ni símbolos).');
        return;
    }

        // Validar que tenga al menos 2 letras reales (sin contar espacios)
    const letrasSinEspacios = nombre.replace(/\s/g, '');
    if (letrasSinEspacios.length < 2) {
        alert('El nombre debe tener al menos 2 letras.');
        return;
    }

        // Validar que no esté formado por letras repetidas (ej: aaa, bbbb)
    if (/^([a-zA-ZñÑáéíóúÁÉÍÓÚ])\1+$/.test(letrasSinEspacios)) {
        alert('Ese no parece un nombre real (letras repetidas).');
        return;
    }

    // Validar que no sea una secuencia inválida
    const secuenciasInvalidas = ["asdf", "qwer", "zxcv", "abcd", "test", "prueba"];
    const nombreLimpio = letrasSinEspacios.toLowerCase();
    if (secuenciasInvalidas.some(seq => nombreLimpio.includes(seq))) {
        alert('Ese nombre no parece válido.');
        return;
    }

    // Validar que no esté repetido
    if (listaDeAmigos.includes(nombre)) {
        alert('Este nombre ya fue añadido.');
        return;
    }


    // Agregar a la lista interna
    listaDeAmigos.push(nombre);

    // Agregar al HTML
    const listaHTML = document.getElementById('listaAmigos');
    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = nombre;
    listaHTML.appendChild(nuevoElemento);

    // Limpiar input
    input.value = '';
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder sortear.');
        return;
    }
    //Para sortear amigos secretos para mas personas
    // const resultadoHTML = document.getElementById('resultado');
    // resultadoHTML.innerHTML = ''; // Limpiar resultados anteriores

    // // Algoritmo de sorteo: emparejar de forma aleatoria sin repetirse
    // const amigos = [...listaDeAmigos];
    // const sorteados = [...listaDeAmigos];

    // // Mezclar la lista de sorteados
    // sorteados.sort(() => Math.random() - 0.5);

    // // Validar que nadie se sortee a sí mismo (muy básico)
    // for (let i = 0; i < amigos.length; i++) {
    //     if (amigos[i] === sorteados[i]) {
    //         // Reintentar sorteo si hay algún repetido
    //         return sortearAmigo();
    //     }
    // }

    // // Mostrar resultados
    // for (let i = 0; i < amigos.length; i++) {
    //     const li = document.createElement('li');
    //     li.textContent = `${amigos[i]} → ${sorteados[i]}`;
    //     resultadoHTML.appendChild(li);
    // }
        // Elegir un nombre aleatorio
    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indice];

    // Mostrar el resultado
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
    resultadoHTML.appendChild(li);
}