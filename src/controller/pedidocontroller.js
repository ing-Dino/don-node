const pedidomodel = require('../model/pedidomodel');

function registrarNota(req, res) {
    const { nombre, tamano, Cantidad } = req.body;

    // Lógica para calcular el total (puedes ajustarlo según la prueba)
    const precios = { "Chica": 5000, "Mediana": 8000, "Grande": 12000 };
    const precioUnitario = precios[tamano] || 0;
    const totalCalculado = precioUnitario * parseInt(Cantidad);

    const nuevopedido = {
        nombre: nombre,
        tamano: tamano,
        Cantidad: Cantidad,
        Total: totalCalculado
    };

    pedidomodel.guardar(nuevopedido);
    res.redirect('/pedido/lista');
}

function listarNotas(req, res) {
    const notas = pedidomodel.obtenerTodas();

    // 1. Generamos las filas dinámicamente
    const filas = notas.map(n => `
        <tr>
            <td>${n.nombre}</td>
            <td>${n.tamano}</td>
            <td>${n.Cantidad}</td>
            <td>$${n.Total}</td>
        </tr>
    `).join('');

    // 2. IMPORTANTE: Ponemos las "filas" dentro del HTML del res.send
    res.send(`
        <html>
        <head><title>Lista de Pedidos</title></head>
        <body>
            <h1>Lista de pedidos registrados</h1>
            <table border="1" style="width:100%; border-collapse: collapse; text-align: center;">
                <thead style="background-color: #f2f2f2;">
                    <tr>
                        <th>Nombre Cliente</th>
                        <th>Tamaño</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${filas}  </tbody>
            </table>
            <br>
            <a href="/">← Volver a la página principal</a>
        </body>
        </html>
    `);
}

module.exports = { registrarNota, listarNotas };