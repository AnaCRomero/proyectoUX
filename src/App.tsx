import { IonApp, setupIonicReact, IonContent, IonHeader, IonPage, IonTitle, IonFooter, IonToolbar} from '@ionic/react';
import './App.css';
import Pantalla from './components/Pantalla';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Memoria from './components/Memoria';
import {useState} from 'react';
import {evaluate, sqrt} from 'mathjs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BotonIgual from './components/BotonIgual';


setupIonicReact();

const App: React.FC = () => {
  const [input, setInput] = useState('0');
  const agregarInput = (val:string) => {
    setInput(input + val);
  }


  const cambio_signo = () => {
    const numero_aux = evaluate(input);
    if (numero_aux > 0) {
      setInput(`-${numero_aux}`);
    } else {
      setInput(`${Math.abs(numero_aux)}`);
    }
  }

  const calcular_porcentaje = () => {
    const numero_aux = evaluate(input);
    const calc_percentage = numero_aux / 100;
    setInput(`${calc_percentage}`);
  }

  const calcular_cuadrado = () => {
    const numero_aux = evaluate(input);
    const calc_result = numero_aux ** 2;
    setInput(`${calc_result}`);
  }

  const calc_raiz_cuadrada = () => {
    const numero_aux = evaluate(input);
    const calc_result = Math.sqrt(numero_aux);
    setInput(`${calc_result}`);
  }

  const calc_inversa = () => {
    const numero_aux = evaluate(input);
    const calc_result = 1 / numero_aux;
    setInput(`${calc_result}`);
  }

  const hacer_backspace = () => {
    setInput(prev => prev.slice(0, -1));
  }

  const calcularResultado = () => {
    if(input)
    setInput(evaluate(input));
  }
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent fullscreen>
          <div className="App">
            <div className="calculadora">
            <div className='fila'>
              <Memoria manejarClic={agregarInput}>Abt</Memoria>
              <Memoria manejarClic={agregarInput}>His</Memoria>
              </div>
              <Pantalla input={input}/>
              <div className='fila'>
              <Memoria manejarClic={agregarInput}>MC</Memoria>
              <Memoria manejarClic={agregarInput}>MR</Memoria>
              <Memoria manejarClic={agregarInput}>M+</Memoria>
              <Memoria manejarClic={agregarInput}>M-</Memoria>
              <Memoria manejarClic={agregarInput}>MS</Memoria>
              <Memoria manejarClic={agregarInput}>M'</Memoria>
              </div>

              <div className='fila'>
              <Boton manejarClic={agregarInput}>%</Boton>
              <Boton manejarClic={() => setInput('')}>CE</Boton>
              <BotonClear manejarClear={() => setInput('')}>C</BotonClear>
              <BotonClear manejarClear={hacer_backspace}>⌫</BotonClear>
              </div>

              <div className='fila'>
                <Boton manejarClic={calc_inversa}>1/𝒙</Boton>
                <Boton manejarClic={calcular_cuadrado}>𝒙²</Boton>
                <Boton manejarClic={calc_raiz_cuadrada}>²√𝒙</Boton>
                <Boton manejarClic={calcular_porcentaje}>÷</Boton>
              </div>
              
              <div className='fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={agregarInput}>*</Boton>
              </div>

              <div className='fila'>
                <Boton manejarClic={agregarInput}>4</Boton>
                <Boton manejarClic={agregarInput}>5</Boton>
                <Boton manejarClic={agregarInput}>6</Boton>
                <Boton manejarClic={agregarInput}>-</Boton>
              </div>

              <div className='fila'>
                <Boton manejarClic={agregarInput}>1</Boton>
                <Boton manejarClic={agregarInput}>2</Boton>
                <Boton manejarClic={agregarInput}>3</Boton>
                <Boton manejarClic={agregarInput}>+</Boton>
              </div>

              <div className='fila'>
                <Boton manejarClic={cambio_signo}>+/-</Boton>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={agregarInput}>.</Boton>
                <BotonIgual manejarClic={calcularResultado}>=</BotonIgual>
              </div>
            
            </div>
          </div> 
      </IonContent>
    </IonPage>  
  </IonApp>
  )
  };
export default App;