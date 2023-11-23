import { render, screen } from '@testing-library/react';
import App from './App';

test('Exist card em Lamps/index?', () => {
  render(<App />);
  const linkElement = screen.getByText("Lamps");
  expect(linkElement).toBeInTheDocument();
});
