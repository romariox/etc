
function criarBotao() {

    var botao = document.createElement('button');
    botao.id = 'limpaPosts';
    botao.textContent = 'Limpar';

    botao.onclick = limparPosts;

    // Define o estilo do botão
    botao.style.position = 'fixed';
    botao.style.top = '20%';
    botao.style.right = '0';
    botao.style.zIndex = '1000';

    // Adiciona o botão ao corpo do documento
    document.body.appendChild(botao);

}

// Remove posts com video. Pode limpar o post original
function limparPosts() {

    let posts = document.querySelectorAll("article");
    // let videoPlayer = posts.querySelector('[data-testid="videoPlayer"]');

    [...posts].forEach(post => {
        if (post.querySelector('[data-testid="videoPlayer"]')) {
            post.innerText = ''
            console.log('Post removido');
        }
    });

}

criarBotao();
