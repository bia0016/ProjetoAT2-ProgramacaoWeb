const personagens=[
    {nome:'Zeus', pontuacao:0},
    {nome:'Hades', pontuacao:0},
    {nome:'Poseidon', pontuacao:0}
];
const perguntas=[
    {texto:'Pergunta 1',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 2',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 3',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 4',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 5',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 6',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 7',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 8',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 9',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    },
    {texto:'Pergunta 10',
        respostas:[
            {item:'resposta1', pontuacoes:[10,20,30]},
            {item:'resposta2', pontuacoes:[20,30,10]},
            {item:'resposta3', pontuacoes:[30,10,20]}
        ]
    }
];
function atribuirResposta(pontuacoes){
    for(let i=0;i<pontuacoes.length;i++){
        personagens[i].pontuacao+=pontuacoes[i];
        console.log(personagens);
    }
}
function mostrarPergunta(){
    const secaoPergunta=document.getElementById('secaoPergunta');
    for(let i=0;i<perguntas.length;i++){
        const p=document.createElement('p');
        p.textContent=perguntas[i].texto;
        console.log(p);
        secaoPergunta.append(p);
        for(let j=0;j<perguntas[i].respostas.length;j++){
            const botao=document.createElement('button');
            botao.textContent=perguntas[i].respostas[j].item;
            const pontuacoes=perguntas[i].respostas[j].pontuacoes;
            botao.onclick=function(){atribuirResposta(pontuacoes);}
            secaoPergunta.append(botao);
        }
    }
}
function mostrarResultado(){
    console.log(personagens.pontuacao);
}
function reiniciar(pontuacoes){
    for(let i=0;i<pontuacoes.legth;i++){
        personagens[i].pontuacao=0;
        console.log(personagens);
    }
}
mostrarPergunta();