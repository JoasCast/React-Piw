let posts = [
  {
    id: "1",
    texto: "sla man",
    likes: "2",
  },
];

module.exports.listaPosts = function (req, res) {
  res.json(posts);
};

module.exports.obterPost = function (req, res) {
  let id = req.params.id;
  let post = posts.find(function (post) {
    return post.id == id;
  });
  if (post) {
    res.json(post);
  } else {
    res.json({ mensagem: "post não encontrado" }).status(404);
  }
};

module.exports.adcionarPost = function (req, res) {
  let post = req.body;
  posts.push(post);
  res.json(post).status(201);
};

module.exports.removerPost = function (req, res) {
  let id = req.params.id;

  //posts.splice(id-1, 1)
  res.json(posts.splice(id - 1, 1)).status(200);
};
