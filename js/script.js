document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    let atual = 0;

    slides.forEach((slide, index) => {
        slide.classList.toggle("slide-active", index === 0);
    });

    if (slides.length > 1) {
        setInterval(() => {
            slides[atual].classList.remove("slide-active");
            atual = (atual + 1) % slides.length;
            slides[atual].classList.add("slide-active");
        }, 3000);
    }
});
let carrinho = parseInt(localStorage.getItem("carrinho_qtd")) || 0;

document.addEventListener("DOMContentLoaded", () => {
    inicializarNeve();
    inicializarMenuMobile();
    inicializarMusica();
    inicializarTimer();
    destacarPaginaAtual();
    inicializarGaleria();
    atualizarContadorCarrinho();
    inicializarFormContato();
    inicializarCarrossel();
    renderizarDestaques();
    renderizarDestaques();      // Renderiza os destaques na Home
    renderizarTodosProdutos();
    inicializarNavegacaoContinua();
});

// --- 1. EFEITO DE NEVE NATALÍCIA ---
function inicializarNeve() {
    const container = document.getElementById("neve-container");
    if (!container) return;

    container.innerHTML = ""; // Limpa o container antes de gerar

    for (let i = 0; i < 50; i++) {
        const floco = document.createElement("div");
        floco.className = "floco-neve";
        floco.innerHTML = "❄";

        floco.style.left = Math.random() * 100 + "vw";
        floco.style.animationDuration = (Math.random() * 4 + 3) + "s";
        floco.style.animationDelay = (Math.random() * 5) + "s";
        floco.style.fontSize = (Math.random() * 14 + 10) + "px";
        floco.style.opacity = (Math.random() * 0.7 + 0.3).toString();

        container.appendChild(floco);
    }
}

// --- 2. MODAL DA GALERIA DE OFERTAS ---
function inicializarGaleria() {
    const modal = document.getElementById("modal-galeria");
    const imgAmpliada = document.getElementById("img-ampliada");
    const btnFechar = document.getElementById("btn-fechar-modal");
    const imagens = document.querySelectorAll(".img-lightbox");

    if (!modal || !imgAmpliada || !btnFechar || imagens.length === 0) return;

    imagens.forEach(img => {
        img.addEventListener("click", () => {
            imgAmpliada.src = img.src;
            imgAmpliada.alt = img.alt;
            modal.classList.remove("hidden");
        });
    });

    btnFechar.addEventListener("click", (e) => {
        e.stopPropagation();
        modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
}

// --- 3. CONTAGEM REGRESSIVA PARA O NATAL ---
function inicializarTimer() {
    const displayTimer = document.getElementById("timer-natal");
    if (!displayTimer) return;

    function atualizarContagem() {
        const agora = new Date();
        const anoAtual = agora.getFullYear();
        let dataNatal = new Date(anoAtual, 11, 25, 0, 0, 0).getTime();

        if (agora.getTime() > dataNatal) {
            dataNatal = new Date(anoAtual + 1, 11, 25, 0, 0, 0).getTime();
        }

        const diferenca = dataNatal - agora.getTime();

        if (diferenca <= 0) {
            displayTimer.innerHTML = "🎅 Feliz Natal!";
            return;
        }

        const d = String(Math.floor(diferenca / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const h = String(Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const m = String(Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const s = String(Math.floor((diferenca % (1000 * 60)) / 1000)).padStart(2, '0');

        displayTimer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000);
}

// --- 4. HIGHLIGHT DA PÁGINA ATIVA NO MENU ---
function destacarPaginaAtual() {
    const links = document.querySelectorAll(".navbar a");
    let paginaAtual = window.location.pathname.split("/").pop();
    if (!paginaAtual || paginaAtual === "") paginaAtual = "index.html";

    links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === paginaAtual) {
            link.classList.add("active");
        }
    });
}

// --- 5. MENU MOBILE HAMBÚRGUER ---
function inicializarMenuMobile() {
    const btnToggle = document.getElementById("menu-toggle") || document.getElementById("btn-menu");
    const navbar = document.getElementById("navbar");
    if (!btnToggle || !navbar) return;

    btnToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// --- 6. CONTROLE DO PLAYER DE MÚSICA ---
function inicializarMusica() {
    const btnMusica = document.getElementById("btn-musica");
    const audio = document.getElementById("musica-natal");
    
    if (!btnMusica || !audio) return;

    btnMusica.addEventListener("click", () => {
        if (audio.paused) {
            audio.play()
                .then(() => {
                    btnMusica.textContent = "🔊 PAUSAR";
                })
                .catch((erro) => {
                    alert("O navegador não encontrou o arquivo de áudio. Confira o nome da pasta e do arquivo no HTML!");
                    console.error("Erro no áudio:", erro);
                });
        } else {
            audio.pause();
            btnMusica.textContent = "🎵 MÚSICA";
        }
    });
}
// --- 7. CONTADOR DO CARRINHO ---
function atualizarContadorCarrinho() {
    document.querySelectorAll("#contador-carrinho").forEach(el => el.textContent = carrinho);
}

function adicionarAoCarrinho() {
    carrinho++;
    localStorage.setItem("carrinho_qtd", carrinho);
    atualizarContadorCarrinho();
}

// --- 8. VALIDAÇÃO DO FORMULÁRIO DE CONTATO ---
function inicializarFormContato() {
    const form = document.getElementById("form-contato");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valido = true;

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        const erroNome = document.getElementById("erro-nome");
        const erroEmail = document.getElementById("erro-email");
        const erroMensagem = document.getElementById("erro-mensagem");

        if (nome && !nome.value.trim()) {
            if (erroNome) erroNome.innerText = "Campo obrigatório";
            valido = false;
        } else if (erroNome) erroNome.innerText = "";

        if (email && (!email.value.trim() || !email.value.includes("@"))) {
            if (erroEmail) erroEmail.innerText = "E-mail inválido";
            valido = false;
        } else if (erroEmail) erroEmail.innerText = "";

        if (mensagem && !mensagem.value.trim()) {
            if (erroMensagem) erroMensagem.innerText = "Campo obrigatório";
            valido = false;
        } else if (erroMensagem) erroMensagem.innerText = "";

        if (valido) {
            const msgSucesso = document.getElementById("msg-sucesso");
            if (msgSucesso) msgSucesso.classList.remove("hidden");
            form.reset();
        }
    });
}
// ==========================================
// NOVAS FUNCIONALIDADES (CARROSSEL, DESTAQUES E CARRINHO)
// ==========================================

// 1. LÓGICA DO CARROSSEL AUTOMÁTICO E MANUAL
let slideIndex = 0;

function inicializarCarrossel() {
    const slides = document.querySelectorAll(".slide");
    const btnPrev = document.querySelector(".prev");
    const btnNext = document.querySelector(".next");

    if (!slides.length) return;

    function mostrarSlide(index) {
        slides.forEach(s => s.classList.remove("active"));

        if (index >= slides.length) slideIndex = 0;
        else if (index < 0) slideIndex = slides.length - 1;
        else slideIndex = index;

        slides[slideIndex].classList.add("active");
    }

    if (btnPrev) {
        btnPrev.addEventListener("click", () => mostrarSlide(slideIndex - 1));
    }

    if (btnNext) {
        btnNext.addEventListener("click", () => mostrarSlide(slideIndex + 1));
    }

    // Troca de slide automática a cada 5 segundos
    setInterval(() => {
        mostrarSlide(slideIndex + 1);
    }, 5000);
}

// 2. RENDERIZAR PRODUTOS EM DESTAQUE NA HOME
function renderizarDestaques() {
    const container = document.getElementById("container-destaques");
    if (!container || typeof produtos === "undefined") return;

    const listaDestaques = produtos.filter(p => p.destaque);

    container.innerHTML = listaDestaques.map(p => `
        <div class="card-produto">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p class="preco">R$ ${p.preco.toFixed(2)}</p>
            <button class="btn-link" type="button" onclick="adicionarAoCarrinho()">Comprar</button>
        </div>
    `).join("");
}

// 3. ADICIONAR PRODUTOS AO CARRINHO
function adicionarAoCarrinho() {
    if (typeof totalCarrinho !== "undefined") {
        totalCarrinho++;
        localStorage.setItem("carrinho_qtd", totalCarrinho);
        atualizarContadorCarrinho();
    } else {
        let qtd = parseInt(localStorage.getItem("carrinho_qtd")) || 0;
        qtd++;
        localStorage.setItem("carrinho_qtd", qtd);
        document.querySelectorAll("#contador-carrinho").forEach(el => el.textContent = qtd);
    }
    alert("Produto adicionado ao carrinho com sucesso! 🎄");
}
// --- RENDERIZAR OS 50 PRODUTOS NA PÁGINA PRODUTOS.HTML ---
function renderizarTodosProdutos() {
    // Procura o container na página produtos.html (aceita múltiplos IDs comuns)
    const container = document.getElementById("container-produtos") || 
                      document.getElementById("modal-produtos") || 
                      document.getElementById("grid-produtos");

    if (!container || typeof produtos === "undefined") return;

    container.innerHTML = produtos.map(p => `
        <div class="card-produto">
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p class="preco">R$ ${p.preco.toFixed(2)}</p>
            <button class="btn-link" type="button" onclick="adicionarAoCarrinho()">Comprar</button>
        </div>
    `).join("");
}
// ==========================================
// NAVEGAÇÃO CONTÍNUA (MÚSICA NÃO PARA AO MUDAR DE PÁGINA)
// ==========================================
function inicializarNavegacaoContinua() {
    document.addEventListener("click", async (e) => {
        const link = e.target.closest("a");
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:")) return;

        if (href.endsWith(".html")) {
            e.preventDefault();
            await trocarConteudoPagina(href, true);
        }
    });

    // Suporte aos botões Voltar / Avançar do navegador
    window.addEventListener("popstate", () => {
        const pagina = window.location.pathname.split("/").pop() || "index.html";
        trocarConteudoPagina(pagina, false);
    });
}

async function trocarConteudoPagina(url, atualizarHistorico) {
    try {
        const resposta = await fetch(url);
        if (!resposta.ok) throw new Error("Erro ao carregar página");

        const htmlTexto = await resposta.text();
        const parser = new DOMParser();
        const novaPagina = parser.parseFromString(htmlTexto, "text/html");

        const footerAtual = document.querySelector("footer");
        if (!footerAtual) {
            window.location.href = url;
            return;
        }

        // Remove apenas o conteúdo central da página atual (mantém neve, header, footer e áudio)
        Array.from(document.body.children).forEach((el) => {
            const manter =
                el.id === "neve-container" ||
                el.tagName === "HEADER" ||
                el.tagName === "FOOTER" ||
                el.tagName === "AUDIO" ||
                el.tagName === "SCRIPT";

            if (!manter) el.remove();
        });

        // Insere o conteúdo central da nova página antes do footer
        Array.from(novaPagina.body.children).forEach((el) => {
            const ignorar =
                el.id === "neve-container" ||
                el.tagName === "HEADER" ||
                el.tagName === "FOOTER" ||
                el.tagName === "AUDIO" ||
                el.tagName === "SCRIPT";

            if (!ignorar) {
                document.body.insertBefore(document.importNode(el, true), footerAtual);
            }
        });

        // Atualiza título, URL e destaque do menu
        document.title = novaPagina.title;
        if (atualizarHistorico) {
            window.history.pushState({}, "", url);
        }

        const navbar = document.getElementById("navbar");
        if (navbar) navbar.classList.remove("active");

        destacarPaginaAtual();
        window.scrollTo(0, 0);

        // Reativa as funções da nova página carregada
        inicializarCarrossel();
        renderizarDestaques();
        renderizarTodosProdutos();
        inicializarGaleria();
        inicializarFormContato();
    } catch (erro) {
        // Caso não esteja rodando via Live Server, navega normalmente
        window.location.href = url;
    }
}
function inicializarCarrossel() {
    const slides = document.querySelectorAll(".slide");
    if (slides.length === 0) return;

    let indiceAtual = 0;

    function mostrarSlide(novoIndice) {
        slides[indiceAtual].classList.remove("slide-active");
        indiceAtual = (novoIndice + slides.length) % slides.length;
        slides[indiceAtual].classList.add("slide-active");
    }

    const btnAnterior = document.querySelector(".prev, .anterior, #btn-anterior");
    const btnProximo = document.querySelector(".next, .proximo, #btn-proximo");

    if (btnAnterior) btnAnterior.addEventListener("click", () => mostrarSlide(indiceAtual - 1));
    if (btnProximo) btnProximo.addEventListener("click", () => mostrarSlide(indiceAtual + 1));

    setInterval(() => mostrarSlide(indiceAtual + 1), 4000);
}
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    if (slides.length <= 1) return;

    let atual = 0;

    setInterval(() => {
        slides[atual].classList.remove("slide-active");
        atual = (atual + 1) % slides.length;
        slides[atual].classList.add("slide-active");
    }, 3000);
});
// Abre e fecha o menu hambúrguer no celular
    const btnMenu = document.querySelector(".menu-toggle, .menu-btn, .hamburguer, #menu-btn, #btn-mobile, header button");
    const navMenu = document.querySelector("nav ul, .nav-links, .menu, #menu");

    if (btnMenu && navMenu) {
        btnMenu.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            navMenu.classList.toggle("open");
        });
    }