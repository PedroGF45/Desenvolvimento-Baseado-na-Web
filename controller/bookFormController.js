const Livro = require("../model/livrosMongo");

const formGet = function (req, res) {
    res.render("bookForm");
};

const formPost = async function (req, res) {
    try {
        const livroNovo = new Livro(req.body);
        await livroNovo.save();
        console.log(livroNovo);
        res.redirect("/");
    } catch (error) {
        console.error(error);
    }
};

//SHOW => MOSTRA UM LIVRO EM ESPECIFICO
const mostraLivro = async function (req, res) {
    try {
        const {id} = req.params; //A variavel vai guardar o valor que vem do parâmetro :id
        const livro = await Livro.findById(id).exec(); //Encontrar o livro por ID
        if (livro) {
            res.render("showLivro", { livro: livro });//Renderizar a pagina .ejs e passar o objeto
        } else {
            console.log("Livro não encontrado");
        }
    } catch (error) {
        console.error(error);
    }
};

//EDIT => EDITAR UM COMENTÀRIO ESPECIFICO
const editarLivro = async function (req, res) {
    try {
        const {id} = req.params; //Vamos buscar o ID que existe no URL
        const livro = await Livro.findById(id).exec(); //Vamos aceder ao documento baseado no id
        if (livro) {
            res.render("editarLivro", { livro: livro }); //vamos renderizar o form e preencher os dados proveniente de "livro"
        } else {
            console.log("Livro não encontrado");
        }
    } catch (error) {
        console.error(error);
    }
};

//UPDATE => FAZ ATUALIZAÇÂO DE UM COMENTARIO EXISTENTE
const atualizaLivro = async function (req, res) {
    const {id} = req.params; //Vamos buscar o ID que existe no URL
    const novaDescricao = req.body.descricao;//Vamos buscar a informação atualizado do formulário
    try {
        const livro = await Livro.findById(id).exec(); //Vamos buscar um documento existente em mongoDB
        if (livro) {
            livro.text = novaDescricao; //Fazemos a atualização do documento mongoDB
        await livro.save();//Gravamos a informação nova na BD
            res.redirect("/");
        } else {
            console.log("Livro não encontrado");
        }
    } catch (error) {
        console.error(error);
    }
};

//DELETE => APAGA UM LIVRO EXISTENTE
const apagarLivro = async function (req, res) {
    const {id} = req.params;//Vamos buscar o ID que existe no URL
    try {
        const livro = await Livro.findById(id).exec();//Vamos buscar um documento existente em MongoDB
        if (livro) {
            await Livro.deleteOne({ _id: livro._id });//Vamos eliminar um documento existente em MongoDB a partir do seu ID
            res.redirect("/");
        } else {
            console.log("Livro não encontrado");
        }
    } catch (error) {
        console.error(error);
    }
   };
   

module.exports = {
    formGet,
    formPost,
    mostraLivro,
    editarLivro,
    atualizaLivro,
    apagarLivro,
   };