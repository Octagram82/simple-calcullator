function insert(value) {
    if (document.getElementById('result-screen').value == '0') {
        document.getElementById('result-screen').value = value;
    } else {
        document.getElementById('result-screen').value += value;
    }
}

function calculate() {
    var resultScreen = eval(document.getElementById('result-screen').value);
    document.getElementById('result-screen').value = resultScreen;
}

function clearResult() {
    document.getElementById('result-screen').value = '0';
}
function backspace() {
    var value = document.getElementById('result-screen').value;
    document.getElementById('result-screen').value = value.substring(0, value.length - 1);
}