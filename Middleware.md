[[BackEnd del Proyecto (Documentación)]]

### Imagina esto:
Tú estás jugando en tu casa, y de repente suena la puerta. Alguien quiere entrar. Pero antes de abrir la puerta, tu mamá o papá hacen algo:

1. **Miran por la ventana** para ver quién es.
2. **Preguntan** qué quiere esa persona.
3. **Deciden** si dejan entrar a esa persona o no.

---

### ¿Qué tiene que ver esto con el Middleware?
En un servidor web (como el que haces con Express), el **Middleware** es como tu mamá o papá. Su trabajo es:

1. **Recibir a la persona** que llama a la puerta (en este caso, la solicitud que llega al servidor).
2. **Verificar** si esa persona puede entrar (por ejemplo, si tiene permiso o si trae algo importante).
3. **Decidir** si la deja pasar o no.

---

### Ejemplo con código
Aquí tienes un ejemplo de cómo se vería en código:

```javascript
const express = require("express");
const app = express();

// Middleware: Es como tu mamá o papá que revisa quién llama a la puerta
app.use((req, res, next) => {
    console.log("Middleware: Alguien está llamando a la puerta");
    next(); // Esto es como decir: "Pasa, puedes entrar"
});

// Ruta principal: Es como el lugar donde la persona quiere ir
app.get("/", (req, res) => {
    res.send("¡Hola! Bienvenido a mi casa.");
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log("La casa está lista en http://localhost:3000");
});
```

---

### ¿Qué hace este código?
1. **Crea un Middleware**: Es como tu mamá o papá que revisa quién llama a la puerta.
2. **Registra un mensaje**: El Middleware dice: "Middleware: Alguien está llamando a la puerta".
3. **Llama a `next()`**: Esto es como decir: "Pasa, puedes entrar".
4. **Define una ruta**: Cuando la persona entra, el servidor le dice: "¡Hola! Bienvenido a mi casa.".

---

### ¿Qué pasa si no usas `next()`?
Si no usas `next()`, es como si tu mamá o papá no dejaran pasar a la persona. La solicitud se queda "atrapada" en el Middleware y nunca llega a su destino.

---

### En resumen
El Middleware es como un **guardián** que revisa las solicitudes antes de que lleguen a su destino. Puede hacer cosas como verificar quién es, qué quiere, o si tiene permiso para entrar. ¡Es como tener a alguien que cuida la puerta de tu casa! 
