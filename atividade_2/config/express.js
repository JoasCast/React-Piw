const express = require('express');
const routerUsuarios = require("../app/routes/usuarios.routes");
const routerPosts = require("../app/routes/posts.routes");
const routerComentarios = require("../app/routes/comentarios.routes");

// const { Module } = require('module');

module.exports = function() {
    let app = express()

    app.set("port", 3000)
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('./public'));
    routerUsuarios(app);
    routerPosts(app);
    routerComentarios(app);

    return app;
};