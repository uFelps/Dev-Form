const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

//db
const Developer = require('./database/tabelaDev');



//config
//handlebars
app.engine("handlebars", handlebars.engine({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");
app.use(express.static('public')); //exportando os arquivos estáticos

//bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());




//rotas
//home
app.get("/", function (req, res) {
    res.render('home', {
        style: 'home.css'
    });
});


//create - form(front end)
app.get("/form", function (req, res) { //renderizar a tela do formulário
    res.render('form', {
        style: 'form.css'
    });
});

//create - add(back end)
app.post("/add", function (req, res) { /// recebe os dados do formulário
    Developer.create({ //cria um novo registro com as seguintes informações 
        nome: req.body.nome, //pega os campos do formulário
        cpf: req.body.cpf,
        side: req.body.side,
        cargo: req.body.cargo,
        tecnologia: req.body.tecnologia,

    }).then(function () { //após criar o registro, renderiza a tela de confimação
        res.render('confirm', {
            style: 'confirm.css', //arquivo css
            message: 'Usuário Cadastrado com Sucesso!', //mensagem que sera exibida
        });

    }).catch(function (erro) { //ou a tela de erro
        res.render('confirm', {
            style: 'confirm.css', //arquivo css
            message: `Erro: ${erro}`, //mensagem que sera exibida
        });
    });

});


//read - main
app.get("/all", function (req, res) {
    Developer.findAll().then(function (developers) { //busca todos os registros da tabela developers e depois...
        res.render('allDevs', { //renderiza a tela allDevs
            style: 'allDevs.css', //arquivo css
            developers: developers, //json com todos os registros
        })
    });
});


//delete (frontend)
app.get("/delete/:id", function (req, res) {
    Developer.findAll({ //procura todos os devs com o id pedido
        where: {
            'id': req.params.id,

        }

    }).then(function (developer) { //depois renderiza a tela
        res.render('delScreen', {
            style: 'delScreen.css',
            id: developer[0].dataValues.id,
            nome: developer[0].dataValues.nome,
            cpf: developer[0].dataValues.cpf,
            side: developer[0].dataValues.side,
            cargo: developer[0].dataValues.cargo,
            tecnologia: developer[0].dataValues.tecnologia, // e passa essas informações para o arquivo
        });
    });
});


//delete (back end)
app.get("/del/:id", function (req, res) {
    Developer.destroy({ //função de delete
        where: { //deleta onde o..
            'id': req.params.id, //id recebido dos parametros da req
        }

    }).then(function () {
        res.render('confirm', { //e depois, renderiza a tela de confirmação
            style: 'confirm.css',
            message: 'Registro Deletado com Sucesso!'
        });

    }).catch(function (erro) {
        res.render('confirm', {
            style: 'confirm.css',
            message: `Erro: ${erro}`,
        });
    });
});



//update
app.get("/edit/:id", function (req, res) {
    Developer.findAll({ //procura todos os devs com o id pedido
        where: {
            'id': req.params.id,
        }

    }).then(function (developer) {
        res.render('editing', { //depois, renderiza a tela de edit
            style: 'editing.css',
            id: developer[0].dataValues.id,
            nome: developer[0].dataValues.nome,
            cpf: developer[0].dataValues.cpf,
            tecnologia: developer[0].dataValues.tecnologia, //com as seguintes informações
        });

    });

});

//update (backend)
app.post("/up/:id", function (req, res) {
    Developer.update({
        nome: req.body.nome, //pega os campos do formulário
        cpf: req.body.cpf,
        side: req.body.side,
        cargo: req.body.cargo,
        tecnologia: req.body.tecnologia,
    }, {
        where: {
            'id': req.params.id,
        }

    }).then(function () {
        res.render('confirm', {
            style: 'confirm.css',
            message: 'Registro Atualizado com Sucesso!',
        });

    }).catch(function (erro) {
        res.render('confirm', {
            style: 'confirm.css',
            message: `Erro: ${erro}`,
        });
    });
});

app.listen(8081, function () {
    console.log("Servidor Rodando na Porta 8081!");
});