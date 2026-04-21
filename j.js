//array de objetos
const personagen = [
    {
        id: 1,
        nome: 'gabriel',
        pontuacao: 0
    },
    {
        id: 2,
        nome: 'beatriz',
        pontuacao: 0
    },
    {
        id: 3,
        nome: 'leonice',
        pontuacao: 0
    }
]


//array de objetos para cada pergunta
const perguntas = [
    {
        textopergunta : 'Pergunta1',
        respostas : [
            {
                item: 'resposta 1',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 10
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 20
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 30
                    }
                 ]
            },
            {
                item: 'resposta 2',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 20
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 30
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 10
                    }
                 ]
            },
            {
                item: 'resposta 3',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 30
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 10
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 20
                    }
                 ]
            }
        ]
    },
    {
        textopergunta : 'Pergunta2',
        respostas : [
            {
                item: 'resposta 1',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 10
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 20
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 30
                    }
                 ]
            },
            {
                item: 'resposta 2',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 20
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 30
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 10
                    }
                 ]
            },
            {
                item: 'resposta 3',
                pontuacoes: [
                    {
                        idPersonagem : 1,
                        pontuacao: 30
                    },
                    {
                        idPersonagem : 2,
                        pontuacao: 10
                    },
                    {
                        idPersonagem : 3,
                        pontuacao: 20
                    }
                 ]
            }
        ]
    }
]

//laco de repeticao para cada pergunta do quiz
function atribuirResposta(pontuacoes) {

   for (let i = 0; i < 3; i++){
        console.log('Log',pontuacoes[i])
        if (personagen[0].id === pontuacoes[i].idPersonagem){
            personagen[0].pontuacao += pontuacoes[i].pontuacao
        } else if (personagen[1].id === pontuacoes[i].idPersonagem){
            personagen[1].pontuacao += pontuacoes[i].pontuacao
        } else if (personagen[2].id === pontuacoes[i].idPersonagem){
            personagen[2].pontuacao += pontuacoes[i].pontuacao
        }
    }
}
