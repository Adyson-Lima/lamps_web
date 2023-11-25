import { render, screen } from '@testing-library/react';
import NewUpdate from './pages/NewUpdate';
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


});


