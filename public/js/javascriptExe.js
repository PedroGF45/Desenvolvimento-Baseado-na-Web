
function printNewCommer() {
    const nome = 'Pedro Brito';
    const disciplina = 'Bem-vindo a DBW!';

    let mensagem = `Olá ${nome}, ${disciplina}`;
    console.log(mensagem);
}

function compareNumbers() {
    let a = prompt('Write a value:');
    let b = prompt('Write another value:');
    if (a == b) {
        const expression = a == b;
        console.log(expression);
        console.log('true');
    } else if (a === b) {
        const expression = a === b;
        console.log(expression);
        console.log('true');
    } else if (a != b) {
        const expression = a != b;
        console.log(expression);
        console.log('false');
    } else if (a !== b) {
        const expression = a !== b;
        console.log(expression);
        console.log('false');
    } else if (a > b) {
        const expression = a > b;
        console.log(expression);
        console.log('false');
    } else if (a < b) {
        const expression = a < b;
        console.log(expression);
        console.log('false');
    }
}

function giveTime() {
    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    
    if (hours > 7 && hours < 12) {
        console.log(`Bom dia! São ${hours} horas e ${minutes} minutos.`);
    } else if (hours >= 12 && hours < 19) {
        console.log(`Boa tarde! São ${hours} horas e ${minutes} minutos.`);
    } else {
        console.log('Boa noite!');
    }
}

function divideString() {

    let string = "DBW é uma disciplina fixe!";

    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        console.log(`posição ${i} => ${words[i]}`);
    }

    words.forEach(word => {
        word = word.replaceAll("i", "w");
        word = word.toUpperCase();
        console.log(word);
    });
}

function somaSimples(x, y, z) {
    return x + y + z;
}

function somaArrays() {
    let array = [x, y, z];
    somaSimples(x, y, z);
}

var formulaUm = [
    {
        piloto: "Schumacher",
        equipa: "Ferrari",
        reformado: true,
    },
    {
        piloto: "Verstappen",
        equipa: "Red Bull",
        reformado: false,
    },
    {
        piloto: "Alonso",
        equipa: "Aston Martin",
        reformado: false,
    },
];

function pilotoFormulaUm() {
    for (let i = 0; i < formulaUm.length; i++) {
        if (formulaUm[i].reformado === true) {
            console.log(`Piloto ${formulaUm[i].piloto} está reformado!`);
        } else {
            console.log(`Piloto ${formulaUm[i].piloto} ainda está na equipa ${formulaUm[i].equipa}!`);
        }
    }
}

// Função letraMusica para imprimir a letra da música
function letraMusica(musica) {
    console.log(musica);
}
  
// Função stringConcat para concatenar os argumentos e chamar o callback com a canção como argumento
function stringConcat(callback, ...cancao) {
    let music = cancao.join(" ");
    callback(music);
}

// Chamando stringConcat com letraMusica como callback e "Avicii - Hey Brother" como canção
stringConcat(letraMusica, "Avicii", "-", "Hey", "Brother");