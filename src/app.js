require('./config/dotenv')
require('express-async-errors')
const express = require('express');


const { initDatabase } = require('./config/db');
const experienciasRoute = require('./routes/experienciasRout');
const port = process.env.APP_PORT || 5000;
const portfolioRouter = require('./routes/portfolioRout');
const informacoesRouter = require('./routes/informacoesRout');
const authRoute = require('./routes/authRout'); 
const cors = require('cors');



const app = express();
initDatabase();
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/experiencias', experienciasRoute);
app.use('/api/portfolio', portfolioRouter);
app.use('/api/informacoes', informacoesRouter);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send({'Erro': err.message});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});