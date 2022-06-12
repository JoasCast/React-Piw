const posts = require("../models/posts.model");
const comentarios = require("../models/comentarios.model");
const view = require("../views/posts.view");
const jwt = require("jsonwebtoken");
// const usuariosview = require("../views/usuarios.view");

// let posts = [
//   {
//     id: "1",
//     texto: "sla man",
//     likes: "2",
//   },
// ];

module.exports.listaPosts = function (req, res) {
  let promise = posts.find().populate("id_usuario").exec();
  promise
    .then(function (posts) {
      res.status(200).json(posts);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "não foi possivel listar os usuarios" });
    });
};

module.exports.obterPost = function (req, res) {
  let id = req.params.id;
  let promise = posts.findById(id).exec();
  promise
    .then(function (post) {
      res.status(200).json(view.render(post));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "não foi possivel encontrar usuario" });
    });
};

module.exports.adcionarPost = function (req, res) {
  // let id_post = req.body.post;
  let token = req.headers.token;
  let payload = jwt.decode(token);
  let id_usuario_logado = payload.id;
  console.log("antes do promise");
  let promise = posts.create({
    texto: req.body.texto,
    likes: req.body.likes,
    id_usuario: id_usuario_logado,
  });
  promise
    .then(function (post) {
      res.status(200).json(view.render(post));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "não foi possivel adicionar post" });
    });
};

module.exports.removerPost = function (req, res) {
  let id = req.params.id;
  let promise = posts.findByIdAndDelete(id);
  promise
    .then(function (post) {
      res.status(200).json(view.render(post));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "impossivel deletar aluno" });
    });
};

module.exports.buscarComentariosDoPost = function (req, res) {
  let id = req.params.id;
  let promise = comentarios.find({ posts: id });
  promise
    .then(function (comentario) {
      res.status(200).json(comentario);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "usuario não encontrado" });
    });
};
