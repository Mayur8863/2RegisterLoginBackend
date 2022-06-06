const http = require('http');
const getConnection = require("./config/db");

// db connection
getConnection();

const port =3000;

const app = require('./app')
const server = http.createServer(app);
server.listen(port);