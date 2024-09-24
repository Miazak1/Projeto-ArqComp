// Função para alternar entre seções
function mostrarSecao(secaoId) {
    // Esconde todas as seções
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function(secao) {
        secao.style.display = 'none';
    });

    // Mostra apenas a seção clicada
    document.getElementById(secaoId).style.display = "block";
}

// Função de conversão
function converter() {
    var numeroDecimal = document.getElementById('numeroDecimal').value;

    if (numeroDecimal !== '') {
        var binario = Number(numeroDecimal).toString(2);
        var octal = Number(numeroDecimal).toString(8);
        var hexadecimal = Number(numeroDecimal).toString(16).toUpperCase();

        document.getElementById('binario').innerHTML = binario;
        document.getElementById('octal').innerHTML = octal;
        document.getElementById('hexadecimal').innerHTML = hexadecimal;
    }
}

// Função de soma
function somar() {
    var primeiroNumero = document.getElementById('primeiroNumeroSoma').value;
    var segundoNumero = document.getElementById('segundoNumeroSoma').value;

    if (primeiroNumero < 1 || segundoNumero < 1) {
        alert("Digite um número válido!");
    } else {
        var somaDecimal = Number(primeiroNumero) + Number(segundoNumero);

        document.getElementById('somaBinario').innerHTML = somaDecimal.toString(2);
        document.getElementById('somaOctal').innerHTML = somaDecimal.toString(8);
        document.getElementById('somaHexadecimal').innerHTML = somaDecimal.toString(16).toUpperCase();
    }
}

// Função de subtração
function subtrair() {
    var primeiroNumero = document.getElementById('primeiroNumeroSub').value;
    var segundoNumero = document.getElementById('segundoNumeroSub').value;

    if (primeiroNumero < 1 || segundoNumero < 1) {
        alert("Digite um número válido!");
    } else {
        var subtracaoDecimal = Number(primeiroNumero) - Number(segundoNumero);

        document.getElementById('subtracaoBinario').innerHTML = subtracaoDecimal.toString(2);
        document.getElementById('subtracaoOctal').innerHTML = subtracaoDecimal.toString(8);
        document.getElementById('subtracaoHexadecimal').innerHTML = subtracaoDecimal.toString(16).toUpperCase();
    }
}
