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

- [Yarn](https://yarnpkg.com/)

## Ejecutar la aplicación

Instala yarn en tu dispositivo para ejecutar la aplicación directamente desde tu dispositivo local.

### Ejecución inicial

Usa `yarn install` para instalar todas las dependencias del proyecto. Una vez hecho, ejecuta `yarn start` para iniciar la aplicación; que se lanzará en [http://localhost:3000](http://localhost:3000).

Todos los cambios que realices en el código se actualizaran de forma automática en el navegador. Además, en la consola puedes ver cualquier error lint.

### Ejecución

Si no se han modificado las dependencias del proyecto, basta con ejecutar `yarn start` para iniciar la aplicación.

## Tests

Se han desarrollado varios casos de prueba para validar el correcto funcionamiento de los componentes desarrollados. Para ejecutarlos, basta con lanzar el comando `yarn test`.

#### Estructura de carpetas

    .
    ├── public                # Contiene los elementos que se van a mostrar en el navegador
    │   └── locales           # Listado de traducciones
    ├── src                   # Componentes de la aplicación
    │   ├── app               # Componente App
    │   ├── assets            # Imágenes, iconos, ...
    │   ├── components        # Listado de componentes creados
    │   ├── screens           # Vistas/pantallas de la aplicación
    │   ├── services          # Listado de servicios utilizados (api, i18n, ...)
    │   ├── store             # Configuración de la store redux
    │   │   ├── actions       # Describen los eventos que se van a ejecutar (tipo y que devuelve)
    │   │   ├── constants     # Variables constantes de la store
    │   │   ├── reducers      # Definen los cambios de estados producidos por las acciones
    │   │   └── sagas         # Funciones que manejan los side effects producidos por las acciones
    │   └── test              # Listado de tests
    ├── .babelrc              # Configuración de babel
    ├── .eslintignore
    ├── .eslintrc.js          # Configuración de eslint
    ├── .gitignore
    ├── .prettierrc.js        # Configuración de prettier
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tsconfig.paths.json   # Listado de alias
    └── yarn.lock

#### Alias

Se han configurado, mediante Babel, diferentes alias para simplificar las importaciones de elementos de la aplicación. Estos se encuentran en el archivo `.babelrc`.

#### Validación y formato de código ESLINT + Prettier

Se ha configurado el proyecto para que se detecten erróres de sintáxis mediante ESLINT, a fin de tener un código más mantenible y que siga los estándares propios del clean code.

Además, este proyecto hace uso de la herramienta Prettier; que, conectada al IDE (en mi caso, Visual Studio Code), te permite el formateo automático del código mediante las siguientes propiedades:

```
  semi: true => Incluye al final de cada elemento ';'
  trailingComma: 'all' => Incluye al final de los objetos ',' siempre que sea posible
  singleQuote: true => Uso de comillas simples
  tabWidth: 2 => Identación mediante dos espacios
```

## Dependencias

- [React](https://es.reactjs.org/): Librería de JavaScript para construir interfaces de usuario
- [Styled components](https://styled-components.com/): Permite modificar los estilos de cada componente de manera independiente
- [Babel](https://babeljs.io/): Compilador JavaScript
- [TypeScript](https://www.typescriptlang.org/)
- [React-i18next](https://react.i18next.com/): Plugin de internacionalización para react basado en i18next
- [Fontawesome](https://fontawesome.com/): Librería de iconos para nuestra aplicación
- [React router](https://reactrouter.com/): Creación de rutas en nuestra aplicación
- [Axios](https://github.com/axios/axios): Librería para ejecución de peticiones HTTP desde el navegador
- [Redux](https://es.redux.js.org/): Contenedor de estados
- [Redux-saga](https://redux-saga.js.org/): Librería para manejo de side effects
