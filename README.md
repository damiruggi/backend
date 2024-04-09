# Proyecto de backend

| `JavaScript` | `nodejs` | `NPM` |
| :------------: | ---------- | ------- |

## Sprints

* **Sprint 1:** Generamos los gestores de usuarios y productos.
* **Sprint 2:** Generamos el manejo de archivos para usuarios y productos para que se guarden en archivos json, se testean en la terminal con el comando "node ./fs/UserManager.fs.js" para los usuarios y "node ./fs/ProductsManager.fs.js" para los productos.
* **Sprint 3:** Generamos el manejo de paquetes de NPM para buscar en files los usuarios y productos generados con los statusCode. Los usuarios se ven desde http://localhost:8080/api/users/, la busqueda por id de usuarios es por http://localhost:8080/api/users/:uid. Los productos se ven desde http://localhost:8080/api/products/, la busqueda por id de usuarios es por http://localhost:8080/api/products/:pid.
* **Sprint 4:** Ordene y cree las carpetas public, src, routers, y middlewares y ordene los archivos, luego cree los archivos .api para ordenar las rutas, instale morgan, cree todos los productos y usuarios solicitados y ademas genere el archivo index.html. Los productos y usuarios se generaron mediante postman y la ruta para ver los usuarios es http://localhost:8080/api/users/ y para ver los productos http://localhost:8080/api/products/.
* **Sprint 5:** Cree las carpetas views y arme las vistas para el main, products, real, details, profile, register e index. Instale Socket.io y handlebars, en la barra de navegacion se encuentra el logo que lleva siempre al index mostrando todos los productos, el link de productos que muestra tambien todos los productos, y en cada producto al clickear en See details muestra en una landing nueva el detalle del producto, el link del menu Load product lleva a una landing con el formulario de carga de productos y los muestra cargados en tiempo real, el boton de login para iniciar sesion, el de registrarse muestra el formulario de registro y el de profile que muestra un unico usuario del readOne, se puede ver y navegar desde la ruta http://localhost:8080.

## Implementaciones

* Principios básicos de JavaScript
* Implementación y uso de Github
* Funcionalidades de ECMAScript
* Clases de ECMAScript
* Express
* Router y Multer
* Websockets

## Dependencias

* `Node.js`
* `Nodemon`
* `Express`
* `Morgan`
* `Hanldebars`
* `Socket.io`
* `Multer`

## Instalación

* `npm install -g node`
* `npm init -y`
* `npm i express`
* `npm i -D nodemon`
* `npm i morgan`
* `npm i express-handlebars`
* `npm i socket.io`
* `npm install multer`
