const controller = require("../controllers/posts.controller");
const controllerAut = require("../controllers/autentificação");

module.exports = function (app) {
  app.use("/posts", controllerAut.checar);

  app.get("/posts", controller.listaPosts);
  app.get("/posts/:id", controller.obterPost);
  app.get("/posts/:id/comentarios", controller.buscarComentariosDoPost);
  app.post("/posts", controller.adcionarPost);
  app.delete("/posts/:id", controller.removerPost);
};
