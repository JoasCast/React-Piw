let controller = require("../controllers/usuarios.controller");
let controllerAut = require("../controllers/autentificação");

module.exports = function (app) {
  app.post("/usuarios/singin", controllerAut.logar);
  app.post("/usuarios", controller.adicionarUsuario);

  app.use("/usuarios", controllerAut.checar);
  app.get("/usuarios", controller.listaUsuarios);
  app.get("/usuarios/:id", controller.obterUsuario);
  app.get("/usuarios/:id/posts", controller.obterPostUsuario);
  app.delete("/usuarios/:id", controller.removerUsuario);
};
