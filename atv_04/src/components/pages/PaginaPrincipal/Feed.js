//essa é a linha do tempo
import { useState, useContext } from "react";
import MyContext from "../PaginaPostar/index";

function Card({ nome, texto, likes }) {
  const [count, setCount] = useState(0);

  function addLike() {
    setCount(count + 1);
  }
  return (
    <div className="card">
      <h3 className="nomeCard">{nome}</h3>
      <p className="textoCard">{texto}</p>
      <button className="botaoCard" onClick={addLike}>
        <span class="material-symbols-outlined">thumb_up</span>
        {count}
      </button>
    </div>
  );
}

export function Feed() {
  const { posts } = useContext(MyContext);

  let Cards = posts.map((post) => (
    <Card
      key={post.id}
      nome={post.nome}
      texto={post.texto}
      likes={post.likes}
    ></Card>
  ));

  return <div className="Feed">{Cards}</div>;
}
