import { render, screen } from '@testing-library/react';
import NewUpdate from '../pages/NewUpdate';
import { BrowserRouter } from 'react-router-dom';

describe("Testes da tela NewUpdate/index", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <NewUpdate/>
      </BrowserRouter>
    );
  });

  test("Existe card em NewUpdate/index?", () => {
   const cardElement = screen.getByTestId("mycard");
   expect(cardElement).toBeInTheDocument();
  });

  test("Existe botão home em NewUpdate/index?", () => {
   const linkElement = screen.getByTestId("mylink");
   expect(linkElement).toBeInTheDocument();
  });

  test('Existe form em NewUpdate/index?', () => {
    const formElement = screen.getByTestId("myform");
    expect(formElement).toBeInTheDocument();
  });

  test("Existe input1 em NewUpdate/index?", () => {
    const inputElement1 = screen.getByTestId("input1");
    expect(inputElement1).toBeInTheDocument();
  });

  test("Existe input2 em NewUpdate/index?", () => {
    const inputElement2 = screen.getByTestId("input2");
    expect(inputElement2).toBeInTheDocument();
  });

  test("Existe botao enviar em NewUpdate/index?", () => {
    const btnElement = screen.getByTestId("btnenviar");
    expect(btnElement).toBeInTheDocument();
  });

});


