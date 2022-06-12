let controller = require("../controllers/usuarios.controller");

module.exports= function(app){
    app.get("/usuarios", controller.listaUsuarios);
    app.get("/usuarios/:id", controller.obterUsuario);
    app.post("/usuarios", controller.adicionarUsuario);
    app.delete("/usuarios/:id", controller.removerUsuario);
}