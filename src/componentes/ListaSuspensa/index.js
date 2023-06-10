import "./ListaSuspensa.css";
const ListaSuspesa = (props) => {
  return (
    <div>
      <label className="label">{props.label}</label>
      <select
        onChange={evento => props.aoAlterado(evento.target.value)}
        className="select"
        value={props.value}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default ListaSuspesa;
