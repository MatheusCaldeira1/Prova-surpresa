import { semaforoPedestre,diaSemana, sequenciapar, fatorial } from "./services.js";
import { Router } from 'express'
const server = Router();



server.get('/semaforoPedestre/:cor',(req,resp)=> {
    try{ 
    const cor= req.params.cor;
    const cor1= semaforoPedestre(cor)
        resp.send( {
             cor1:cor1
        });
    }catch(err){
        resp.status(404).send({
            erro: err.Message
        })
    }

});

server.get('/diaSemana',(req,resp)=> {
    try{ 
    const dia= req.query.dia;
    const Dia= diaSemana(dia)
    resp.send( {
        DiaEscolhido: Dia
   });
}catch(err){
    resp.status(404).send({
        erro: err.Message
    })

}
})

server.post('/sequenciaPar', (req,resp) =>{
    try{ 
        const numeros = req.query.numeros;
        const resposta = sequenciapar(numeros);
        resp.send({
            numero:resposta                     
        });
    }catch(err)
    {
        resp.status(404).send({
            erro: err.Message
    })
  }
})

server.post('/fatorial',(req,resp) => {
    try{
        const {numero} = req.query.numero;
        const resposta = fatorial(numero);
        resp.send({
            numeros:resposta
        });
    }catch(err){
        resp.status(404).send({
        erro: err.Message
    })
    }
})

export default server;