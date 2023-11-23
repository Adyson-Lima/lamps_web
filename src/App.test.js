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
