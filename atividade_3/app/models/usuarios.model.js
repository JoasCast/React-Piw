const mongoose = require("mongoose");

module.exports = (function () {
  let schema = mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true
    // },
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
  });
  return mongoose.model("usuarios", schema);
})();
