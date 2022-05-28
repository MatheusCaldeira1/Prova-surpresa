import server from "./endpoints";

export function semaforoPedestre(cor) {
    let msg= ""; 
    if (cor == "verde") {
     return msg = "pode passar";
    }
    else if (cor == "vermelho") {
    return msg ="aguarde o semaforo abrir";
    }

    else {
        return msg ="Semaforo Quebrado";
    }
}

export function diaSemana (dia){
    if(dia==0) {
        return  "Domingo"
    }
    else if(dia==1) {
        return  "Segunda"
    }  
    else if(dia==2) {
        return  "Terça"
    }
     else if(dia==3) {
        return  "Quarta"
    }
     else if(dia==4) {
        return  "Quinta"
    }
     else if(dia==5) {
        return  "Sexta"
    }
     else if(dia==6) {
        return  "Sábado"
    }
    else{
        return "INVALIDO"
    }
}

export function sequenciapar(par)
{
    for(let cont = 0; cont <= par; cont++)
    {
        if(cont == 2 % 0)
        {
            cont++;
        }
    }
    return cont;
} 
export function fatorial(numero)
{
    let i = 0;
    for(let cont = numero; cont >= 1; cont--)
    {
         i = i*cont;
    }
    return i;
}