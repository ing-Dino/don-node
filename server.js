

const express    = require('express');                        
const notaRoutes = require('./src/routes/pedidoroutes');       
const app  = express();                                      
const PORT = 3000;                                   

app.use(express.urlencoded({ extended: true }));            
app.use(express.static('public'));                  

app.use('/pedido', notaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
