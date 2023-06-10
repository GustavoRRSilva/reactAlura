import './CampoTexto.css';
const CampoTexto = (props) => {

    //let valor = '';
    
    //Declarando uma nova variavel state com o nome de valor, nela possuimos duas informações, o nome da variavel e o setter dela

    const aoDigitado = (event) =>{
        props.aoAlterado(event.target.value);
    }

    return(
       <div className="campoTexto">
        <label class>{props.label}</label>
        <input 
        placeholder={props.placeholder}
        required = {props.obrigatorio}
        onChange={aoDigitado}
        value={props.valor}
        />
       </div>
    )

}
//Forma diferente de criar um componente
export default CampoTexto;