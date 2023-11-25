import { render, screen } from '@testing-library/react';
import Lamps from '../pages/Lamps';
import { BrowserRouter } from 'react-router-dom';

describe("Testes da tela Lamps/index", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Lamps/>
      </BrowserRouter>
    );
  });

  it('Existe card em Lamps/index?', () => {
    const cardElement = screen.getByTestId("mycard");
    expect(cardElement).toBeInTheDocument();
  });

  it('Existe botão novo em Lamps/index?', () => {
    const linkElement = screen.getByTestId("mylink");
    expect(linkElement).toBeInTheDocument();
  });

  it('Existe tabela em Lamps/index?', () => {
    const tableElement = screen.getByTestId("mytable");
    expect(tableElement).toBeInTheDocument();
  });

  it("Existe botão editar em Lamps/index?", () => {
    const btnElement1 = screen.getByTestId("mybtn1");
    expect(btnElement1).toBeInTheDocument();
  });

  it("Existe botão excluir em Lamps/index?", () => {
    const btnElement2 = screen.getByTestId("mybtn2");
    expect(btnElement2).toBeInTheDocument();
  });

});


