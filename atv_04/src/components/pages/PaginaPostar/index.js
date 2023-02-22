import React, { useState, createContext } from "react";

const MyContext = createContext({});

export function PaginaPostar(props) {
  const [posts, setPost] = useState([
    {
      id: 1,
      nome: "Joao",
      texto: "minino ta quente demais hj",
      likes: 0,
    },
    {
      id: 2,
      nome: "Tiago",
      texto: "n aguento mais essa quintura",
      likes: 0,
    },
    {
      id: 3,
      nome: "Raymundo",
      texto: "sol brabo viu",
      likes: 0,
    },
  ]);

  const addPost = (post) => {
    setPost([...posts, post]);
  };

  return (
    <MyContext.Provider value={{ posts, addPost }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyContext;
