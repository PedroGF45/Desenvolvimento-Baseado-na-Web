const express = require("express");
const router = express.Router();

const bookController = require("../controller/bookFormController");

router.get("/bookform", bookController.formGet);
router.post("/bookform", bookController.formPost);
//REST API()
//NEW => VAI CHAMAR O FORULARIO QUE ADICIONAR UM NOVO LIVRO
router.get("/bookform/new", bookController.formGet);
//CREATE => CRIA NOVO COMENTÁRIO NO SERVIDOR
router.post("/bookform", bookController.formPost);
//SHOW => MOSTRA UM LIVRO EM ESPECIFICO
router.get("/bookform/:id", bookController.mostraLivro);
//EDIT => EDITA UM LIVRO EM ESPECIFICO
router.get("/bookform/:id/edit", bookController.editarLivro);
//UPDATE => FAZ UPDATE DE UM LIVRO EM ESPECIFICO
router.patch("/bookform/:id", bookController.atualizaLivro);
//DELETE => APAGA UM LIVRO EM ESPECIFICO
router.delete("/bookform/:id", bookController.apagarLivro);

module.exports = router;