const comentarios = require("../models/comentarios.model");
const view = require("../views/comentarios.view");

module.exports.listarComentarios = function (req, res) {
  let promise = comentarios
    .find()
    .populate("id_usuario")
    .populate("id_posts")
    .exec();
  promise
    .then(function (comentarios) {
      res.status(200).json(comentarios);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "nenhum comentario bro" });
    });
};

module.exports.inserirComentario = function (req, res) {
  let comentario = req.body;
  let promise = comentarios.create(comentario);
  promise
    .then(function (comentario) {
      res.status(201).json(view.render(comentario));
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "comentario não tankou" });
    });
};

module.exports.excluirComentario = function(req,res){
  let id = req.params.id;
  let promise = comentarios.findByIdAndDelete(id);
  promise.then(function(comentario){
    res.status(200).json(comentario);
  }).catch(function(error){
    res.status(400).json({mensagem:"não foi possivel remover comentario"})
  })
}