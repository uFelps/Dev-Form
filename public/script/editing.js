let form = document.getElementById('form'); //pegando o formulário
let telaConfirm = document.getElementById('confirm'); //pegando a tela de confirmação

function validarCampos() {
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let side = document.getElementById('side').value;
    let cargo = document.getElementById('cargo').value;
    let tec = document.getElementById('tec').value;

    //console.log(`Nome: ${nome == ''} || ${nome.length < 3}`);

    //verificando se os campos foram digitados corretamente
    if (nome == '' || nome.length < 3) {
        alert("Preencha o Campo 'Nome' Corretamente!");
        document.getElementById('nome').focus();
        return;

    } else if (cpf.value == '' || cpf.length < 11) {
        alert("Preencha o Campo 'CPF' Corretamente!");
        document.getElementById('cpf').focus();
        return;

    } else if (side == '' || side == '- Selecione -') {
        alert("Preencha o Campo 'Side' Corretamente!");
        document.getElementById('side').focus();
        return;

    } else if (cargo == '' || cargo == '- Selecione -') {
        alert("Preencha o Campo 'Cargo' Corretamente!");
        document.getElementById('cargo').focus();
        return;

    } else if (tec == '') {
        alert("Preencha o Campo 'Principal Tecnologia' Corretamente!");
        document.getElementById('tec').focus();
        return;

    } else { //caso os campos estajam em ordem, abra a tela de confimação
        telaConfirm.setAttribute("style", "display: inline");
    }
}

function submit() { //ativada quando o usuário confirmar a alteração
    form.submit();
}

function voltar() { //ativada quando o usuário desistir da confirmação de alteração
    telaConfirm.setAttribute("style", "display: none");
    document.getElementById('nome').focus();
}