const Livro = require("../model/livrosMongo");

const indexView = async function (req, res) {
    if (!req.isAuthenticated()) { // Se não está autenticado, vai para o login!
        console.log("Nop, não tem acesso!");
        return res.redirect("/login");
    }
    const livros = await Livro.find({}); //Encontra todos os livros na BD
    res.render("index", { info: livros }); //Mostra todos os livros encontrador no index.ejs
};

module.exports = {indexView};