const controller = require("../controllers/comentarios.controller");

module.exports = function (app) {
  app.get("/comentarios", controller.listarComentarios);
  app.delete("/comentarios/:id", controller.excluirComentario);
  app.post("/comentarios", controller.inserirComentario);
};
