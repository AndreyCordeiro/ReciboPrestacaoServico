function menuPagamentoPix() {
    //Divs
    let divPix = document.getElementById('pagamento-pix');
    let divCheque = document.getElementById('pagamento-cheque');
    let divTransDep1 = document.getElementById('pagamento-trans-dep-1');
    let divTransDep2 = document.getElementById('pagamento-trans-dep-2');

    //Radio buttons
    let pagDinheiro = document.getElementById('btn-pagamento-dinheiro');
    let pagPix = document.getElementById('btn-pagamento-pix');
    let pagCheque = document.getElementById('btn-pagamento-cheque');
    let pagTransDep = document.getElementById('btn-pagamento-transferencia-deposito');
    let pagCartao = document.getElementById('btn-pagamento-cartao');

    if (pagDinheiro.checked || pagCartao.checked) {
        divPix.hidden = true;
        divCheque.hidden = true;
        divTransDep1.hidden = true;
        divTransDep2.hidden = true;
    } else if (pagPix.checked) {
        //Mostrar opção selecionada
        divPix.hidden = false;

        //Esconder as demais
        divCheque.hidden = true;
        divTransDep1.hidden = true;
        divTransDep2.hidden = true;
    } else if (pagCheque.checked) {
        //Mostrar opção selecionada
        divCheque.hidden = false;

        //Esconder as demais
        divPix.hidden = true;
        divTransDep1.hidden = true;
        divTransDep2.hidden = true;
    } else if (pagTransDep.checked) {
        //Mostrar opção selecionada
        divTransDep1.hidden = false;
        divTransDep2.hidden = false;

        //Esconder as demais
        divPix.hidden = true;
        divCheque.hidden = true;
    }
}

//Chamo a função para ser executada ao abrir o site
menuPagamentoPix();

function duasVias() {
    let duasVias = document.getElementById('duasvias');

    if (duasVias.checked) {
        //fazer emitir duas vias do recibo
    }
}

function gerarRecibo() {

}