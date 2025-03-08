[[BackEnd del Proyecto (Documentación)]]

### ¿Qué es CORS?

CORS significa **Cross-Origin Resource Sharing** (Intercambio de Recursos de Origen Cruzado). Es un mecanismo que permite a un servidor web decir: "¡Oye, otros sitios web pueden acceder a mis recursos!".

---

### ¿Para qué sirve CORS?

Imagina que tienes un **servidor web** y un **sitio web** que quiere usar los datos de tu servidor. Por defecto, los navegadores (como Chrome o Firefox) bloquean las solicitudes entre sitios web diferentes por razones de seguridad. CORS es como un **permiso** que le das a otros sitios web para que puedan acceder a los recursos de tu servidor.

---

### ¿Cómo funciona CORS?

1. **Tu servidor** (por ejemplo, el que hiciste con Express) tiene datos o recursos que otros sitios web quieren usar.
2. **Otro sitio web** intenta hacer una solicitud a tu servidor.
3. **El navegador** verifica si tu servidor permite que ese sitio web acceda a sus recursos.
    - Si **sí lo permite**, el navegador deja pasar la solicitud.
    - Si **no lo permite**, el navegador bloquea la solicitud.        

---

### Ejemplo sencillo

Imagina que tienes un **servidor** en `http://miservidor.com` y un **sitio web** en `http://otrasitio.com`. Si `otrasitio.com` quiere obtener datos de `miservidor.com`, el navegador verifica si `miservidor.com` permite que `otrasitio.com` acceda a sus recursos. Si `miservidor.com` dice "sí, déjalo pasar", entonces el navegador permite la solicitud.

---

### ¿Por qué es importante CORS?

- **Seguridad**: Sin CORS, cualquier sitio web podría acceder a los recursos de tu servidor, lo que podría ser peligroso.
- **Flexibilidad**: Con CORS, puedes controlar quién puede acceder a los recursos de tu servidor y quién no.

---

### ¿Cómo se usa CORS con Express?

En Express, puedes usar el paquete **`cors`** para permitir que otros sitios web accedan a los recursos de tu servidor. Aquí tienes un ejemplo:

```JS
const express = require("express"); // Importamso Express
const cors = require("cors"); // Importamos CORS
const app = express(); // Declaramos la instancia de Express

// Usamos CORS para permitir solicitudes de otros sitios web
app.use(cors());

// Ruta de ejemplo
app.get("/", (req, res) => {
    res.json({ mensaje: "¡Hola! CORS está habilitado." });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor listo en http://localhost:3000");
});
```

##### ¿Qué hace este código?

1. **Importa CORS**: Usamos el paquete `cors` para habilitar el intercambio de recursos entre sitios web.
2. **Habilita CORS**: Con `app.use(cors())`, le decimos a Express que permita solicitudes desde otros sitios web.
3. **Crea una ruta**: Cuando visitas `http://localhost:3000/`, el servidor responde con un mensaje en formato JSON.

---

### ¿Qué hacen estas dos lineas de código?

```JS
const cors = require("cors"); // Importamos el paquete CORS
app.use(cors()); // Habilitamos CORS en nuestro servidor
```

1. **`const cors = require("cors");`**: Esto **importa el paquete** `cors` en tu proyecto. Este paquete es el que te permite manejar las políticas de CORS en tu servidor.
2. **`app.use(cors());`**: Esto **habilita CORS en tu servidor de Express**. Con esto, le estás diciendo a tu servidor que **acepte solicitudes desde otros dominios (otros sitios web)**.

---

### ¿Qué significa "Aceptar solicitudes desde otros dominios"?

Cuando hablamos de "otros dominios", nos referimos a sitios web que no están en el mismo lugar que tu servidor. Por ejemplo:

- Tu servidor está en: `http://miservidor.com`
- Otro sitio web está en: `http://otrasitio.com`

Si `otrasitio.com` intenta hacer una solicitud a `miservidor.com`, el navegador bloqueará esa solicitud **a menos que tu servidor permita el acceso** usando CORS.

---

### ¿Entonces `app.use(cors())` permite el acceso a cualquiera?

¡Casi! Pero hay matices. 😉

- **Por defecto**, cuando usas `app.use(cors())` sin configuraciones adicionales, estás diciendo: **"Permito que cualquier sitio web haga solicitudes a mi servidor"**. Es decir, cualquier dominio puede acceder a los recursos de tu servidor.

- **Pero**, CORS también te permite **limitar el acceso a ciertos dominios específicos** si lo necesitas. Por ejemplo, puedes decir: "Solo permito que `http://otrasitio.com` acceda a mi servidor".

---

### Ejemplo de CORS configurado para permitir solo un dominio específico

Si no quieres que **cualquiera** acceda a tu servidor, puedes configurar CORS para permitir solo ciertos dominios. Por ejemplo:

```JS
const cors = require("cors");

// Configuramos CORS para permitir solo solicitudes desde "http://otrasitio.com"
app.use(cors({
    origin: "http://otrasitio.com" // Solo este dominio puede acceder
}));
```

En este caso:

- Si `http://otrasitio.com` hace una solicitud a tu servidor, el navegador la permitirá.    
- Si otro sitio web (_como `http://otrodominio.com`_) intenta hacer una solicitud, el navegador la **bloqueará**.

---

###### Cuando usas:

```JS
const cors = require("cors");
app.use(cors());
```

Le estás diciendo a tu servidor: **"Permite que cualquier sitio web haga solicitudes a mi servidor"**. Si quieres restringir el acceso a ciertos dominios, debes configurar CORS con opciones adicionales, como en el ejemplo anterior.