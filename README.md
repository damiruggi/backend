# Proyecto de backend

| `JavaScript` | `nodejs` | `NPM` |
| :------------: | ---------- | ------- |

## Sprints

* **Sprint 1:** Generamos los gestores de usuarios y productos.
* **Sprint 2:** Generamos el manejo de archivos para usuarios y productos para que se guarden en archivos json, se testean en la terminal con el comando "node ./fs/UserManager.fs.js" para los usuarios y "node ./fs/ProductsManager.fs.js" para los productos.
* **Sprint 3:** Generamos el manejo de paquetes de NPM para buscar en files los usuarios y productos generados con los statusCode. Los usuarios se ven desde http://localhost:8080/api/users/, la busqueda por id de usuarios es por http://localhost:8080/api/users/:uid. Los productos se ven desde http://localhost:8080/api/products/, la busqueda por id de usuarios es por http://localhost:8080/api/products/:pid.
* **Sprint 4:** Ordene y cree las carpetas public, src, routers, y middlewares y ordene los archivos, luego cree los archivos .api para ordenar las rutas, instale morgan, cree todos los productos y usuarios solicitados y ademas genere el archivo index.html. Los productos y usuarios se generaron mediante postman y la ruta para ver los usuarios es http://localhost:8080/api/users/ y para ver los productos http://localhost:8080/api/products/.
* **Sprint 5:** Cree las carpetas views y arme las vistas para el main, products, real, details, profile, register e index. Instale Socket.io y handlebars, en la barra de navegacion se encuentra el logo que lleva siempre al index mostrando todos los productos, el link de productos que muestra tambien todos los productos, y en cada producto al clickear en See details muestra en una landing nueva el detalle del producto, el link del menu Load product lleva a una landing con el formulario de carga de productos y los muestra cargados en tiempo real, el boton de login para iniciar sesion, el de registrarse muestra el formulario de registro y el de profile que muestra un unico usuario del readOne, se puede ver y navegar desde la ruta http://localhost:8080.
* **Sprint 6:** Instale mongoose y dotenv. Cree la carpeta de mongo con los archivos ProductsManager.mongo.js, UsersManager.mongo.js, Manager.mongo.js y CartsManager.mongo.js para que desde Manager.mongo sea dinamico y sirva para Products, Users y el Cart. Tambien genere el archivo .env para tener las variables de entorno para ruta de la base de datos y el puerto. Testee crear productos y usuarios desde postman y se ven reflejados desde MongoDB Compass. Generé tambien el cart con los estados. Para visualizar todo es desde la ruta **http://localhost:8080/.**
* **Sprint 7**: Instale mongoose paginate. Implemente en los archivos models.js de users, products y cart los populate y los index true para popular los usuarios con productos. Ademas implemente el paginate de productos. Tambien implemente bcrypt, passport, google passsport y token para salvaguardar la password en el registro de usuarios e implementar metodo de autenticación. Para visualizar todo es desde la ruta **http://localhost:8080/.**
* **Sprint 8**: Genere el script argv en package.json. Instale dotenv, jwt y token. **http://localhost:8080/.**
* **Sprint 9**: Implementé repositories y services. **http://localhost:8080/.**
<<<<<<< HEAD
* **Sprint 10**: Implementé gzip y faker. Generé 1000 productos con fake con el comando "npm run products" y el de usuarios con el comando "npm run users". Tambien implemente compression para el manejo de errores. **http://localhost:8080/.**
* **Sprint 11**: Implementé winston, artilley y cors. **http://localhost:8080/.**
* **Sprint 12**: Implementé docker y subi la app a dockerhub, tambien implemente minikube. Implemente tambien Joi. Instale e implemente swagger para documentar la api, tambien mocha y chai para testing. **http://localhost:8080/.** y **http://localhost:8080/api/docs**
* **Sprint 13**: Implementé supertest y mocha chai supertest. **http://localhost:8080/.**
* **Sprint 14**: Implementé stripe **http://localhost:8080/** y **https://backend-production-833a5.up.railway.app/.**
=======
* **Sprint Entrega 3**: Implementé nodemailer y dto. **http://localhost:8080/.**
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

## Implementaciones

* Principios básicos de JavaScript
* Implementación y uso de Github
* Funcionalidades de ECMAScript
* Clases de ECMAScript
* Express
* Router y Multer
* Websockets
* Mongo
* Encriptado de password
* Passport
* Google passport
* Token
* Jwt
* Commander
* Dotenv
* Nodemailer
<<<<<<< HEAD
* Gzip
* Faker
* Winston
* Artillery
* Docker
* Minikube
* joi
* swagger
* mocha
* chai
* supertest
* stripe
* stripe
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323


## Dependencias

* `Node.js`
* `Nodemon`
* `Express`
* `Morgan`
* `Hanldebars`
* `Socket.io`
* `Multer`
* `Mongoose`
* `Bcrypt`
* `passport`
* `google passport`
* `token`
* `jwt`
* `commander`
* `dotenv`
* `nodemailer`
<<<<<<< HEAD
* `gzip`
* `faker`
* `winston`
* `artillery`
* `joi`
* `swagger`
* `mocha`
* `chai`
* `supertest`
* `stripe`
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

## Instalación

* `npm install -g node`
* `npm init -y`
* `npm i express`
* `npm i -D nodemon`
* `npm i morgan`
* `npm i express-handlebars`
* `npm i socket.io`
* `npm install multer`
* `npm i dotenv`
* `npm i mongoose`
* `npm i bcrypt`
* `npm i passport passport-local`
* `npm i passport-google-oauth2`
* `npm i jsonwebtoken`
* `npm i passport-jwt`
* `npm i commander`
* `npm i dotenv`
* `npm install nodemailer`
<<<<<<< HEAD
* `npm i express-compression`
* `npm install @faker-js/faker --save-dev`
* `npm install winston`
* `npm install -g artillery`
* `npm install joi joi-oid`
* `npm install swagger-jsdoc`
* `npm install swagger-ui-express`
* `npm install -D mocha`
* `npm install -D chai`
* `npm install -D supertest`
* `npm install -D mocha chai supertest`
* `npm install stripe`
* `npm install stripe`
* `npm install -g @nestjs/cli`
=======
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323

