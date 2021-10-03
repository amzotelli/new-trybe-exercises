import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

const digimon = [{"name":"MetalGreymon",
  "img":"https://digimon.shadowsmith.com/img/metalgreymon.jpg",
  "level":"Ultimate",
}];

describe('Teste da aplicação toda', () => {
  it('renders App', async () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', {name: 'Search Digimon'});
    const title = screen.getByRole('heading', {level: 1, name: 'Faça uma pesquisa'})
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it('Testar se o input é alterado', () => {
    render(<App />);
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'metalgreymon')
    expect(input).toHaveValue('metalgreymon');
  })
  
  it('Testa se ao pesquisar, a API retorna um Pokemon', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => digimon,
    }));
    render(<App />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button',);
    userEvent.type(input, 'metalgreymon');
    userEvent.click(button);
    const metalgreymon = await screen.findByRole('heading', {
      level: 2,
      name: 'MetalGreymon'
    })
    expect(metalgreymon).toBeInTheDocument();
  })
});
