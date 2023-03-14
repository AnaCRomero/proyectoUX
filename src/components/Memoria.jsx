import './Memoria.css'

function Memoria(props) {
    function especial() {
        const valor = props.children;
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }
    return (
        <div className={`memoria ${especial() ? 'especial' : ''}`}
            //onClick={props.manejarClic(props.children)}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}


export default Memoria;
