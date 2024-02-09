# Aplicación de Gestión de Productos

## Descripción General

Este proyecto consiste en una aplicación de gestión de productos que consta de dos partes principales: una API desarrollada en Spring Boot para el backend y una interfaz de usuario (UI) desarrollada en Angular para el frontend. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en una base de datos de productos.

## Parte del Backend (API Spring Boot)

### Estructura del Proyecto

El proyecto de la API está estructurado de la siguiente manera:

- `src/main/java`: Contiene el código fuente Java para el backend.
- `src/main/resources`: Contiene los recursos y configuraciones del backend.

### Componentes Clave

- `Controller`: Controlador que define los Endpoints de la aplicación.
- `Producto`: Modelo de la clase Producto para especificar los campos de cada producto y sus tipos.
- `Repository`: Repositorio que interactúa con la base de datos para realizar operaciones CRUD en la tabla de productos.

### Descripción de los Endpoints

- **GET /mostrar**: Recupera todos los productos almacenados en la base de datos.
- **POST /guardar**: Crea un nuevo producto en la base de datos.
- **PUT /editar/{id}**: Actualiza la información de un producto existente en la base de datos.
- **DELETE /borrar/{id}**: Elimina un producto de la base de datos según su ID.

### Configuración de la Base de Datos

La aplicación utiliza una base de datos MySQL para almacenar la información de los productos. La configuración de la base de datos se encuentra en el archivo `application.properties`.

## Parte del Frontend (Angular)

### Estructura del Proyecto

El proyecto de Angular consta de los siguientes componentes principales:

- Componente `ListaProductosComponent`: Muestra una lista de todos los productos disponibles y proporciona opciones para editar y eliminar productos.
- Componente `AddProductoComponent`: Permite agregar nuevos productos al sistema.
- Componente `EditarProductoComponent`: Permite editar prodiuctos ya existentes.

### Funcionalidades Principales

- **Listar Productos**: Muestra una lista de productos recuperados del backend.
- **Añadir Producto**: Permite al usuario agregar un nuevo producto proporcionando los detalles como nombre, cantidad, precio y categoría.
- **Editar Producto**: Permite al usuario editar la información de un producto existente.
- **Eliminar Producto**: Permite al usuario eliminar un producto de la lista.

### Dependencias

- **@angular/core**: Librería principal de Angular para la creación de componentes y servicios.
- **@angular/router**: Permite la navegación entre diferentes componentes de la aplicación.
- **@angular/common/http**: Proporciona funcionalidades para realizar solicitudes HTTP a la API backend.

## Instalación y Ejecución

Para ejecutar la aplicación en un entorno local, sigue estos pasos:

1. Clona el repositorio de la API y el repositorio de Angular en tu máquina local.
2. Ejecuta la API Spring Boot.
3. Ejecuta la aplicación Angular con el comando ng serve (puedes añadir --open para que te se te abra la url en el navegador automáticamente).

Con estos pasos, deberías poder interactuar con la aplicación de gestión de productos.


![image](https://github.com/JavierTurienzo/Actividad_4_ADAT/assets/116888591/1161fa5e-c032-4941-a457-3b3913a6b0ff)
