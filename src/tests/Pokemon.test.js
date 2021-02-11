import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

it('Testa o card', () => {
  const { getByRole, history } = renderWithRouter(<App />);
  const homeLink = getByRole('link', {
    name: /Home/i,
  });
  userEvent.click(homeLink);

  const overview = document.getElementsByClassName('pokemon');
  expect(overview).toHaveLength(1);
  const pokename = screen.getByTestId('pokemon-name');
  expect(pokename).toHaveTextContent('Pikachu');

  const poketype = screen.getByTestId('pokemonType');
  expect(poketype).toHaveTextContent('Electric');

  const pokeweight = screen.getByTestId('pokemon-weight');
  expect(pokeweight).toHaveTextContent('Average weight: 6.0 kg');

  const pokepic = screen.getByAltText(
    /Pikachu sprite/i,
  );

  expect(pokepic.src).toContain('https://cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');

  const pokelink = screen.getByRole('link', { name: /more details/i });
  expect(pokelink.href).toContain('/pokemons/25');

  userEvent.click(pokelink);

  const details = screen.getByRole('heading', { name: /pikachu details/i });
  expect(details).toBeInTheDocument();

  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');

  const Favorite = screen.getByText(/pokémon favoritado\?/i);

  userEvent.click(Favorite);

  const startpic = screen.getByAltText('Pikachu is marked as favorite');

  expect(startpic.src).toContain('http://localhost/star-icon.svg');
});
