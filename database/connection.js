const Sequelize = require('sequelize');
const sequelize = new Sequelize("mysql", "root", "*insira sua senha aqui*", {
    local: "localhost",
    dialect: "mysql",
});

sequelize.authenticate().then(() => {
    console.log(`Conexão Realizada com Sucesso!`);

}).catch((erro) => {
    console.log(`Erro na conexão: ${erro}`);
});

module.exports = {
    Sequelize,
    sequelize,
}