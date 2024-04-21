var mongoose = require('mongoose');

var livroSchema = mongoose.Schema({
    titulo: String,
    text: String,
    imagem: String,
});

   //Vamos criar um modelo chamado "Livro" a partir do esquema e

   //vamos exportá-lo
module.exports = mongoose.model("Livro", livroSchema);
   