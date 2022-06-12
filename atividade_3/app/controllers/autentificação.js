const usuarios = require("../models/usuarios.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.logar = function (req, res) {
  usuarios
    .findOne({ email: req.body.email })
    .then(function (usuario) {
      if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
        let token = jwt.sign({ id: usuario.id }, "senha_secreta");
        res.status(200).json({ token: token });
      } else {
        res.status(401).send("informações erradas");
      }
    })
    .catch(function (error) {
      res.status(401).send("email errado");
    });
};

module.exports.checar = function (req, res, next) {
  let token = req.headers.token;
  jwt.verify(token, "senha_secreta", function (err, decoded) {
    if (err) {
      res.status(401).send("token não autorizado");
    } else {
      next();
    }
  });
};
