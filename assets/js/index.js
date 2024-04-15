import { Animal, Leon, Lobo, Oso, Serpiente, Aguila } from './clases.js';

$(document).ready(function () {
    // Función para cargar los datos de los animales desde el archivo JSON
    async function cargarDatosAnimales() {
        try {
            const response = await fetch('animales.json');
            const data = await response.json();

            // Crear instancias de las clases de animales y agregarlas a la tabla
            data.animales.forEach(animal => {
                let instancia;
                switch (animal.name) {
                    case 'Leon':
                        instancia = new Leon(animal.name, animal.imagen, animal.sonido);
                        break;
                    case 'Lobo':
                        instancia = new Lobo(animal.name, animal.imagen, animal.sonido);
                        break;
                    case 'Oso':
                        instancia = new Oso(animal.name, animal.imagen, animal.sonido);
                        break;
                    case 'Serpiente':
                        instancia = new Serpiente(animal.name, animal.imagen, animal.sonido);
                        break;
                    case 'Aguila':
                        instancia = new Aguila(animal.name, animal.imagen, animal.sonido);
                        break;
                    default:
                        console.error('Animal no reconocido:', animal.name);
                }
                agregarAnimalATabla(instancia);
            });
        } catch (error) {
            console.error('Error al cargar los datos de los animales:', error);
        }
    }

    // Función para agregar un animal a la tabla de animales en investigación
    function agregarAnimalATabla(animal) {
        const tabla = document.getElementById('Animales');
        const fila = document.createElement('div');
        fila.classList.add('col-6', 'col-md-4', 'col-lg-3', 'mb-4');

        const card = document.createElement('div');
        card.classList.add('card', 'bg-dark', 'text-white', 'shadow');
        card.style.cursor = 'pointer';
        card.onclick = () => mostrarDetalleModal(animal);

        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = `assets/imgs/${animal.imagen}`;
        img.alt = animal.name;

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');

        const nombre = document.createElement('h5');
        nombre.classList.add('card-title');
        nombre.textContent = animal.name;

        cardBody.appendChild(nombre);
        card.appendChild(img);
        card.appendChild(cardBody);
        fila.appendChild(card);
        tabla.appendChild(fila);
    }

    // Función para mostrar el detalle de un animal en un modal
    function mostrarDetalleModal(animal) {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
      <h5 class="modal-title">${animal.name}</h5>
      <img src="assets/imgs/${animal.imagen}" class="img-fluid my-3" alt="${animal.name}">
      <p class="text-muted">${animal.comentarios}</p>
    `;

        $('#exampleModal').modal('show');
    }

    // Función para reproducir el sonido del animal
    function reproducirSonido(animal) {
        const audio = document.getElementById('player');
        audio.src = `assets/sounds/${animal.sonido}`;
        audio.play();
    }

    // Evento click para el botón de registrar
    $('#btnRegistrar').click(function () {
        const nombre = $('#animal').val();
        const edad = $('#edad').val();
        const comentarios = $('#comentarios').val();

        if (nombre !== null && nombre !== '' && edad !== null && edad !== '' && comentarios !== null && comentarios !== '') {
            const animal = new Animal(nombre, edad, comentarios);
            agregarAnimalATabla(animal);
            reproducirSonido(animal);
            limpiarFormulario();
        } else {
            alert('Debe completar todos los campos antes de agregar el animal.');
        }
    });

    // Función para limpiar el formulario después de agregar un animal
    function limpiarFormulario() {
        $('#animal').val('');
        $('#edad').val('');
        $('#comentarios').val('');
        $('#preview').html('');
    }

    // Cargar los datos de los animales al cargar la página
    cargarDatosAnimales();
});