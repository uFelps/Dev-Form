let form = document.getElementById('form'); //pegando o formulario

function validarCampos() {
    let nome = document.getElementById('nome').value; //pegando cada input e seus valores
    let cpf = document.getElementById('cpf').value;
    let side = document.getElementById('side').value;
    let cargo = document.getElementById('cargo').value;
    let tec = document.getElementById('tec').value;

    //console.log(`Nome: ${nome == ''} || ${nome.length < 3} || ${typeof nome}`);

    //verificando se os campos foram preenchidos corretamente
    if (nome == '' || nome.length < 3) { //caso o nome venha vazio OU tamanho do nome menor que 3...
        alert("Preencha o Campo 'Nome' Corretamente!"); //mensagem de erro
        document.getElementById('nome').focus(); //retorna ao campo
        return;

    } else if (cpf.value == '' || cpf.length < 11) { //caso o cpf venha vazio OU tamanho do cpf menor que 11...
        alert("Preencha o Campo 'CPF' Corretamente!"); //mensagem de erro
        document.getElementById('cpf').focus(); //retorna ao campo
        return;

    } else if (side == '' || side == '- Selecione -') { //caso o side venha vazio OU não selecionado...
        alert("Preencha o Campo 'Side' Corretamente!");
        document.getElementById('side').focus();
        return;

    } else if (cargo == '' || cargo == '- Selecione -') { //caso o cargo venha vazio OU não selecionado...
        alert("Preencha o Campo 'Cargo' Corretamente!");
        document.getElementById('cargo').focus();
        return;

    } else if (tec == '') { //caso o tec venha vazio OU o tamanho da string menor que 3...
        alert("Preencha o Campo 'Principal Tecnologia' Corretamente!");
        document.getElementById('tec').focus();
        return;

    } else { //caso todos os campos foram preenchidos corretamente, faz o submit do formulário
        form.submit();

    }
}