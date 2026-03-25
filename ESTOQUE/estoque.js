let ordemAscendente = true;
let ultimaColuna = '';

function renderizarEstoque(lista) {

    const corpo = document.getElementById('corpoTabela');
    corpo.innerHTML = '';

    let valorTotal = 0;

    lista.forEach(p => {

        if (p.estoque === undefined) {
            p.estoque = 100;
        }

        valorTotal += p.precoVarejo * p.estoque;

        corpo.innerHTML += `
        <tr>

        <td><strong>#${p.codigo}</strong></td>

        <td>${p.nome}</td>

        <td>
        <span class="cat-badge">
        ${p.categoria}
        </span>
        </td>

        <td style="font-weight:bold;">
        ${p.estoque}
        </td>

        <td>
        R$ ${p.precoVarejo.toFixed(2)}
        </td>

        <td style="color:#10b981;font-weight:bold;">
        R$ ${p.precoAtacado.toFixed(2)}
        </td>

        <td>
        ${p.qtdAtacado} unid.
        </td>

        </tr>
        `;
    });

    document.getElementById('totalItens').textContent =
        lista.length;

    document.getElementById('valorEstoque').textContent =
        `R$ ${valorTotal.toFixed(2)}`;
}

function ordenarPor(coluna) {

    if (ultimaColuna === coluna) {
        ordemAscendente = !ordemAscendente;
    } else {
        ordemAscendente = true;
        ultimaColuna = coluna;
    }

    const produtosOrdenados =
        [...produtos].sort((a, b) => {

            let valorA = a[coluna];
            let valorB = b[coluna];

            if (typeof valorA === 'string') {
                valorA = valorA.toLowerCase();
                valorB = valorB.toLowerCase();
            }

            if (valorA < valorB)
                return ordemAscendente ? -1 : 1;

            if (valorA > valorB)
                return ordemAscendente ? 1 : -1;

            return 0;
        });

    renderizarEstoque(produtosOrdenados);
}

function filtrarEstoque() {

    const termo =
        document
        .getElementById('buscaEstoque')
        .value
        .toLowerCase();

    const filtrados =
        produtos.filter(p =>

            p.nome.toLowerCase().includes(termo) ||

            p.codigo.includes(termo) ||

            p.categoria.toLowerCase().includes(termo)

        );

    renderizarEstoque(filtrados);
}

window.onload = () => {

    let dados =
        JSON.parse(
            localStorage.getItem("produtos")
        );

    if (dados) {
        produtos = dados;
    }

    renderizarEstoque(produtos);
};