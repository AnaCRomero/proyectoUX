import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';

test('renders without crashing', () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});


test('EL Boton Clear deberia Limpiar la Pantalla', () => {
  const { getByTestId } = render(<BotonClear />);
  const clearButton = getByTestId('clear-button');
  const inputField = getByTestId('input-field');
  fireEvent.click(clearButton);
  expect(inputField).toHaveValue('');
});


test('El Boton de Memory Recall consigue el ultimo valor del indice de la memoria', () => {
  const { getByTestId } = render(<App/>);
  const recallButton = getByTestId('memory_recall');
  const inputField = getByTestId('input');
  const memoryClearButton = getByTestId('liberar_memoria');
  fireEvent.click(inputField, { target: { value: '5' } });
  fireEvent.click(getByTestId('memory_sumar'));
  fireEvent.click(memoryClearButton);
  fireEvent.click(recallButton);
  expect(inputField).toHaveValue('5');
});


test('El boton de Porcentaje deberia de calcular el porcentaje', () => {
  const { getByTestId } = render(<App/>);
  const percentageButton = getByTestId('calc_percentage');
  const inputField = getByTestId('input');
  fireEvent.click(inputField, { target: { value: '50' } });
  fireEvent.click(percentageButton);
  expect(inputField).toHaveValue('0.5');
  });