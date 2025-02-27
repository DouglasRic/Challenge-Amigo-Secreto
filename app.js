//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Pega o nome do amigo digitado no campo de texto
    const nome = document.getElementById('amigo').value;

    // Verifica se o campo não está vazio
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adiciona o nome na lista de amigos
    amigos.push(nome);

    // Limpa o campo de texto após adicionar
    document.getElementById('amigo').value = '';

    // Atualiza a lista visível de amigos
    atualizarLista();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Cria um item para cada amigo na lista
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert('Por favor, adicione pelo menos um amigo antes de sortear.');
        return;
    }

    // Sorteia um nome aleatório da lista de amigos
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o nome do amigo sorteado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${sorteado}</strong>`;
}
