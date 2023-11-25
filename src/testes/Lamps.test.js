import { render, screen } from '@testing-library/react';
import Lamps from '../pages/Lamps';
import { BrowserRouter } from 'react-router-dom';

describe("Testes da tela Lamps", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Lamps/>
      </BrowserRouter>
    );
  });

  [{descricao_teste: "Existe card em Lamps?", testid: "mycard"},
   {descricao_teste: "Existe botão novo em Lamps?", testid: "mylink"},
   {descricao_teste: "Existe tabela em Lamps?", testid: "mytable"},
   {descricao_teste: "Existe botão editar em Lamps?", testid: "mybtn1"},
   {descricao_teste: "Existe botão excluir em Lamps?", testid: "mybtn2"}
  ].forEach(({descricao_teste, testid}) => {

    it(`${descricao_teste}`, () => {
      expect(screen.getByTestId(`${testid}`)).toBeInTheDocument();
    });

  });

});


