const model = require("../model/livros");

const formGet = function (req, res) {
    res.render("bookForm");
};

const formPost = function (req, res) {
    model.info.push(req.body);// vai devolver os dados do formulário em forma de objeto. 
    res.redirect("/");
};

module.exports = { formGet: formGet, formPost: formPost };