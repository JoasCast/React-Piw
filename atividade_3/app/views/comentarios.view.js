function render(comentarios) {
  return {
    id: comentarios._id,
    texto: comentarios.texto,
    id_usuario: comentarios.id_usuario,
    id_posts: comentarios.id_posts,
  };
}

module.exports.render = render;

function renderMany(comentarios) {
  return comentarios.mapa(render);
}

module.exports.renderMany = renderMany;
