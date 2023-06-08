import "./Botao.css";

const Botao = (props) =>{
    return(
        <button className = 'submit'>
            {props.children}
        </button>
    )
}

export default Botao;