function duasVias() {
    let duasVias = document.getElementById('duasvias');

    if (duasVias.checked) {
        //fazer emitir duas vias do recibo
    }
}

function imprimir() {
    window.print();
}

document.getElementById('view-recibo-dinheiro').hidden = true;
document.getElementById('view-recibo-cheque').hidden = true;
document.getElementById('view-recibo-pix').hidden = true;
document.getElementById('view-recibo-trans-dep').hidden = true;
document.getElementById('view-recibo-cartao').hidden = true;

// https://stackoverflow.com/questions/22514597/submit-form-only-if-all-required-fields-are-full
function gerarRecibo(tipoPagamento) {
    if (validateForm(document.getElementById('form-all'))) {
        document.getElementById('main').hidden = true;


        //Radio buttons
        let pagDinheiro = document.getElementById('btn-pagamento-dinheiro');
        let pagPix = document.getElementById('btn-pagamento-pix');
        let pagCheque = document.getElementById('btn-pagamento-cheque');
        let pagTransDep = document.getElementById('btn-pagamento-transferencia-deposito');
        let pagCartao = document.getElementById('btn-pagamento-cartao');

        //#region Valor dos campos
        let numeroRecibo = document.getElementById('numero-recibo').value;
        let contratante = document.getElementById('contratante').value;
        let cpfCnpjCliente = document.getElementById('cpf-cnpj-cliente').value;
        let valorTotalRecibo = document.getElementById('valor-recibo').value;
        let referenteA = document.getElementById('recibo-referente-a').value;
        let nomePrestador = document.getElementById('nome-ps').value;
        let cidadeCliente = document.getElementById('cidade').value;
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
        //#endregion

        let divRecibo;

        if (pagDinheiro.checked) {
            divRecibo = 'view-recibo-dinheiro';

            document.getElementById('numero-recibo-dinheiro').innerHTML = "Nº: " + numeroRecibo;
            document.getElementById('valor-total-dinheiro').innerHTML = "R$ " + valorTotalRecibo + "#";
            document.getElementById('conteudo-principal-dinheiro').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
                ", a importância de " + valorTotalRecibo.extenso() + " referente à " + referenteA + ".";
            document.getElementById('cidade-data-servico-dinheiro').innerHTML = cidadeCliente + ", " + dataRecibo;
            document.getElementById('prestador-view-dinheiro').innerHTML = nomePrestador;
            document.getElementById('info-endereco-dinheiro').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
                cep + ", " + cidade + " - " + estadoPrestador;
            document.getElementById('cpf-cnpj-view-dinheiro').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
            document.getElementById('numero-telefone-view-dinheiro').innerHTML = numeroPrestador;
        } else if (pagPix.checked) {
            divRecibo = 'view-recibo-pix';

            document.getElementById('numero-recibo-pix').innerHTML = "Nº: " + numeroRecibo;
            document.getElementById('valor-total-pix').innerHTML = "R$ " + valorTotalRecibo + "#";
            document.getElementById('conteudo-principal-pix').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
                ", a importância de " + valorTotalRecibo.extenso() + " referente à " + referenteA + ".";
            document.getElementById("dynamic-field-pix").innerHTML = "Pagamento recebido por: " + quemRecebeu + " - chave pix: " + chavePix + " - " + instituicaoPix;
            document.getElementById('cidade-data-servico-pix').innerHTML = cidadeCliente + ", " + dataRecibo;
            document.getElementById('prestador-view-pix').innerHTML = nomePrestador;
            document.getElementById('info-endereco-pix').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
                cep + ", " + cidade + " - " + estadoPrestador;
            document.getElementById('cpf-cnpj-view-pix').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
            document.getElementById('numero-telefone-view-pix').innerHTML = numeroPrestador;
        } else if (pagCheque.checked) {
            divRecibo = 'view-recibo-cheque';

            document.getElementById('numero-recibo-resultado-cheque').innerHTML = "Nº: " + numeroRecibo;
            document.getElementById('valor-total-resultado-cheque').innerHTML = "R$ " + valorTotalRecibo + "#";
            document.getElementById('conteudo-principal-cheque').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
                ", a importância de " + valorTotalRecibo.extenso() + " referente à " + referenteA + ".";
            document.getElementById("dynamic-field-1-cheque").innerHTML = "O Pagamento foi efetuado através do cheque n°: " + numeroCheque + " do Banco: " + banco + ", Agência: " + agencia;
            document.getElementById("dynamic-field-2-cheque").innerHTML = "Para todos os fins de direito, a validade do presente Recibo fica condicionada ao recebimento do cheque acima identificado.";
            document.getElementById("dynamic-field-3-cheque").innerHTML = "Cheque bom para: " + chequeBomPara;
            document.getElementById('cidade-data-servico-cheque').innerHTML = cidadeCliente + ", " + dataRecibo;
            document.getElementById('prestador-view-cheque').innerHTML = nomePrestador;
            document.getElementById('info-endereco-cheque').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " +
                cep + ", " + cidade + " - " + estadoPrestador;
            document.getElementById('cpf-cnpj-view-cheque').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
            document.getElementById('numero-telefone-view-cheque').innerHTML = numeroPrestador;
        } else if (pagTransDep.checked) {
            divRecibo = 'view-recibo-trans-dep';

            document.getElementById('numero-recibo-trans-dep').innerHTML = "Nº: " + numeroRecibo;
            document.getElementById('valor-total-trans-dep').innerHTML = "R$ " + valorTotalRecibo + "#";
            document.getElementById('conteudo-principal-trans-dep').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
                ", a importância de " + valorTotalRecibo.extenso() + " referente à " + referenteA + ".";
            document.getElementById("dynamic-field-1-trans-dep").innerHTML = "O Pagamento foi efetuado através do depósito/Transferência bancário realizado em " + dataFm + ", na conta: " + contaFm + ", agência: " + agenciaFm + ", banco : " + bancoFmTd + ". Favorecido: " + favorecidoFm + ".";
            document.getElementById("dynamic-field-2-trans-dep").innerHTML = "Número do documento: " + numeroDocumentoFmTd;
            document.getElementById('cidade-data-servico-trans-dep').innerHTML = cidadeCliente + ", " + dataRecibo;
            document.getElementById('prestador-view-trans-dep').innerHTML = nomePrestador;
            document.getElementById('info-endereco-trans-dep').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " + cep + ", " + cidade + " - " + estadoPrestador;
            document.getElementById('cpf-cnpj-view-trans-dep').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
            document.getElementById('numero-telefone-trans-dep').innerHTML = numeroPrestador;
        } else if (pagCartao.checked) {
            divRecibo = 'view-recibo-cartao';

            document.getElementById('numero-recibo-cartao"').innerHTML = "Nº: " + numeroRecibo;
            document.getElementById('valor-total-cartao').innerHTML = "R$ " + valorTotalRecibo + "#";
            document.getElementById('conteudo-principal-cartao').innerHTML = "Recebi(emos) de " + contratante + " - CPF/CNPJ nº " + cpfCnpjCliente +
                ", a importância de " + valorTotalRecibo.extenso() + " referente à " + referenteA + ".";
            document.getElementById("dynamic-field-1-cartao").innerHTML = "Pagamento efetuado através de Cartão de Crédito/Débito.";
            document.getElementById('cidade-data-servico-cartao').innerHTML = cidadeCliente + ", " + dataRecibo;
            document.getElementById('prestador-view-cartao').innerHTML = nomePrestador;
            document.getElementById('info-endereco-cartao').innerHTML = endereco + ", " + numeroCasa + ", " + bairro + " - CEP " + cep + ", " + cidade + " - " + estadoPrestador;
            document.getElementById('cpf-cnpj-view-cartao').innerHTML = "CPF/CNPJ: " + cpfCnpjPrestador;
            document.getElementById('numero-telefone-cartao').innerHTML = numeroPrestador;
        }
        document.getElementById(divRecibo).hidden = false;
    }
}

String.prototype.extenso = function (c) {
    var ex = [
        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
    ];
    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
    for (var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []) {
        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
        if (!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
        for (a = -1, l = v.length; ++a < l; t = "") {
            if (!(i = v[a] * 1)) continue;
            i % 100 < 20 && (t += ex[0][i % 100]) ||
            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
                ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
        }
        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
    }
    return r.join(e);
}

function requiredInputs(tipoPagamento) {

    //Acessando somente os campos obrigatórios das formas de pagamento
    //Dados da Forma de Pagamento Pix
    let quemRecebeuFmReq = document.getElementById('quem-recebeu-fm');
    let instituicaoBancoFmReq = document.getElementById('instituicao-banco-fm');
    let chaveFmReq = document.getElementById('chave-fm');

    //Dados da Forma de Pagamento Cheque
    let numeroChequeFmReq = document.getElementById('numero-cheque-fm');
    let bancoFmReq = document.getElementById('banco-fm');
    let agenciaFmReq = document.getElementById('agencia-fm');
    let bomParaFmReq = document.getElementById('bom-para-fm');

    // //Dados da Forma de Pagamento Transferencia/Depósito
    let contaFmReq = document.getElementById('conta-fm');
    let agenciaTransDepFmReq = document.getElementById('agencia-trans-dep-fm');
    let bancoFmTdReq = document.getElementById('banco-fm-td');
    let favorecidoFmReq = document.getElementById('favorecido-fm');


    function removeRequiredAll() {
        //#region Pix
        quemRecebeuFmReq.removeAttribute("required");
        instituicaoBancoFmReq.removeAttribute("required");
        chaveFmReq.removeAttribute("required");
        //#endregion

        //#region Cheque
        numeroChequeFmReq.removeAttribute("required");
        bancoFmReq.removeAttribute("required");
        agenciaFmReq.removeAttribute("required");
        bomParaFmReq.removeAttribute("required");
        //#endregion

        //#region Transferencia/Depósito
        contaFmReq.removeAttribute("required");
        agenciaTransDepFmReq.removeAttribute("required");
        bancoFmTdReq.removeAttribute("required");
        favorecidoFmReq.removeAttribute("required");
        //#endregion
    }

    switch (tipoPagamento) {

        case 'DINHEIRO':
            removeRequiredAll();
            break;
        case 'PIX':

            removeRequiredAll();

            //#region add required to Pix
            chaveFmReq.setAttribute("required", true);
            instituicaoBancoFmReq.setAttribute("required", true);
            quemRecebeuFmReq.setAttribute("required", true);
            //#endregion
            break;
        case 'CHEQUE':
            removeRequiredAll();

            //#region add required to Cheque
            numeroChequeFmReq.setAttribute("required", true);
            bancoFmReq.setAttribute("required", true);
            agenciaFmReq.setAttribute("required", true);
            bomParaFmReq.setAttribute("required", true);
            //#endregion
            break;
        case 'DEPOSITO':
            removeRequiredAll();

            //#region add required to Deposito
            contaFmReq.setAttribute("required", true);
            agenciaTransDepFmReq.setAttribute("required", true);
            bancoFmTdReq.setAttribute("required", true);
            favorecidoFmReq.setAttribute("required", true);
            //#endregion
            break;

    }
}


function validateForm(form) {
    for (let i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value === "" &&
            form.elements[i].getAttribute("id") &&
            form.elements[i].hasAttribute("required")) {
            // alert(form.elements[i].name + " não pode ser vazio");
            return false;
        }
    }
    return true;
}