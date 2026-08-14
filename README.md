# GameZone

GameZone es una pequeña interfaz desarrollada con **React + Vite + TypeScript** como trabajo práctico de Desarrollo Web con React.

El proyecto aplica conceptos de:

- JSX/TSX
- Componentes funcionales
- Props
- Composición de componentes
- CSS Modules
- Organización de componentes por carpetas

La temática elegida para la aplicación es **videojuegos**.

## Requisitos

Antes de iniciar el proyecto, es necesario tener instalado:

- Node.js
- npm

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar a la carpeta del proyecto:

```bash
cd nombre-del-proyecto
```

Instalar las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador la dirección que muestra Vite, normalmente:

```text
http://localhost:5173
```

## Tecnologías utilizadas

- React
- Vite
- TypeScript
- CSS Modules

## Estructura principal

```text
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   │
│   ├── Main/
│   │   ├── Main.tsx
│   │   └── Main.module.css
│   │
│   ├── Card/
│   │   ├── Card.tsx
│   │   └── Card.module.css
│   │
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## Componentes

### Navbar

Muestra el nombre del sitio y las opciones de navegación.

Los datos son recibidos mediante props desde `App.tsx`.

### Main

Contiene el título, la descripción y la lista de videojuegos destacados.

Los videojuegos son enviados desde `App.tsx` mediante props.

### Card

Componente reutilizable encargado de mostrar la información de cada videojuego.

Actualmente cada tarjeta muestra:

- Nombre del videojuego
- Género

### Footer

Muestra el año y el texto de derechos reservados.

También recibe sus datos mediante props desde `App.tsx`.

## Estilos

Cada componente utiliza su propio archivo CSS Module:

```text
Navbar.module.css
Main.module.css
Card.module.css
Footer.module.css
```

Esto permite mantener los estilos encapsulados y evitar conflictos entre componentes.

Además, la aplicación utiliza un layout flexible para que el `Footer` permanezca en la parte inferior de la pantalla cuando el contenido del `Main` es pequeño.

## Flujo de datos

`App.tsx` funciona como componente principal y envía los datos a los componentes hijos mediante props:

```text
App.tsx
│
├── Navbar
│
├── Main
│   └── Card
│
└── Footer
```

Los videojuegos se encuentran definidos en `App.tsx`, se envían a `Main` y luego cada elemento es renderizado mediante el componente reutilizable `Card`.

## Autor

Proyecto realizado como trabajo práctico de Desarrollo Web con React.
