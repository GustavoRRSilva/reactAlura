import './ListaSuspensa.css'
const ListaSuspesa = (props) => {
    return(
        <div>
            <label className='label'>{props.label}</label>
            <select className='select' >
              {props.itens.map(item => {
                return <option key = {item}>{item}</option>
              })}
            </select>
        </div>
    )
}

export default ListaSuspesa;