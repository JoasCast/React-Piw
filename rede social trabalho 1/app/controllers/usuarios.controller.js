let usuarios = [
  {
    id: "1",
    nome: "Joás",
    email: "joascastelo5@gmail.com",
    senha: "asdf12345",
  },
  {
    id: "2",
    nome: "João",
    email: "joão@gmail.com",
    senha: "asdf54321",
  },
];

module.exports.listaUsuarios = function (req, res) {
  res.json(usuarios);
};

module.exports.obterUsuario = function (req, res) {
  //req.params.id (pega o id passado no url)
  let id = req.params.id;
  let usuario = usuarios.find(function (usuario) {
    return usuario.id == id;
  });
  if (usuario) {
    res.json(usuario);
  } else {
    res.json({ mensagem: "usuario nao encontrado" }).status(404);
  }
};

module.exports.adicionarUsuario = function (req, res) {
  let usuario = req.body;
  usuarios.push(usuario);
  res.json(usuario).status(201);
};

module.exports.removerUsuario = function (req, res) {
  let id = req.params.id;
  usuarios = usuarios.filter(function (usuario) {
    return usuario.id != id;
  });
  res.json({ mensagem: "usuario foi removido" });
};
