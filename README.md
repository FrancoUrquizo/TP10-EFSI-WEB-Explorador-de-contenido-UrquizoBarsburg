# Explorador de Países

Aplicación web desarrollada con React que permite explorar países de todo el mundo, buscar información, consultar sus detalles y guardar países como favoritos.

## Integrantes

- Franco Urquizo
- Matías Brasburg

## API utilizada

El proyecto utiliza la [REST Countries API v5](https://restcountries.com/docs/countries) para obtener la información de los países.

La API requiere una clave de acceso configurada en un archivo `.env`:

```env
VITE_RC_API_KEY=tu_api_key
```

El archivo `.env` no se incluye en el repositorio para evitar publicar la clave. El archivo `.env.example` sirve como referencia para conocer el nombre de la variable requerida.

## Descripción de la aplicación

Explorador de Países muestra un listado de países con su bandera, nombre, capital y región. Desde la pantalla principal se puede buscar un país, marcarlo como favorito y acceder a una página con información más detallada, como su población, idiomas y monedas.

Los favoritos se guardan localmente en el navegador. Los datos descargados desde la API también se almacenan temporalmente para evitar solicitudes repetidas y permitir que los países continúen disponibles al recargar la página.

## Organización de los componentes

El código se dividió según la responsabilidad de cada parte:

- `pages`: contiene las pantallas principales de inicio, favoritos y detalle de un país.
- `components/layout`: incluye la estructura general, como el encabezado, la navegación, los títulos y las secciones.
- `components/ui`: contiene elementos visuales reutilizables, como tarjetas, banderas, buscador, información y botones.
- `components/ui/states`: representa los estados de carga, error y listas vacías.
- `hooks`: contiene la lógica para cargar países, obtener sus detalles y administrar los favoritos.
- `services`: se encarga de comunicarse con la API y transformar sus respuestas al formato usado por los componentes.

Esta separación permite mantener la lógica fuera de los componentes visuales y reutilizar las mismas piezas en distintas páginas.

## Funcionalidades implementadas

- Listado de países obtenido desde una API externa.
- Paginación automática para obtener todos los países disponibles.
- Búsqueda de países por nombre.
- Visualización de bandera, capital y región en cada tarjeta.
- Página de detalle con población, idiomas y monedas.
- Posibilidad de agregar y quitar países de favoritos.
- Sección exclusiva para los países favoritos.
- Persistencia de favoritos mediante `localStorage`.
- Caché local para reducir solicitudes y conservar los países al recargar.
- Navegación entre páginas con React Router.
- Estados visuales de carga, error y resultados vacíos.
- Diseño adaptable mediante CSS Modules.

## Diferencias entre React y React Native

Durante el desarrollo encontramos las siguientes diferencias principales:

- En React para web se utilizan elementos HTML como `div`, `p`, `button` e `img`. En React Native se reemplazan por componentes como `View`, `Text`, `Pressable` e `Image`.
- En la versión web los estilos se implementan con CSS y CSS Modules. En React Native se definen mediante objetos de JavaScript, normalmente con `StyleSheet`.
- React utiliza React Router y las rutas del navegador. En React Native la navegación suele realizarse con una biblioteca como React Navigation, utilizando pantallas, pilas o pestañas.
- En la web usamos `localStorage` para guardar favoritos y datos. En React Native se necesita una alternativa del entorno móvil, como AsyncStorage.
- En React web se utiliza principalmente `onClick`, mientras que React Native utiliza eventos como `onPress`.
- React Native no trabaja directamente con el DOM ni con las APIs específicas del navegador.
- Aunque cambia la interfaz, gran parte de la lógica puede reutilizarse en ambas versiones, especialmente los hooks, las solicitudes a la API, el manejo de estado y la transformación de datos.

## Instalación y ejecución

1. Instalar las dependencias:

```bash
npm install
```

2. Crear el archivo `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

3. Colocar la API key en el archivo `.env`.

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

## Tecnologías utilizadas

- React
- Vite
- React Router
- Axios
- CSS Modules
- REST Countries API
