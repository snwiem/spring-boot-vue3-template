# spring-boot-vue3-template

A simple project template for spring-boot-3 and vue3.

The maven based build process builds a combined jar file that contains the spring-boot server and the vue3 frontend.

## frontend

The frontend application is a basic vite based vue3 application. It provides a router as well as pinia for state management.
The project uses `axios` for communication with the backend service (see `src/backend.ts`).

## backend

The backend is a simple spring-boot application that serves the frontend. The only important configuration is the server
port configuration in `application.properties`. The default port is 8080. If this is changed you also need to change the
proxy configuration in the `vite.config.js` file.

The template provides a simple REST controller that serves a single `Hello World` message. The API endpoint is configured
to be `/api/hello` (GET).

## development

Both modules can be started independently. The frontend is started with the `npm run dev` command and the backend is started
using `mvn spring-boot:run`.

## usage

Please only fork the project if you want to make changes to the template itself, not provide certain implementations for
your application. In that case you should create a new project by downloading the latest main source code and start from there.

