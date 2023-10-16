// Função para obter o parâmetro 'produto' da URL
function getProdutoFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("produto");
}

// Função para carregar os detalhes do produto na página
function carregarDetalhesDoProduto() {
  const nomeProduto = getProdutoFromURL();

  if (nomeProduto) {
    // Encontre o produto com base no nome
    const produto = produtos.find(function (p) {
      return p.nome === nomeProduto;
    });

    if (produto) {
      // Atualiza o título na header
      const headerTitulo = document.querySelector(".produto-header-center h1");
      headerTitulo.textContent = produto.nome;

      // Atualiza a imagem na header
      const headerImagem = document.querySelector(".produto-header-center img");
      headerImagem.src = "../" + produto.foto;
      headerImagem.alt = produto.nome;

      const detalhesProduto = document.getElementById("detalhes-produto");
      detalhesProduto.innerHTML = `
                <p><span>Estoque:</span><br>${produto.quantidade}</p>
                <p><span>Categorias:</span><br> ${produto.categorias}</p>
                <p><span>Valor de venda:</span><br> ${produto.valor}</p>
                <p><span>Descrição:</span><br> ${produto.descricao}</p>
            `;
    }
  }
}

function excluirProduto() {
  const nomeProduto = getProdutoFromURL();

  if (nomeProduto) {
    // Encontre o produto com base no nome
    let indiceProduto = -1;
    for (const i = 0; i < produtos.length; i++) {
      if (produtos[i].nome === nomeProduto) {
        indiceProduto = i;
        break;
      }
    }

    if (indiceProduto !== -1) {
      // Remove o produto da lista
      produtos.splice(indiceProduto, 1);

      // Redirecione de volta para a página de estoque (ou outra página)
      window.location.href = "/estoque.html";
    }
  }
}

// Carrega os detalhes do produto quando a página é carregada
window.onload = carregarDetalhesDoProduto;
