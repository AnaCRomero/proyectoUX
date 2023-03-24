import { IonApp, setupIonicReact, IonContent, IonHeader, IonPage, IonTitle, IonFooter, IonToolbar, IonModal, IonButtons, IonButton, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import './App.css';
import Pantalla from './components/Pantalla';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Memoria from './components/Memoria';

import { useState, useRef, useEffect } from 'react';
import { evaluate, sqrt } from 'mathjs';



/* para los iconos */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

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


  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(0);
  const agregarInput = (val: string) => {
    setInput(input + val);
  }



  const MemoryAdd = () => {
    setMemory(memory + memory);
  }

  const MemorySubtract = () => {
    setMemory(memory - memory);
  }

  const MemoryClear = () => {
    setMemory(0);
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



  const calcularResultado = (valor_aux: string) => {
    if (input) {
      valor_aux = input;
      if (input.includes("÷")) {
        valor_aux = valor_aux.replace("÷", "/")
        setInput(valor_aux);
      }

      if (input.includes("×")) {
        valor_aux = valor_aux.replace("×", "*")
        setInput(valor_aux);
      }

      setInput(evaluate(valor_aux));
    }
  }

  const modal = useRef<HTMLIonModalElement>(null);
  const modal1 = useRef<HTMLIonModalElement>(null);
  const modal2 = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);


  const handleCloseModal1 = () => {
    modal.current?.dismiss();
  };

  const handleCloseModal2 = () => {
    modal1.current?.dismiss();
  };


  const handleCloseModal3 = () => {
    modal2.current?.dismiss();
  };



  return (
    <IonApp>
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent fullscreen>

          <IonModal ref={modal} trigger="open-about" initialBreakpoint={0.75} presentingElement={presentingElement!}>
            <IonHeader >
              <IonToolbar color="#1f1f1">
                <IonTitle >About</IonTitle>
                <IonButton slot="end" onClick={handleCloseModal1}>X</IonButton>
              </IonToolbar>
            </IonHeader>
            <IonContent color="#1f1f1">
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h1>Proyecto de UX</h1>
                    <h2>Hecho por Ana Romero y Victor Cruz</h2>
                    <p>26-03-2023</p>

                  </IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonModal>


          <IonModal ref={modal1} trigger="open-historial" initialBreakpoint={0.75} presentingElement={presentingElement!}>
            <IonHeader >
              <IonToolbar color="#1f1f1">
                <IonTitle >Historial Calculadora</IonTitle>
                <IonButton slot="end" onClick={handleCloseModal2}>X</IonButton>
              </IonToolbar>
            </IonHeader>
            <IonContent color="#1f1f1">
              <IonList>
                <IonItem>
                  <IonLabel> <h2>x</h2> <p>y</p></IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonModal>

          <IonModal ref={modal2} trigger="open-memoria" initialBreakpoint={0.75} presentingElement={presentingElement!}>
            <IonHeader >
              <IonToolbar color="#1f1f1">
                <IonTitle> Memoria Calculadora</IonTitle>
                <IonButton slot="end" onClick={handleCloseModal3}>X</IonButton>
              </IonToolbar>
            </IonHeader>
            <IonContent color="#1f1f1">
              <IonList>
                <IonItem>
                  <IonLabel>
                    <h2>x</h2>
                    <p>y</p>
                  </IonLabel>
                </IonItem>
              </IonList>

            </IonContent>
          </IonModal>


          <div className="App">
            <div className="calculadora">
              <div id="botones_arriba" className='fila'>

                <div id="about" >
                  <IonButton id="open-about" color="#1F1F1F" expand="block">
                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                    <IonIcon name="person" ></IonIcon> </IonButton>
                </div>

                <div id="historial">
                  <IonButton id="open-historial" color="#1F1F1F" expand="block">
                    <FontAwesomeIcon icon={faClockRotateLeft} size="lg" />
                    <IonIcon name="time" ></IonIcon> </IonButton>
                </div>
              </div>
              <Pantalla input={input} />
              <div className='fila'>
                <Memoria manejarClic={MemoryClear}>MC</Memoria>
                <Memoria manejarClic={agregarInput}>MR</Memoria>
                <Memoria manejarClic={MemoryAdd}>M+</Memoria>
                <Memoria manejarClic={MemorySubtract}>M-</Memoria>
                <Memoria manejarClic={agregarInput}>MS</Memoria>
                <IonButton color="#1c1c1c" id="open-memoria" expand="block">
                  M↓

                </IonButton>
              </div>

              <div className='fila'>
                <Boton manejarClic={calcular_porcentaje}>%</Boton>
                <Boton manejarClic={() => setInput('')}>CE</Boton>
                <BotonClear manejarClear={() => setInput('')}>C</BotonClear>
                <BotonClear manejarClear={hacer_backspace}>⌫</BotonClear>
              </div>

              <div className='fila'>
                <Boton manejarClic={calc_inversa}>1/𝒙</Boton>
                <Boton manejarClic={calcular_cuadrado}>𝒙²</Boton>
                <Boton manejarClic={calc_raiz_cuadrada}>²√𝒙</Boton>
                <Boton manejarClic={agregarInput}>÷</Boton>
              </div>

              <div className='fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={agregarInput}>×</Boton>
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