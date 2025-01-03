# React + Redux + Vite + AWS

Este proyecto es el modulo 3 de Academy Oxgigen https://oxygenacademy.es/ 

En este modulo se nos paso un documento de peticiones a realizar 

-- -- -- -- -- -- 
Diseñar la app en Figma antes de escribir el código.

Importa componentes de la biblioteca que vas a utilizar 
Decide el layout, colores, tipografías etc… en Figma
El diseño de tu aplicación debe ser lo más profesional posible. 

Crear una aplicación en React con las siguientes características:
Un dashboard para descargar y gestionar imágenes
Utiliza Vite para crear tu proyecto
OPCIONALMENTE  puedes importar Componentes de de MUI para estilos / layout (docs)
Tiene una página de ‘Search’, donde el usuario puede buscar imágenes en Unsplash utilizando su API (aquí). Hay que utilizar la ruta GET /search/photos en unplash
Pueden seleccionar ‘Add to my photos’ en cualquier de las imágenes e importar la imagen a su colección personal. 
Guardar las imágenes favoritas en localStorage para que se queden guardadas para el usuario.
Tiene otra página ‘My photos’ donde puede ver las imágenes que ha importado y sus datos (width, height, likes, date added).
El usuario podrá filtrar sus fotos con un campo de ‘Search descriptions’, y ver sólo las imágenes cuyas descripciones contienen lo que ha buscado el usuario.
Podrá borrar imágenes de su colección.
Podrá modificar la descripción de cualquier imagen de la colección.
Podrá ordenar las imágenes por fecha de importar, width, height y likes. 
Habrá una opción de ‘Download’ que descarga la imagen de su URL ‘full’ (Este parámetro lo da Unplash dentro de la API). Se puede usar file-saver como librería

Si se ACABAN  todos los puntos ANTERIORES y sobre tiempo, se puede implementar: 

Implementar un sistema de ‘Tags’ (por ejemplo: paisaje, retrato, animal, edificio) con el componente Chip (O creando uno en React). Mostrar todas las etiquetas al lado del buscador en la página de ‘My photos’ y dejar al usuario filtrar etiquetas también. 

Paginación: poner paginación en las páginas ‘Search’ y ‘My photos’ y utilizar el componente Pagination

Otros requisitos

Instalar Vite
Crear 2 slices, searchSlice y favouritesSlice
searchSlice tendrá un thunk, para hacer la petición a la API de unsplash, favouritesSlice será totalmente síncrono. 
Cuando se hace una búsqueda sin input (‘’) devolver una selección de fotos aleatorias, Unsplash tiene esta funcionalidad. 
Editar la descripción de las fotos favoritas en un modal, crear el modal fuera del bucle de fotos (photos.map())
No guardar todos los datos de unsplash, selecciona solo los datos necesarios
Solo REUTILIZAR un componente  SI TIENE SENTIDO  y no crea más problemas (e.g. el motor de búsqueda de las dos páginas) 
Usar el Layout de react-router-dom

-- -- -- -- -- 

El figma entregado como base antes del diseño fue https://www.figma.com/design/dzmTrnwWqEfP2QCoEm658E/mod3react?node-id=7-2&m=dev&t=vgf7RsX4d0emjX4x-1 

En este figma solo realice un pequeño esbozo de colores que tenia en la cabeza para el diseño y los componentes. Sin montar un app para ejecutar la demo para no perder tiempo en los scroll de componentes y los links entre las paginas del diseño ya que no es el objetivo principal. 

Una vez entregado y visto bueno por parte del diseño preliminar , se comenzo a crear el proyecto cumpliendo los requerimientos del mismo.

1.- Uso de vite https://vite.dev/ para la creación del proyecto
2.- Uso de librerias externas como https://mui.com/ y Toastify https://apvarun.github.io/toastify-js/
3.- Uso de API https://unsplash.com/es para optencion de imagenes 
4.- Creacion de APP usando React con Redux

Como se puede ver en el codigo se cumplen todas las peticiones del proyecto. La parte opcional de Tags solo quedo implementada de forma visual y funcional faltando la creacion de Thunks especifico ya que la ruta de unsplash cambia para la devolucion de colecciones que implementan los Tags . 

CONCLUSION: Este es un ejemplo de una aplicacion basica de React usando patron Redux. 
