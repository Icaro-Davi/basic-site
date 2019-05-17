const express = require('express');
const bodyParser = require('body-parser');

function server(){
    turnOnServer();
    database();
}

function turnOnServer() {
    const port = 3001; 
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    const cors = require('./cors');
    app.use(cors);

    app.get('/', (req, res)=> {
        res.send('Running');
    });


    const routes = require('../routes/index');
    app.use('/api', routes);

    app.use(express.static(`${__dirname}/client`));

    app.listen(port, ()=>{
        console.log(`Server running on https://localhost:${port}`);
    });
}

function database(){
    const db = require('./database');

    db
        .authenticate()
        .then(() => {
            console.log('> Connection has been established successfully');
        })
        .catch(err => {
            console.log(`> Unable to connect to the database: ${err}`)
        });
}

module.exports = server;