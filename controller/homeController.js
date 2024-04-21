const model = require("../model/livros");

const indexController = function (req, res) {
    res.render("index", { info: model.info });
};

module.exports = {indexController};