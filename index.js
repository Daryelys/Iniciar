// Importa el framework Express para crear el servidor web
import express from "express";

// Fix para __dirname en módulos ES (necesario porque usamos 'import' en lugar de 'require')
import path from 'path';
import { fileURLToPath } from 'url';

// Crea el equivalente a __dirname (que indica la ruta del directorio actual)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Esto es necesario porque en módulos ES no tenemos __dirname por defecto
// fileURLToPath convierte la URL del módulo a una ruta de archivo
// path.dirname extrae el directorio de esa ruta

// Crea una instancia de la aplicación Express
const app = express();

// Configura el puerto del servidor (4000 en este caso)
app.set("port", 4000);

// Inicia el servidor en el puerto configurado
app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en puerto", app.get("port"));
    // Esto muestra en consola que el servidor está funcionando
});

// Configuración de middleware:
// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + "/public"));
// Esto permite acceder directamente a archivos como CSS, JS, imágenes
// Ejemplo: /styles.css buscará en /public/styles.css

// Definición de rutas:

// Ruta principal ("/") que envía el archivo login.html cuando alguien accede al sitio
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/login.html");
    // sendFile envía el archivo HTML completo al cliente
    // __dirname + "/pages/login.html" forma la ruta absoluta al archivo
});
