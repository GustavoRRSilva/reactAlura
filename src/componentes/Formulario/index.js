import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspesa from "../ListaSuspensa";
import { useState } from "react";
import "./Formulario.css";
const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [endereco, setEndereco] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log(nome + ' ' + cargo + ' ' + endereco + ' ' + time)
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio="true"
          label="Nome"
          placeholder="Digite seu Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio="true"
          label="Cargo"
          placeholder="Digite seu Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          obrigatorio="false"
          label="Imagem"
          placeholder="Digite o endereço da imagem "
          valor={endereco}
          aoAlterado={setEndereco}
        />
        <ListaSuspesa
          itens={times}
          label="Time"
          valor={time}
          aoAlterado={setTime}
        ></ListaSuspesa>
        <Botao>Enviar</Botao>
      </form>
    </section>
  );
};

export default Formulario;
