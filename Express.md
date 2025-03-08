[[BackEnd del Proyecto (Documentación)]]
## ¿Qué es Express?
Express es una **herramienta** (o librería) que nos ayuda a crear un **servidor web** de forma rápida y sencilla. Un servidor web es como un "programa" que recibe solicitudes (peticiones) de los usuarios y les envía respuestas.

---

### ¿Para qué sirve Express?
1. **Recibir solicitudes**: Por ejemplo, cuando un usuario visita una página web o hace clic en un botón, el servidor recibe esa solicitud.
2. **Enviar respuestas**: El servidor procesa la solicitud y devuelve algo, como una página web, un mensaje, o datos en formato JSON.
3. **Manejar rutas**: Express nos permite definir "direcciones" (rutas) en el servidor, como `/inicio`, `/contacto`, etc., para que los usuarios puedan acceder a diferentes partes de la aplicación.

---

### ¿Cómo funciona Express?
1. **Creas una aplicación**: Con Express, creas una "aplicación" que será tu servidor.
2. **Defines rutas**: Le dices a Express qué hacer cuando alguien visita una ruta específica (por ejemplo, `/` para la página principal).
3. **Envías respuestas**: Cuando alguien visita una ruta, Express envía una respuesta, como un mensaje, una página web, o datos.

---

### Ejemplo super simple
Imagina que Express es como un **camarero** en un restaurante:
1. **El cliente (usuario)** hace un pedido (solicitud), como "Quiero un café".
2. **El camarero (Express)** recibe el pedido, lo procesa y decide qué hacer.
3. **El camarero responde**: Te trae el café (respuesta).

En código, esto se vería así:
```javascript
const express = require("express");
const app = express();

// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Hola! Bienvenido a mi servidor.");
});

// Ruta para el "café"
app.get("/cafe", (req, res) => {
    res.send("Aquí tienes tu café ☕");
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor listo en http://localhost:3000");
});
```

---

### ¿Qué hace este código
1. **Crea un servidor** con Express.
2. **Define dos rutas**:
   - Si visitas `http://localhost:3000/`, el servidor responde con "¡Hola! Bienvenido a mi servidor.".
   - Si visitas `http://localhost:3000/cafe`, el servidor responde con "Aquí tienes tu café ☕".
3. **Escucha en el puerto 3000**: El servidor está listo para recibir solicitudes en ese puerto.

---

### ¿Por qué usar Express
- Es **fácil de usar**: Con pocas líneas de código puedes crear un servidor.
- Es **flexible**: Puedes usarlo para crear desde servidores simples hasta aplicaciones web complejas.
- Tiene muchas **herramientas adicionales**: Como manejo de rutas, procesamiento de datos, y más.
