import classNames from "classnames";

function Card({ nome, codigo, disponivel }) {
  let nomeClasse = classNames("card", { fundoVermelho: !disponivel });

  // let nomeClasse = "card";
  // if (disponivel == false) {
  //   nomeClasse = "card fundoVermelho";
  // }
  return (
    <div className={nomeClasse}>
      <h3 className="tituloCard">{nome}</h3>
      <span className="codigoCard">{codigo}</span>
    </div>
  );
}

export function Conteudo() {
  let diciplinas = [
    {
      nome: "LMS",
      codigo: "QXD123",
      disponivel: true,
    },
    {
      nome: "PIW",
      codigo: "QXD456",
      disponivel: false,
    },
    {
      nome: "FUP",
      codigo: "QXD789",
      disponivel: true,
    },
    {
      nome: "POO",
      codigo: "QXD012",
      disponivel: false,
    },
  ];
  //   let ls = [];
  //   for (let i = 0; i < diciplinas.length; i++) {
  //     ls.push(
  //       <li>
  //         {diciplinas[i].nome} - {diciplinas[i].codigo}
  //       </li>
  //     );
  //   }

  let Cards = diciplinas.map((diciplina) => (
    <Card
      nome={diciplina.nome}
      codigo={diciplina.codigo}
      disponivel={diciplina.disponivel}
    ></Card>
  ));
  return <div className="galeriaCard">{Cards}</div>;
}
