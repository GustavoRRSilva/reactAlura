import './CampoTexto.css';
const CampoTexto = (props) => {
    console.log(props)
    return(
       <div className="campoTexto">
        <label class>{props.label}</label>
        <input 
        placeholder={props.placeholder}
        required = {props.obrigatorio}
        />
       </div>
    )
}
//Forma diferente de criar um componente
export default CampoTexto;