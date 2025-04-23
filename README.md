# SpotifyClone

Este proyecto fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 19.1.7.

## Descripción del proyecto

SpotifyClone es una aplicación web que replica algunas de las funcionalidades principales de Spotify, como la exploración de playlists, canciones y artistas. Este proyecto utiliza la [API Web de Spotify](https://developer.spotify.com/documentation/web-api/) para obtener datos en tiempo real y ofrece una experiencia de usuario moderna y responsiva.

### Características principales:
- **Estilos modernos con Tailwind CSS:** Toda la interfaz de usuario está diseñada utilizando Tailwind CSS, lo que permite un diseño limpio, responsivo y altamente personalizable.
- **Interceptores HTTP:** El proyecto utiliza interceptores para manejar la autenticación con tokens de acceso y gestionar errores de manera centralizada.
- **Integración con la API Web de Spotify:** Permite a los usuarios explorar playlists, canciones y artistas en tiempo real.
- **Inicio de sesión con Spotify:** Los usuarios deben iniciar sesión con su cuenta de Spotify para acceder a las funcionalidades de la aplicación.

---

## Comenzando

Para configurar y ejecutar el proyecto localmente, sigue estos pasos:

### 1. Instalar dependencias

Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

```bash
npm install
```

### 2. Iniciar el servidor de desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
ng serve --host 127.0.0.1
```

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega a `http://127.0.0.1:4200/`. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

---

## Uso de la API Web de Spotify

Este proyecto utiliza la [API Web de Spotify](https://developer.spotify.com/documentation/web-api/) para obtener información sobre canciones, álbumes, artistas y playlists. Para acceder a estas funcionalidades, es necesario que el usuario inicie sesión con su cuenta de Spotify.

### Inicio de sesión con Spotify

1. Al abrir la aplicación, se te pedirá que inicies sesión con tu cuenta de Spotify.
2. Asegúrate de usar el correo electrónico asociado a tu cuenta de Spotify para iniciar sesión.
3. Una vez autenticado, podrás explorar tus playlists, buscar canciones y disfrutar de las funcionalidades de la aplicación.

