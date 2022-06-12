let controller = require("../controllers/posts.controller");

module.exports = function (app) {
  app.get("/posts", controller.listaPosts);
  app.get("/posts/:id", controller.obterPost);
  app.post("/posts", controller.adcionarPost);
  app.delete("/posts/:id", controller.removerPost);
};
