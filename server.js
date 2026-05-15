

const express    = require('express');                        // importa el framework Express
const notaRoutes = require('./src/routes/pedidoroutes');        // importa las rutas del módulo de notas

const app  = express();                                       // crea la aplicación Express
const PORT = 3000;                                            // puerto donde escuchará el servidor

app.use(express.urlencoded({ extended: true }));              // permite leer datos de formularios HTML (req.body)
app.use(express.static('public'));                            // sirve los archivos de public/ al navegador

// ── Rutas ─────────────────────────────────────────────────────
// Todas las URLs que empiecen con /notas se delegan a notaRoutes
app.use('/notas', notaRoutes);

// ── Iniciar servidor ──────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // confirmación en consola
});
