// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema
document.addEventListener("DOMContentLoaded", function () {
    let nombres = [];
    let ingresarNombre = document.getElementById("amigo");
    let listaNombres = document.getElementById("listaAmigos");
    let resultado = document.getElementById("resultado");

    function actualizarLista() {
        listaNombres.innerHTML = "";
        for (let nombre of nombres) {
            let item = document.createElement("li");
            item.textContent = nombre;
            listaNombres.appendChild(item);
        }
    }

    window.agregarAmigo = function () {
        let nombre = ingresarNombre.value.trim();
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
        if (!nombres.includes(nombre)) {
            nombres.push(nombre);
            actualizarLista();
            ingresarNombre.value = "";
        }
    };

    window.sortearAmigo = function () {
        if (nombres.length > 0) {
            let indiceAleatorio = Math.floor(Math.random() * nombres.length);
            resultado.innerHTML = `<li>El elegido es: <strong>${nombres[indiceAleatorio]}</strong>!</li>`;
        } else {
            resultado.innerHTML = "<li>No hay nombres en la lista.</li>";
        }
    };
});
