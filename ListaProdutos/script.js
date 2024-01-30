const produtos = [  {nome: "Computador", categoria: "Tecnologia", preco:"800"},
                    {nome: "Celular", categoria: "Tecnologia", preco:"400"},
                    {nome: "TV", categoria: "Tecnologia", preco:"1200"}]


let produtoTabela = document.getElementById("produtoLista");

    for(i=0; i<produtos.length; i++){
        let produtoTabelaLinha = document.createElement('tr');

        let produtoTabelaDadosNome = document.createElement('td');
        produtoTabelaDadosNome.innerHTML = produtos[i].nome;
        produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
        produtoTabela.appendChild(produtoTabelaLinha)

        let produtoTabelaDadosCategoria = document.createElement('td');
        produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
        produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
        produtoTabela.appendChild(produtoTabelaLinha)

        let produtoTabelaDadosPreco = document.createElement('td');
        produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
        produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
        produtoTabela.appendChild(produtoTabelaLinha)
    }