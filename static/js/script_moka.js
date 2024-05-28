// script_moka.js
window.onload = function() {
    // Verifica se há parâmetros na URL para determinar se o usuário está editando um produto
    const urlParams = new URLSearchParams(window.location.search);
    const editarIndex = urlParams.get('editar');
    
    if (editarIndex !== null) {
        // Obtém o índice do produto a ser editado
        const index = parseInt(editarIndex);
        
        // Obtém o carrinho do armazenamento local
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        
        // Verifica se o índice está dentro dos limites do carrinho
        if (index >= 0 && index < carrinho.length) {
            const produto = carrinho[index];
            
            // Preenche os campos da página com os detalhes do produto
            document.getElementById('moka-quantidade').value = produto.quantidade;
            document.getElementById('moka-tipo').value = produto.cafe;
            document.getElementById('moka-leite').value = produto.leite;
            document.getElementById('moka-observacoes').value = produto.observacoes;
        } else {
            console.error("Índice de produto inválido.");
        }
    }
};

function adicionarAoCarrinho() {
    // Captura informações do produto
    const nomeProduto = "Moka";
    const valorProduto = 8.99;
    const quantidadeProduto = parseInt(document.getElementById('moka-quantidade').value);
    const tipoCafe = document.getElementById('moka-tipo').value;
    const tipoLeite = document.getElementById('moka-leite').value;
    const observacoes = document.getElementById('moka-observacoes').value;

    // Constrói o objeto do item do carrinho
    const item = {
        nome: nomeProduto,
        preco: valorProduto,
        quantidade: quantidadeProduto,
        cafe: tipoCafe,
        leite: tipoLeite,
        observacoes: observacoes,
        imagem: "../static/image/menu-5.png" // Aqui você pode adicionar a URL da imagem correspondente ao produto
    };

    // Obtém o carrinho do armazenamento local
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Verifica se o produto já está no carrinho
    const index = carrinho.findIndex(prod => prod.nome === nomeProduto);
    if (index !== -1) {
        // Se o produto já estiver no carrinho, substitui a quantidade existente pela nova quantidade
        carrinho[index].quantidade = quantidadeProduto;
        carrinho[index].leite = tipoLeite;
        carrinho[index].cafe = tipoCafe;
        carrinho[index].observacoes = observacoes;
    } else {
        // Se o produto não estiver no carrinho, adiciona o novo item
        carrinho.push(item);
    }

    // Atualiza o carrinho no armazenamento local
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Redireciona para a página do carrinho
    window.location.href = "carrinho.html";
}





function increaseQuantity(elementId) {
    var inputElement = document.getElementById(elementId);
    var currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
}

function decreaseQuantity(elementId) {
    var inputElement = document.getElementById(elementId);
    var currentValue = parseInt(inputElement.value);
    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
    }
}




