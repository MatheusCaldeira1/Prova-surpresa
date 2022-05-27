import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import endpoints from './endpoints.js'



const server = express();
server.use(cors());
server.use(endpoints);
server.use(express.json());

server.get('/ping', (req, resp) => {
    resp.send('pong');
})


server.listen(process.env.PORT,
    () => console.log(`API online naporta ${process.env.PORT}`));



