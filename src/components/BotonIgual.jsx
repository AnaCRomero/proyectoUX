import './BotonIgual.css';

function BotonIgual(props) {
    function esigual() {
        const valor = props.children;
        return (valor === '=');
    }
    return (
        <div className={`botonigual ${esigual() ? 'igual' : ''}`}
            //onClick={props.manejarClic(props.children)}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default BotonIgual;