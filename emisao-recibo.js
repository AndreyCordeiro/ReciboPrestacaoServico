function duasVias() {
    let duasVias = document.getElementById('duasvias');

    if (duasVias.checked) {
        //fazer emitir duas vias do recibo
    }
}

function gerarRecibo() {
}

function requiredInputs() {
    //Radio buttons
    let pagDinheiro = document.getElementById('btn-pagamento-dinheiro');
    let pagPix = document.getElementById('btn-pagamento-pix');
    let pagCheque = document.getElementById('btn-pagamento-cheque');
    let pagTransDep = document.getElementById('btn-pagamento-transferencia-deposito');
    let pagCartao = document.getElementById('btn-pagamento-cartao');

    //Acessando somente os campos obrigatórios das formas de pagamento
    //Dados da Forma de Pagamento Pix
    let quemRecebeuFm = document.getElementById('quem-recebeu-fm');
    let instituicaoBancoFm = document.getElementById('instituicao-banco-fm');
    let chaveFm = document.getElementById('chave-fm');

    //Dados da Forma de Pagamento Cheque
    let numeroChequeFm = document.getElementById('numero-cheque-fm');
    let bancoFm = document.getElementById('banco-fm');
    let agenciaFm = document.getElementById('agencia-fm');
    let bomParaFm = document.getElementById('bom-para-fm');

    // //Dados da Forma de Pagamento Transferencia/Depósito
    let contaFm = document.getElementById('conta-fm');
    let agenciaTransDepFm = document.getElementById('agencia-trans-dep-fm');
    let bancoFmTd = document.getElementById('banco-fm-td');
    let favorecidoFm = document.getElementById('favorecido-fm');

    if (pagDinheiro.checked || pagCartao.checked) {
        //Pix
        quemRecebeuFm.removeAttribute("required");
        instituicaoBancoFm.removeAttribute("required");
        chaveFm.removeAttribute("required");

        //Cheque
        numeroChequeFm.removeAttribute("required");
        bancoFm.removeAttribute("required");
        agenciaFm.removeAttribute("required");
        bomParaFm.removeAttribute("required");

        //Transferencia/Depósito
        contaFm.removeAttribute("required");
        agenciaTransDepFm.removeAttribute("required");
        bancoFmTd.removeAttribute("required");
        favorecidoFm.removeAttribute("required");
    } else if (pagPix.checked) {
        //Cheque
        numeroChequeFm.removeAttribute("required");
        bancoFm.removeAttribute("required");
        agenciaFm.removeAttribute("required");
        bomParaFm.removeAttribute("required");

        //Transferencia/Depósito
        contaFm.removeAttribute("required");
        agenciaTransDepFm.removeAttribute("required");
        bancoFmTd.removeAttribute("required");
        favorecidoFm.removeAttribute("required");
    } else if (pagCheque.checked) {
        //Pix
        quemRecebeuFm.removeAttribute("required");
        instituicaoBancoFm.removeAttribute("required");
        chaveFm.removeAttribute("required");

        //Transferencia/Depósito
        contaFm.removeAttribute("required");
        agenciaTransDepFm.removeAttribute("required");
        bancoFmTd.removeAttribute("required");
        favorecidoFm.removeAttribute("required");
    } else if (pagTransDep.checked) {
        //Pix
        quemRecebeuFm.removeAttribute("required");
        instituicaoBancoFm.removeAttribute("required");
        chaveFm.removeAttribute("required");

        //Cheque
        numeroChequeFm.removeAttribute("required");
        bancoFm.removeAttribute("required");
        agenciaFm.removeAttribute("required");
        bomParaFm.removeAttribute("required");
    }
}