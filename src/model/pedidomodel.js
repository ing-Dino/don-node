let pedidos = []; // Esta es tu "base de datos"

function guardar(nuevoPedido) { // Cambiamos el nombre del parámetro
    pedidos.push(nuevoPedido);  // Metemos el nuevo pedido en la lista
}

function obtenerTodas() {
    return pedidos;
}

module.exports = { guardar, obtenerTodas };