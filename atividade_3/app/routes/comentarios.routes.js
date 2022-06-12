const controller = require("../controllers/comentarios.controller");
const controllerAut = require("../controllers/autentificação");

module.exports = function (app) {
  app.use("/comentarios", controllerAut.checar);

  app.get("/comentarios", controller.listarComentarios);
  app.delete("/comentarios/:id", controller.excluirComentario);
  app.post("/comentarios", controller.inserirComentario);
};
