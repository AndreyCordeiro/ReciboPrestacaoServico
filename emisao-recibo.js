function duasVias() {
    let duasVias = document.getElementById('duasvias');

    if (duasVias.checked) {
        //fazer emitir duas vias do recibo
    }
}

function imprimir() {
    window.print();
}

document.getElementById('view-recibo-dinheiro').style.display = "none";
document.getElementById('view-recibo-cheque').style.display = "none";
document.getElementById('view-recibo-pix').style.display = "none";
document.getElementById('view-recibo-trans-dep').style.display = "none";
document.getElementById('view-recibo-cartao').style.display = "none";

function gerarRecibo() {
    document.getElementById('main').style.display = "none";

    //Radio buttons
    let pagDinheiro = document.getElementById('btn-pagamento-dinheiro');
    let pagPix = document.getElementById('btn-pagamento-pix');
    let pagCheque = document.getElementById('btn-pagamento-cheque');
    let pagTransDep = document.getElementById('btn-pagamento-transferencia-deposito');
    let pagCartao = document.getElementById('btn-pagamento-cartao');

    //Valor dos campos
    let numeroRecibo = document.getElementById('numero-recibo').value;
    let contratante = document.getElementById('contratante').value;
    let cpfCnpjCliente = document.getElementById('cpf-cnpj-cliente').value;
    let valorTotalRecibo = document.getElementById('valor-recibo').value;
    let referenteA = document.getElementById('recibo-referente-a').value;
    let cidadePrestador = document.getElementById('cidade-ps').value;
    let dataRecibo = document.getElementById('placeholderSysDate').value;
    let estadoPrestador = document.getElementById('estado-ps').value;
    let endereco = document.getElementById('endereco-ps').value;
    let numeroCasa = document.getElementById('numero-ps').value;
    let bairro = document.getElementById('bairro-ps').value;
    let cep = document.getElementById('cep-ps').value;
    let cidade = document.getElementById('cidade-ps').value;
    let cpfCnpjPrestador = document.getElementById('cpf-cnpj-prestador').value;
    let numeroPrestador = document.getElementById('numero-prestador').value;
    let quemRecebeu = document.getElementById('quem-recebeu-fm').value;
    let chavePix = document.getElementById('chave-fm').value;
    let instituicaoPix = document.getElementById('instituicao-banco-fm').value;
    let numeroCheque = document.getElementById('numero-cheque-fm').value;
    let banco = document.getElementById('banco-fm').value;
    let agencia = document.getElementById('agencia-fm').value;
    let chequeBomPara = document.getElementById('bom-para-fm').value;
    let contaFm = document.getElementById('conta-fm').value;
    let agenciaFm = document.getElementById('agencia-trans-dep-fm').value;
    let dataFm = document.getElementById('data-trans-dep-fm').value;
    let bancoFmTd = document.getElementById('banco-fm-td').value;
    let favorecidoFm = document.getElementById('favorecido-fm').value;
    let numeroDocumentoFmTd = document.getElementById('numero-doc-fm-td').value;

    if (pagDinheiro.checked) {
        document.getElementById('view-recibo-dinheiro').style.display = "block";

        document.getElementById('numero-recibo-dinheiro').innerHTML = "Nº: " + numeroRecibo;
        document.getElementById('valor-total-dinheiro').innerHTML = "R$ " + valorTotalRecibo + "#";
        document.getElementById('conteudo-principal-dinheiro').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
            ", a importância de " + valorTotalRecibo + " referente à " + referenteA + ".";
        document.getElementById('cidade-data-servico-dinheiro').innerHTML = cidadePrestador + ", " + dataRecibo;
        document.getElementById('estado-view-dinheiro').innerHTML = "estadoPrestador.value";
        document.getElementById('info-endereco-dinheiro').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
            cep + ", " + cidade + " - " + estadoPrestador;
        document.getElementById('cpf-cnpj-view-dinheiro').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
        document.getElementById('numero-telefone-view-dinheiro').innerHTML = numeroPrestador;
    } else if (pagPix.checked) {
        document.getElementById('view-recibo-pix').style.display = "block";

        document.getElementById('numero-recibo-pix').innerHTML = "Nº: " + numeroRecibo;
        document.getElementById('valor-total-pix').innerHTML = "R$ " + valorTotalRecibo + "#";
        document.getElementById('conteudo-principal-pix').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
            ", a importância de " + valorTotalRecibo + " referente à " + referenteA + ".";
        document.getElementById("dynamic-field-pix").innerHTML = "Pagamento recebido por: " + quemRecebeu + " - chave pix: " + chavePix + " - " + instituicaoPix;
        document.getElementById('cidade-data-servico-pix').innerHTML = cidadePrestador + ", " + dataRecibo;
        document.getElementById('estado-view-pix').innerHTML = estadoPrestador;
        document.getElementById('info-endereco-pix').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
            cep + ", " + cidade + " - " + estadoPrestador;
        document.getElementById('cpf-cnpj-view-pix').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
        document.getElementById('numero-telefone-view-pix').innerHTML = numeroPrestador;
    } else if (pagCheque.checked) {
        document.getElementById('view-recibo-cheque').style.display = "block";

        document.getElementById('numero-recibo-resultado-cheque').innerHTML = "Nº: " + numeroRecibo;
        document.getElementById('valor-total-resultado-cheque').innerHTML = "R$ " + valorTotalRecibo + "#";
        document.getElementById('conteudo-principal-cheque').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
            ", a importância de " + valorTotalRecibo + " referente à " + referenteA + ".";
        document.getElementById("dynamic-field-1-cheque").innerHTML = "O Pagamento foi efetuado através do cheque n°: " + numeroCheque + " do Banco: " + banco + ", Agência: " + agencia;
        document.getElementById("dynamic-field-2-cheque").innerHTML = "Para todos os fins de direito, a validade do presente Recibo fica condicionada ao recebimento do cheque acima identificado.";
        document.getElementById("dynamic-field-3-cheque").innerHTML = "Cheque bom para: " + chequeBomPara;
        document.getElementById('cidade-data-servico-cheque').innerHTML = cidadePrestador + ", " + dataRecibo;
        document.getElementById('estado-view-cheque').innerHTML = estadoPrestador;
        document.getElementById('info-endereco-cheque').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
            cep + ", " + cidade + " - " + estadoPrestador;
        document.getElementById('cpf-cnpj-view-cheque').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
        document.getElementById('numero-telefone-view-cheque').innerHTML = numeroPrestador;
    } else if (pagTransDep.checked) {
        document.getElementById('view-recibo-trans-dep').style.display = "block";

        document.getElementById('numero-recibo-trans-dep').innerHTML = "Nº: " + numeroRecibo;
        document.getElementById('valor-total-trans-dep').innerHTML = "R$ " + valorTotalRecibo + "#";
        document.getElementById('conteudo-principal-trans-dep').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
            ", a importância de " + valorTotalRecibo + " referente à " + referenteA + ".";
        document.getElementById("dynamic-field-1-trans-dep").innerHTML = "O Pagamento foi efetuado através do depósito/Transferência bancário realizado em " + dataFm + ", na conta: " + contaFm + ", agência: " + agenciaFm + ", banco : " + bancoFmTd + ". Favorecido: " + favorecidoFm + ".";
        document.getElementById("dynamic-field-2-trans-dep").innerHTML = "Número do documento: " + numeroDocumentoFmTd;
        document.getElementById('cidade-data-servico-trans-dep').innerHTML = cidadePrestador + ", " + dataRecibo;
        document.getElementById('estado-view-trans-dep').innerHTML = estadoPrestador;
        document.getElementById('info-endereco-trans-dep').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " + cep + ", " + cidade + " - " + estadoPrestador;
        document.getElementById('cpf-cnpj-view-trans-dep').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
        document.getElementById('numero-telefone-trans-dep').innerHTML = numeroPrestador;
    } else if (pagCartao.checked) {
        document.getElementById('view-recibo-cartao').style.display = "block";

        document.getElementById('numero-recibocartao').innerHTML = "Nº: " + numeroRecibo;
        document.getElementById('valor-total-cartao').innerHTML = "R$ " + valorTotalRecibo + "#";
        document.getElementById('conteudo-principal-cartao').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
            ", a importância de " + valorTotalRecibo + " referente à " + referenteA + ".";
        document.getElementById("dynamic-field-1-cartao").innerHTML = "Pagamento efetuado através de Cartão de Crédito/Débito";
        document.getElementById('cidade-data-servico-cartao').innerHTML = cidadePrestador + ", " + dataRecibo;
        document.getElementById('estado-view-cartao').innerHTML = estadoPrestador;
        document.getElementById('info-endereco-cartao').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " + cep + ", " + cidade + " - " + estadoPrestador;
        document.getElementById('cpf-cnpj-view-cartao').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
        document.getElementById('numero-telefone-cartao').innerHTML = numeroPrestador;
    }
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