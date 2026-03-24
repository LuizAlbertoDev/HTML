let carrinho = [];
let prodSelecionado = null;
const categorias = ["Bebidas", "Mercearia", "Limpeza", "Higiene", "Hortifruti"];

// Inicialização
window.onload = () => {
    resetarPDV();
    // Atalho F2 para pagar
    window.addEventListener('keydown', (e) => { if(e.key === 'F2') finalizarVenda(); });
};

function resetarPDV() {
    document.getElementById('gradeProds').style.display = 'none';
    const menu = document.getElementById('menuLateral');
    menu.innerHTML = categorias.map(c => 
        `<button class="btn-side-cat" onclick="ativarCategoria('${c}')">${c.toUpperCase()}</button>`
    ).join('');
}

function ativarCategoria(cat) {
    document.getElementById('gradeProds').style.display = 'grid';
    const menu = document.getElementById('menuLateral');
    menu.innerHTML = categorias.map(c => 
        `<button class="btn-side-cat ${c === cat ? 'ativa' : ''}" onclick="ativarCategoria('${c}')">${c.toUpperCase()}</button>`
    ).join('');

    const filtrados = produtos.filter(p => p.categoria === cat);
    document.getElementById('gradeProds').innerHTML = filtrados.map(p => `
        <button class="prod-card" onclick="abrirModal('${p.codigo}')">
            <span style="font-weight:800; font-size:14px">${p.nome}</span>
            <span style="color:var(--success); font-weight:900; font-size:18px">R$ ${p.precoVarejo.toFixed(2)}</span>
        </button>
    `).join('');
}

function abrirModal(cod) {
    prodSelecionado = produtos.find(p => p.codigo === cod);
    document.getElementById('nomeProdQtd').textContent = prodSelecionado.nome;
    document.getElementById('precosModal').innerHTML = `
        <div class="linha-preco"><span>Varejo</span><span>R$ ${prodSelecionado.precoVarejo.toFixed(2)}</span></div>
        <div class="linha-preco" style="color:var(--success)"><span>Atacado (${prodSelecionado.qtdAtacado}+)</span><span>R$ ${prodSelecionado.precoAtacado.toFixed(2)}</span></div>
    `;
    document.getElementById('qtdInput').value = 1;
    atualizarCalculoModal();
    document.getElementById('modalQtd').classList.add('ativa');
}

function atualizarCalculoModal() {
    const qtd = parseInt(document.getElementById('qtdInput').value) || 1;
    const preco = (qtd >= prodSelecionado.qtdAtacado) ? prodSelecionado.precoAtacado : prodSelecionado.precoVarejo;
    document.getElementById('valorTotalModal').textContent = `R$ ${(preco * qtd).toFixed(2)}`;
}

function alterarQtd(v) {
    let inp = document.getElementById('qtdInput');
    let n = parseInt(inp.value) + v;
    if (n > 0) { inp.value = n; atualizarCalculoModal(); }
}

function fecharModal() { document.getElementById('modalQtd').classList.remove('ativa'); }

function confirmarNoCarrinho() {
    const qtd = parseInt(document.getElementById('qtdInput').value);
    let item = carrinho.find(c => c.id === prodSelecionado.id);
    if(item) { item.quantidade += qtd; } 
    else { carrinho.push({...prodSelecionado, quantidade: qtd}); }

    carrinho.forEach(c => {
        c.precoFinal = (c.quantidade >= c.qtdAtacado) ? c.precoAtacado : c.precoVarejo;
    });

    renderizarCarrinho();
    fecharModal();
}

function renderizarCarrinho() {
    const container = document.getElementById('carrinhoItens');
    container.innerHTML = '';
    let total = 0;
    carrinho.forEach(i => {
        let sub = i.precoFinal * i.quantidade;
        total += sub;
        container.innerHTML += `
            <div class="item-carrinho-linha">
                <span>${i.quantidade}x ${i.nome}</span>
                <span>R$ ${sub.toFixed(2)}</span>
            </div>`;
    });
    document.getElementById('totalPDV').textContent = `R$ ${total.toFixed(2)}`;
}

function finalizarVenda() {
    if(carrinho.length === 0) return;
    
    // Calcular Total
    let totalVenda = carrinho.reduce((acc, i) => acc + (i.precoFinal * i.quantidade), 0);

    // Salvar no LocalStorage (Banco do Navegador)
    let historico = JSON.parse(localStorage.getItem('vendas_atacadopro')) || [];
    historico.push({
        data: new Date().toLocaleString(),
        total: totalVenda,
        itens: carrinho.length
    });
    localStorage.setItem('vendas_atacadopro', JSON.stringify(historico));

    alert("VENDA FINALIZADA!\nTotal: R$ " + totalVenda.toFixed(2));
    carrinho = [];
    renderizarCarrinho();
    window.location.href = "../../index.html"; // Volta ao menu
}

function adicionarPorInput() {
    const busca = document.getElementById('inputBusca').value.toLowerCase();
    const prod = produtos.find(p => p.codigo === busca || p.nome.toLowerCase() === busca);
    if(prod) { abrirModal(prod.codigo); document.getElementById('inputBusca').value = ''; }
}