//essa é a linha do tempo

function Card({ nome, texto, likes }) {
  return (
    <div className="card">
      <h3 className="nomeCard">{nome}</h3>
      <p className="textoCard">{texto}</p>
      <button className="botaoCard">Likes:{likes}</button>
    </div>
  );
}

export function Feed() {
  let posts = [
    {
      id: 1,
      nome: "Joao",
      texto: "minino ta quente demais hj",
      likes: 1,
    },
    {
      id: 2,
      nome: "Tiago",
      texto: "n aguento mais essa quintura",
      likes: 3,
    },
    {
      id:3,
      nome: "Raymundo",
      texto: "sol brabo viu",
      likes: 2,
    }
  ];

  let Cards = posts.map((post) => (
    <Card
      nome={post.nome}
      texto={post.texto}
      likes={post.likes}
    ></Card>
  ));
  return <div className="Feed">{Cards}</div>;
}
