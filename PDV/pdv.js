let carrinho = [];
let produtoAtual = null;

// GARANTE QUE TODOS PRODUTOS TENHAM ESTOQUE
produtos.forEach(p => {
    if (p.estoque === undefined) {
        p.estoque = 100; // estoque inicial padrão
    }
});

// Categorias padronizadas
const categorias = ["Bebidas", "Mercearia", "Limpeza", "Higiene", "Hortifruti"];

window.onload = () => {
    const listaCat = document.getElementById('listaCategorias');
    if (listaCat) {
        listaCat.innerHTML = categorias.map(c =>
            `<button class="btn-side-cat" onclick="abrirCatalogo('${c}')">${c}</button>`
        ).join('');
    }
    const topo = document.getElementById('categoriasDesktop');

    if (topo) {

    topo.innerHTML = categorias.map(c =>

    `<button class="btn-cat-topo"
    onclick="abrirCatalogo('${c}')">

    ${c}

    </button>`

    ).join('');

    }
};

function abrirCatalogo(cat) {

    toggleMenu();

    const grid = document.getElementById('gridProdutos');
    const overlay = document.getElementById('catalogoOverlay');

    document.getElementById('tituloCategoria').innerText = cat.toUpperCase();

    const filtrados = produtos.filter(p => p.categoria === cat);

    grid.innerHTML = filtrados.map(p => `
        <button class="prod-card" onclick="abrirModal('${p.codigo}')">
            <span>${p.nome}</span>
            <strong>R$ ${p.precoVarejo.toFixed(2)}</strong>
        </button>
    `).join('');

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharCatalogo() {
    document.getElementById('catalogoOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function abrirModal(cod) {

    produtoAtual = produtos.find(p => p.codigo === cod);

    document.getElementById('nomeProdQtd').innerText =
        produtoAtual.nome;

    document.getElementById('valorVarejo').innerText =
        `Varejo: R$ ${produtoAtual.precoVarejo.toFixed(2)}`;

    document.getElementById('valorAtacado').innerText =
        `Atacado (12+): R$ ${produtoAtual.precoAtacado.toFixed(2)}`;

    document.getElementById('qtdInput').value = 1;

    atualizarSubtotalModal();

    document.getElementById('modalQtd')
        .classList.add('active');
}

function fecharModal() {
    document.getElementById('modalQtd')
        .classList.remove('active');
}

function alterarQtd(v) {

    let inp = document.getElementById('qtdInput');

    let n = parseInt(inp.value) + v;

    if (n > 0) {

        inp.value = n;

        atualizarSubtotalModal();

    }

}

function atualizarSubtotalModal() {

    const qtd =
        parseInt(
            document.getElementById('qtdInput').value
        ) || 1;

    const preco =
        (qtd >= 12)
            ? produtoAtual.precoAtacado
            : produtoAtual.precoVarejo;

    const sub = qtd * preco;

    document.getElementById('subtotalModal')
        .innerText =
        `SUBTOTAL R$ ${sub.toFixed(2)}`;

}

function confirmarNoCarrinho() {

    const qtd =
        parseInt(
            document.getElementById('qtdInput').value
        );

    const preco =
        (qtd >= 12)
            ? produtoAtual.precoAtacado
            : produtoAtual.precoVarejo;

    carrinho.push({
        ...produtoAtual,
        quantidade: qtd,
        precoFinal: preco
    });

    atualizarCarrinho();

    fecharModal();

    fecharCatalogo();

}

function atualizarCarrinho() {

    const lista =
        document.getElementById('carrinhoItens');

    let total = 0;

    lista.innerHTML =
        carrinho.map((item) => {

            let sub =
                item.precoFinal *
                item.quantidade;

            total += sub;

            return `
                <div style="
                    display:flex;
                    justify-content:space-between;
                    padding:10px 0;
                    border-bottom:1px solid #f1f5f9;
                    font-weight:700;
                    font-size:14px;
                ">
                    <span>
                        ${item.quantidade}x ${item.nome}
                    </span>

                    <span>
                        R$ ${sub.toFixed(2)}
                    </span>
                </div>
            `;

        }).join('');

    document.getElementById('totalPDV')
        .innerText =
        `R$ ${total.toFixed(2)}`;

}

function limparCarrinho() {

    carrinho = [];

    atualizarCarrinho();

}

function toggleMenu() {

    const menu =
        document.querySelector(
            '.pdv-categorias-area'
        );

    if (menu) {

        menu.classList.toggle('open');

    }

}

document.addEventListener(
    'click',
    function (event) {

        const menu =
            document.querySelector(
                '.pdv-categorias-area'
            );

        const btn =
            document.querySelector(
                '.btn-menu-hamburguer'
            );

        if (
            menu &&
            menu.classList.contains('open')
        ) {

            if (
                !menu.contains(event.target) &&
                !btn.contains(event.target)
            ) {

                menu.classList.remove('open');

            }

        }

    }
);

function voltarMenu() {

    window.location.href =
        "../index.html";

}

function finalizarVenda() {

    if (carrinho.length === 0) {

        alert("Carrinho vazio!");

        return;

    }

    let produtosLocal =
        JSON.parse(
            localStorage.getItem("produtos")
        ) || [];

    carrinho.forEach(item => {

        let produto =
            produtosLocal.find(
                p => p.codigo === item.codigo
            );

        if (produto) {

            if (produto.estoque === undefined) {

                produto.estoque = 0;

            }

            produto.estoque -= item.quantidade;

            if (produto.estoque < 0) {

                produto.estoque = 0;

            }

        }

    });

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtosLocal)
    );

    alert("Venda finalizada!");

    carrinho = [];

    atualizarCarrinho();

}