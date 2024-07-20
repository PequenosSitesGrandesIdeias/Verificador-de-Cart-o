document.getElementById('button').addEventListener('click', function () {
    var nome = document.getElementById('nomeCartaoInput');
    var numero = document.getElementById('numeroCartaoInput');
    var cvv = document.getElementById('CVVInput');
    var ano = document.getElementById('AAInput');
    var mes = document.getElementById('MMInput');
    var thanos = document.getElementById('thanos');
    var senha = document.getElementById('senhaCartaoInput');
    var audio = new Audio('pegue.mp3');
    if (nome.value == '' ||
        numero.value == '' ||
        cvv.value == '' ||
        ano.value == '' ||
        mes.value == '' ||
        senha.value == '')
        alert('Preencha todos os campos');
    else {
        thanos.style.display = 'flex'
        audio.play();
        setTimeout(function () {
            thanos.style.display = 'none'
        }, 10000)
    }
})