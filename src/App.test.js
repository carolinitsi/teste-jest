import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  
it('Deverá renderizar os elementos corretamente', () => {
  render(<App />);
  const textElement = screen.queryByText('Hello,');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.queryByPlaceholderText('digite seu nome');
  expect(inputElement).toBeInTheDocument();

  const imageElement = screen.queryByRole('img');
  expect(imageElement).toBeInTheDocument();
});

it('Deverá encontrar a imagem com o texto alternativo correto', () => {
  render(<App/>);

  const altTextImageElement = screen.queryByAltText('ilustração de uma mulher negra usando o computador e segurando uma xícara');
  expect(altTextImageElement).toBeInTheDocument();

})

it('Deverá pegar o input corretamente', () => {
  render(<App/>);

  const inputElement = screen.queryByPlaceholderText('digite seu nome');
  fireEvent.change(inputElement, {
    target: {
      value: 'Carol'
    }
  })

  const value = screen.queryByText('Carol');
  expect(value).toHaveTextContent('Carol');
})

it('Deverá renderizar corretamente o texto digitado', () => {
  render(<App/>);

  const inputElement = screen.queryByPlaceholderText('digite seu nome');
  fireEvent.change(inputElement, {
    target: {
      value: 'Carol'
    }
  })

  expect(screen.queryByText('Carol')).toHaveTextContent('Carol');
  expect(screen.queryByText('Hello,')).toHaveTextContent('Hello, Carol')

})

})