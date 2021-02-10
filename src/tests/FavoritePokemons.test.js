import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

test('testando o heading do about ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const fav = getByRole('link', {
    name: /favorite pokémons/i,
  });

  userEvent.click(fav);

  const notFound = screen.getByText(/no favorite pokemon found/i);

  expect(notFound).toBeInTheDocument();
});

test('testando os cards ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const home = getByRole('link', {
    name: /home/i,
  });

  userEvent.click(home);

  const details = screen.getByRole('link', { name: /more details/i });

  userEvent.click(details);

  const Favorite = screen.getByText(/pokémon favoritado\?/i);

  userEvent.click(Favorite);

  const fav = getByRole('link', {
    name: /favorite pokémons/i,
  });

  userEvent.click(fav);

  const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });

  expect(pikachu).toBeInTheDocument();
});

test('testando se nenhum  card aparece se nenhum é favoritado ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const home = getByRole('link', {
    name: /home/i,
  });

  userEvent.click(home);

  const details = screen.getByRole('link', {
    name: /more details/i });

  userEvent.click(details);

  const Favorite = screen.getByText(/pokémon favoritado\?/i);

  userEvent.click(Favorite);

  const fav = getByRole('link', {
    name: /favorite pokémons/i,
  });

  userEvent.click(fav);

  const notFound = screen.getByText(/no favorite pokemon found/i);

  expect(notFound).toBeInTheDocument();
});
