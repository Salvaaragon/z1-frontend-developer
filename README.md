# Prueba ténica para Frontend Developer de Z1

## Caso práctico: Analizador de documentos de identidad

Uno de nuestros clientes del sector fintech nos ha proporcionado una API que es capaz de analizar fotos de documentos de identidad y devolver si el documento es válido o no.
Nuestro equipo de producto ha creado un prototipo en Invision que el cliente ya ha validado y ahora toca implementarlo en web.

El flujo debería ser el siguiente:

- Pulsando "take picture" se abre la cámara.
- La cámara hará fotos automáticamente en segundo plano y las enviará al backend.
- En la interfaz mostraremos en rojo si el backend devuelve que no es válida.
- En la interfaz mostraremos en verde si el backend devuelve que es válida y automáticamente pasaremos al usuario a la pantalla principal.
- En cualquier momento que el usuario vaya a la pantalla principal, ya sea porque pulse cancelar o porque se toma la foto correctamente, debemos mostrar la última foto que se haya tomado y el estado que haya devuelto el backend sobre ella.

## Aplicación

### Prerequisitos

- [Docker](https://docs.docker.com/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)

## Ejecutar la aplicación

Este proyecto está configurado haciendo uso de docker y docker-compose. Para ejecutarlo es necesario haber instalado previamente estas herramientas en tu dispositivo.

### Ejecución inicial

Usa `docker-compose up -d --build` para crear el contenedor docker e instalar en él todas las dependencias de la app. Posteriormente, accede a la web en [http://localhost:3000](http://localhost:3000).

Todos los cambios que realices en el código se actualizaran de forma automática en el navegador. Además, en la consola puedes ver cualquier error lint (esto solo ocurre si ejecutas el docker sin el flag `-d`, para que no se produzca en segundo plano).

### Ejecución

Si no se han modificado las dependencias del proyecto, basta con ejecutar `docker-compose up -d` para iniciar la aplicación.

### Finalizar la ejecución

Utiliza `docker-compose stop` para parar el contenedor docker y la ejecución de la aplicación

## Dependencias

- [React](https://es.reactjs.org/): Librería de JavaScript para construir interfaces de usuario
- [Styled components](https://styled-components.com/): Permite modificar los estilos de cada componente de manera independiente
- [Babel](https://babeljs.io/): Compilador JavaScript
- [TypeScript](https://www.typescriptlang.org/)
- [React-i18next](https://react.i18next.com/): Plugin de internacionalización para react basado en i18next
