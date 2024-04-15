# Registro de Animales en Investigación

Este es un sitio web desarrollado para el registro de animales en investigación, donde se pueden ingresar los datos de diferentes animales y mostrarlos en una tabla. Además, se puede reproducir el sonido característico de cada animal y ver detalles adicionales en una ventana modal.

## Uso

1. **Inicio**: Al cargar la página, se muestra una tabla vacía para los animales en investigación y un formulario para registrar nuevos animales.

2. **Formulario de Registro**: En el formulario, se deben ingresar los siguientes datos:
   - **Nombre del animal**: Seleccionar el nombre del animal de una lista desplegable.
   - **Años de edad estimados**: Seleccionar un rango de años de edad de una lista desplegable.
   - **Comentarios**: Ingresar cualquier comentario adicional sobre el animal.

3. **Agregar Animal**: Una vez completados todos los campos del formulario, hacer clic en el botón "Agregar" para registrar el animal en la tabla y reproducir su sonido característico.

4. **Detalle Modal**: Al hacer clic en la imagen de un animal en la tabla, se abre una ventana modal con detalles adicionales, como la imagen del animal y los comentarios ingresados.

## Funcionamiento

- La aplicación utiliza JavaScript para manejar la lógica del formulario y la interacción con la tabla de animales.
- Los datos de los animales, como las imágenes y los sonidos, se cargan desde un archivo JSON llamado `animales.json`.
- Se utiliza el paradigma de Programación Orientada a Objetos (POO) para definir las clases de los diferentes animales, cada una con sus atributos y métodos específicos.
- Al agregar un animal, se crea una nueva instancia de la clase correspondiente y se agrega a la tabla de animales en investigación.
- Se utiliza la manipulación del DOM para mostrar los datos en la interfaz de usuario y para interactuar con los elementos HTML, como la tabla y la ventana modal.

## Tecnologías Utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript (ES6)
- JSON

## Ejecución Local

Para ejecutar la aplicación localmente, solo necesitas abrir el archivo `index.html` en tu navegador web preferido.
