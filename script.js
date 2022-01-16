const botao = document.querySelector('button');
const totalPeronagens = 3;

gerarRepeticaoPersonagem = () => {
    for ( var i = 0; i < totalPeronagens; i++ ) {
        const condicao = document.querySelector('#status-' + i);
        const especie = document.querySelector('#especie-'+ i);
        const imagem = document.querySelector('#imagem-' + i);
        const nomeDoPersonagem = document.querySelector('#nome-'+ i);
         pegarPersonagem(imagem, nomeDoPersonagem, especie, condicao)
    }
    
}

gerarValorAletorio = () => {
    return Math.floor(Math.random() * 671);
}


pegarPersonagem = (imagem, nomeDoPersonagem, especie, condicao) => {
    let numeroAleatorio = gerarValorAletorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = traduzirCondicao(data);
    });
}

traduzirCondicao = (data) => {
    if(data.status == 'unknown'){
        return 'Não sabemos';
    }else if(data.status == 'Alive'){
        return 'Sim';
    }else {
        return 'Não. Está morto';
    }
}


botao.onclick = gerarRepeticaoPersonagem;