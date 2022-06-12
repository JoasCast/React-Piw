const usuarios = require("../models/usuarios.model");
const posts = require("../models/posts.model");
const view = require("../views/usuarios.view");

module.exports.listaUsuarios = function (req, res) {
  let promise = usuarios.find().populate("posts").exec();
  promise
    .then(function (usuarios) {
      res.status(200).json(view.renderMany(usuarios));
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).json({ mensagem: "usuarios não encontrados" });
    });
};

module.exports.obterUsuario = function (req, res) {
  //req.params.id (pega o id passado no url)
  let id = req.params.id;
  let promise = usuarios.findById(id).exec();
  promise
    .then(function (usuario) {
      res.status(200).json(view.render(usuario));
    })
    .catch(function (error) {
      res
        .status(400)
        .json({ mensagem: "não foi possivel encontrar usuario", error: error });
    });
};

module.exports.obterPostUsuario = function (req, res) {
  let id = req.params.id;
  let promise = posts.find({ usuarios: id });
  promise
    .then(function (posts) {
      res.status(200).json(posts);
    })
    .catch(function (error) {
      res.status(500).json({ mensagem: "que post????" });
    });
};

module.exports.adicionarUsuario = function (req, res) {
  // let usuario = req.body;
  // usuarios.push(usuario);
  // res.json(usuario).status(201);

  let usuario = req.body;
  let promise = usuarios.create(usuario);
  promise
    .then(function (usuario) {
      res.status(201).json(view.render(usuario));
    })
    .catch(function (error) {
      res.status(400).json({ mensagem: "usuario não adcionado" });
    });
};

module.exports.removerUsuario = function (req, res) {
  let id = req.params.id;
  let promise = usuarios.findByIdAndDelete(id);
  promise
    .then(function (usuario) {
      res.status(200).json(view.render(usuario));
    })
    .catch(function (error) {
      res
        .status(400)
        .json({ mensagem: "não foi possivel excluir usuario", error: error });
    });
};
