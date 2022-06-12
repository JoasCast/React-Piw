const mongoose = require("mongoose");

module.exports = (function () {
  let schema = mongoose.Schema({
    texto: {
      type: String,
      required: true,
    },
    id_usuario: {
      type: mongoose.Schema.ObjectId,
      ref: "usuarios",
    },
    id_posts: {
      type: mongoose.Schema.ObjectId,
      ref: "posts",
    },
  });
  return mongoose.model("comentarios", schema);
})();
