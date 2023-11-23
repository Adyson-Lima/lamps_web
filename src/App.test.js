import { render, screen } from '@testing-library/react';
import App from './App';

test('Existe card em Lamps/index?', () => {
  render(<App />);
  const linkElement = screen.getByText("Lamps Crud");
  expect(linkElement).toBeInTheDocument();
});

test('Existe botão novo em Lamps/index?', () => {
  render(<App />);
  const linkElement = screen.getByText("Novo");
  expect(linkElement).toBeInTheDocument();
});

test('Existe tabela em Lamps/index?', () => {
  render(<App />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toHaveClass("table");
});

test("Existe botão editar em Lamps/index?", () => {
  render(<App />);
  const buttonElement = screen.getByText("Editar");
  expect(buttonElement).toHaveClass("btn-outline-info");
});

test("Existe botão excluir em Lamps/index?", () => {
  render(<App />);
  const buttonElement = screen.getByText("Excluir");
  expect(buttonElement).toHaveClass("btn btn-outline-danger");
});
