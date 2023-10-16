// Defina um array de produtos
let produtos = [
  {
    nome: "Cafe preto",
    quantidade: 10,
    descricao: "Xicara media de cafe preto, quantinho, feito com cafe da melhor qualidade.",
    categorias: "Bebidas, café",
    valor: "R$ 5,00",
    foto: "./assets/cafe-preto.png",
  },
  {
    nome: "Cafe com leite",
    quantidade: 2,
    descricao: "Xicara media de café da melhor qualidade, misturado com leite.",
    categorias: "Bebidas, café",
    valor: "R$ 7,00",
    foto: "./assets/cafe-com-leite.png",
  },
  {
    nome: "Suco de laranja",
    quantidade: 0,
    descricao: "Copo de 400ml de suco de laranja, com gelo e acucar opcionais.",
    categorias: "Bebidas, suco",
    valor: "R$ 8,00",
    foto: "./assets/suco-de-laranja.png",
  },
];

// Função para carregar produtos na tabela
function carregarProdutos() {
  const estoqueTableBody = document.getElementById("estoque-table-body");
  estoqueTableBody.innerHTML = "";

  produtos.forEach(function (produto, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td onclick="abrirDetalhesDoProduto(${index})" style="cursor: pointer;">
            ${produto.nome}<br><span class="descricao-produto">${produto.descricao}</span></td>
            <td id="quantidade-produto-${index}">
                ${produto.quantidade}
                <span class="estoque-status ${getEstoqueStatusClasse(
                  produto.quantidade
                )}">${getEstoqueStatus(produto.quantidade)}</span>
            </td>
        `;

    estoqueTableBody.appendChild(row);
  });
}

function getEstoqueStatus(quantidade) {
  if (quantidade === 0) {
    return "Fora de Estoque";
  } else if (quantidade < 5) {
    return "Estoque Baixo";
  } else {
    return "";
  }
}

function getEstoqueStatusClasse(quantidade) {
    if (quantidade === 0) {
      return "estoque-fora";
    } else if (quantidade < 5) {
      return "estoque-baixo";
    } else {
      return "";
    }
  }

function adicionarProduto() {
  window.location.href = "adicionar/adicionar.html";
}

function pesquisarProdutos() {
  const textoPesquisa = document.getElementById("pesquisar-produto").value.toLowerCase();
  const estoqueTableBody = document.getElementById("estoque-table-body");

  produtos.forEach(function (produto, index) {
    const nomeProduto = produto.nome.toLowerCase();
    const row = estoqueTableBody.children[index];

    if (nomeProduto.includes(textoPesquisa)) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}

// Carrega os produtos quando a página é carregada
function abrirDetalhesDoProduto(index) {
  const produto = produtos[index];
  window.location.href = "produto/produto.html?produto=" + encodeURIComponent(produto.nome);
}


window.onload = carregarProdutos;
