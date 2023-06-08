import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspesa from "../ListaSuspensa";
import "./Formulario.css";
const Formulario = () => {
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'Ux e Design',
    'Mobile',
    'Inovação e Gestão'
  ];

  const aoSalvar = (event) =>{
    event.preventDefault();
    console.log("Foi submetido");
  }

  return (
    <section className = "formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio = "true" label="Nome" placeholder="Digite seu Nome" />
        <CampoTexto obrigatorio = "true" label="Cargo" placeholder="Digite seu Cargo" />
        <CampoTexto obrigatorio = "false" label="Imagem" placeholder="Digite o endereço da imagem  "/>
        <ListaSuspesa itens ={times} label = "Time"></ListaSuspesa>
        <Botao>
          Enviar
        </Botao>
      </form>
    </section>
  );
}

export default Formulario;
