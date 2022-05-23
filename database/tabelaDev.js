const db = require("./connection");

const Developer = db.sequelize.define('developers', {
    nome: {
        type: db.Sequelize.STRING,
    },

    cpf: {
        type: db.Sequelize.STRING,
    },

    side: {
        type: db.Sequelize.STRING,
    },

    cargo: {
        type: db.Sequelize.STRING,
    },

    tecnologia: {
        type: db.Sequelize.STRING,
    },
});

Developer.sync({
    force: false
});

module.exports = Developer;