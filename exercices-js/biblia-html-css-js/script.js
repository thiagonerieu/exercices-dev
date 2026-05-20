/* ==========================================================================
   1. BOAS PRÁTICAS: AGUARDAR O DOM CARREGAR
   Isso garante que o JavaScript só vai rodar quando todo o HTML estiver pronto,
   evitando erros de "elemento não encontrado".
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM totalmente carregado e pronto para a ação! 🚀');
    
    // Inicializa as funções do nosso site
    initBotaoDestaque();
    initMenuScroll();
});

/* ==========================================================================
   2. MANIPULAÇÃO DO DOM E EVENTOS (O coração do JS na Web)
   ========================================================================== */

function initBotaoDestaque() {
    // SELEÇÃO MODERNA: querySelector usa a mesma sintaxe de seletores do CSS
    const botao = document.querySelector('#btn-action');
    const secaoSobre = document.querySelector('.info-section');

    // Segurança básica: só adiciona o evento se o botão realmente existir na tela
    if (botao && secaoSobre) {
        
        // EVENT LISTENER: A forma moderna de ouvir cliques e ações do usuário
        botao.addEventListener('click', (event) => {
            // Evita comportamentos padrões se o elemento fosse um link/formulário
            event.preventDefault();

            // Modificando estilos dinamicamente via JS
            secaoSobre.style.transform = 'scale(1.02)';
            secaoSobre.style.transition = 'transform 0.3s ease';

            // Criando ou alterando o conteúdo de um elemento com segurança
            // Dica: Use textContent em vez de innerHTML para evitar falhas de segurança (XSS)
            botao.textContent = 'Feito! 🎉';
            botao.style.backgroundColor = '#10b981'; // Muda para verde (Sucesso)

            // Criando um novo elemento do zero e inserindo na página
            const alerta = document.createElement('p');
            alerta.className = 'mensagem-sucesso';
            alerta.textContent = 'Você ativou a interatividade do JavaScript!';
            alerta.style.color = '#10b981';
            alerta.style.marginTop = '1rem';
            alerta.style.fontWeight = 'bold';

            // Insere o parágrafo de alerta logo abaixo do parágrafo da seção Sobre
            const paragrafoSobre = secaoSobre.querySelector('p');
            paragrafoSobre.appendChild(alerta);

            console.log('O usuário clicou no botão e o DOM foi alterado!');
        });
    }
}

/* ==========================================================================
   3. EXTRA: REAÇÃO AO SCROLL DA TELA (Efeito visual avançado)
   Muda o estilo do cabeçalho quando o usuário rola a página para baixo.
   ========================================================================== */
function initMenuScroll() {
    const header = document.querySelector('.main-header');

    if (header) {
        window.addEventListener('scroll', () => {
            // Se o scroll passar de 50 pixels, adiciona uma sombra maior e reduz o padding
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                header.style.padding = '0.5rem 2rem';
            } else {
                header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                header.style.padding = '1rem 2rem';
            }
        });
    }
}