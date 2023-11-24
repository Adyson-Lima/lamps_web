import { render, screen } from '@testing-library/react';
import App from './App';

describe("Testes da tela Lamps/index", () => {

  beforeEach(() => {
    render(<App/>);
  });

  test('Existe card em Lamps/index?', () => {
    const cardElement = screen.getByText("Lamps Crud");
    expect(cardElement).toBeInTheDocument();
  });

  test('Existe botão novo em Lamps/index?', () => {
    const linkElement = screen.getByText("Novo");
    expect(linkElement).toBeInTheDocument();
  });

  test('Existe tabela em Lamps/index?', () => {
    const tableElement = screen.getByRole("table");
    expect(tableElement).toHaveClass("table");
  });

  test("Existe botão editar em Lamps/index?", () => {
    const buttonElement = screen.getByText("Editar");
    expect(buttonElement).toHaveClass("btn-outline-info");
  });

  test("Existe botão excluir em Lamps/index?", () => {
    const buttonElement = screen.getByText("Excluir");
    expect(buttonElement).toHaveClass("btn btn-outline-danger");
  });

});

describe("Testes da tela NewUpdate/index", () => {

  beforeEach(() => {
    render(<App/>);
  });

  test("Existe card na tela NewUpdate/index?", () => {
    const cardElement = screen.getByText("Lamps Crud");
    expect(cardElement).toHaveClass("card-header");
  });



});

