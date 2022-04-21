function getSysDate() {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    document.getElementById("placeholderSysDate").value = day + '/0' + month + '/' + year;
}

function gerarRecibo() {

}