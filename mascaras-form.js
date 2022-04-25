function mascaraMutuario(o, f) {
    v_obj = o
    v_fun = f
    setTimeout('execmascara()', 1)
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpfCnpj(v) {
    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    if (v.length <= 14) { //CPF
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2")

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    } else { //CNPJ
        //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, "$1.$2")

        //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")

        //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2")

        //Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2")
    }
    return v
}

//Máscara do campo Data
var input = document.querySelectorAll('.input-data')[0];
var input2 = document.querySelectorAll('.input-bom-para')[0];
var input3 = document.querySelectorAll('.input-data-td')[0];

var dateInputMask = function dateInputMask(elm) {
    elm.addEventListener('keypress', function (e) {
        if (e.keyCode < 47 || e.keyCode > 57) {
            e.preventDefault();
        }

        var len = elm.value.length;

        if (len !== 1 || len !== 3) {
            if (e.keyCode == 47) {
                e.preventDefault();
            }
        }

        if (len === 2) {
            elm.value += '/';
        }

        if (len === 5) {
            elm.value += '/';
        }
    });
};

dateInputMask(input);
dateInputMask(input2);
dateInputMask(input3);


var campoInput = document.getElementById("valor-recibo");
//Máscara do campo Valor do Recibo
function formatarMoeda() {
    let valor = campoInput.value;

    if (campoInput.value.length > 2) {
        valor = parseInt(valor.replace(/[\D]+/g, ""));
        valor = valor + "";

        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        campoInput.value = valor;
        if (valor == "NaN") campoInput.value = "";

        if (campoInput.value.charAt(0) == ",") {
            campoInput.value = "0" + campoInput.value;
        }
    }
}

function addZero() {
    if (campoInput.value.length < 3 && campoInput.value.charAt(0) !== ",") {
        campoInput.value = campoInput.value + ",00";
    }

    if (campoInput.value.charAt(0) == ",") {
        campoInput.value = "0" + campoInput.value;
    }
}

campoInput.addEventListener("keyup", formatarMoeda);
campoInput.addEventListener("blur", addZero);

//Máscara do campo telefone
const phone = document.getElementById('numero-prestador');
phone.addEventListener('input', function (e) {
    let arr = this.value.replace(/[^\dA-Z]/g, '').replace(/[\s-)(]/g, '').split('');
    if (arr.length >= 1) arr.splice(0, 0, '(');
    if (arr.length > 3) arr.splice(3, 0, ') ');
    if (arr.length > 9) arr.splice(9, 0, '-');
    this.value = arr.toString().replace(/[,]/g, '');
});