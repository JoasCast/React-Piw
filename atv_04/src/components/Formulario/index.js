import { useContext } from "react";
import { useForm } from "react-hook-form";
import MyContext from "../pages/PaginaPostar/index";
import { useNavigate } from "react-router-dom"
import "./styles.css"

export function Formulario({ enviar }) {
  const { register, handleSubmit } = useForm();
  const { addPost } = useContext(MyContext);

  const pegarDado = (post) => {
    console.log(post);
    addPost(post);
    navigate('/')
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="corpo">
        <form className="formulario" onSubmit={handleSubmit(pegarDado)}>
          Nome:{" "}
          <input
            name="nome"
            {...register("nome", { required: true, minLength: 2 })}
          ></input>
          <br></br>
          Mensagem:{" "}
          <input
            name="texto"
            {...register("texto", { required: true, minLength: 2 })}
          ></input>
          <br></br>
          <input
            className="likeInput"
            name="like"
            value={0}
            {...register("like")}
          ></input>
          <br></br>
          <input type="submit" className="botao" >

          </input>
        </form>
      </div>
    </div>
  );
}
