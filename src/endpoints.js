import { semaforoPedestre,diaSemana } from "./services.js";
import { Router } from 'express'
const server = Router();



server.get('/semaforoPedestre/:cor',(req,resp)=> {
    const cor= req.params.cor;
    const cor1= semaforoPedestre(cor)
        resp.send( {
             cor1:cor1
        });
});

server.get('/diaSemana',(req,resp)=> {
    const dia= req.query.dia;
    const Dia= diaSemana(dia)
    resp.send( {
        DiaEscolhido:Dia
   });
})

export default server;