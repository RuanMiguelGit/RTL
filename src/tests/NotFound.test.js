import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

it('Deve testar se a pagina vai para o notFound', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/pagina/que-nao-existe/');
  const noMatch = screen.getByRole('heading',
    { level: 2, name: /page requested not found Crying emoji/i });

  const picture = screen.getByAltText(
    /pikachu crying because the page requested was not found/i,
  );
  expect(picture).toBeInTheDocument();
  expect(picture.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  expect(noMatch).toBeInTheDocument();
});
