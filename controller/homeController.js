const Livro = require("../model/livrosMongo");

const indexView = async function (req, res) {
    const livros =await Livro.find({})
    res.render("index", { info: livros });
};

module.exports = {indexView};