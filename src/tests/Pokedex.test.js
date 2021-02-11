import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

it('Testa o heading da página', () => {
  const { getByRole } = renderWithRouter(<App />);
  const homeLink = getByRole('link', {
    name: /Home/i,
  });
  userEvent.click(homeLink);

  const mainPageHeading = screen.getByRole('heading', {
    level: 2,
    name: /encountered pokémons/i });

  expect(mainPageHeading).toBeInTheDocument();
});

it('Testa o proximo pokemon ', () => {
  const { getByRole } = renderWithRouter(<App />);
  const homeLink = getByRole('link', {
    name: /Home/i,
  });
  userEvent.click(homeLink);

  const proximo = screen.getByRole('button', {
    name: /próximo pokémon/i });

  const button = screen.getAllByTestId('pokemon-type-button')[0];
  expect(button).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon = screen.getByRole('img', { name: /charmander sprite/i });
  expect(proximopokemon).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon2 = screen.getByRole('img', { name: /Caterpie/i });
  expect(proximopokemon2).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon3 = screen.getByRole('img', { name: /Ekans/i });
  expect(proximopokemon3).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon4 = screen.getByRole('img', { name: /Alakazam/i });
  expect(proximopokemon4).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon5 = screen.getByRole('img', { name: /Mew/i });
  expect(proximopokemon5).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon6 = screen.getByRole('img', { name: /Rapidash/i });
  expect(proximopokemon6).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon7 = screen.getByRole('img', { name: /Snorlax/i });
  expect(proximopokemon7).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon8 = screen.getByRole('img', { name: /Dragonair/i });
  expect(proximopokemon8).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon9 = screen.getByRole('img', { name: /Pikachu/i });
  expect(proximopokemon9).toBeInTheDocument();
});

it('Testa se apaarece só um pokemon ', () => {
  const { getByRole } = renderWithRouter(<App />);
  const homeLink = getByRole('link', {
    name: /Home/i,
  });
  userEvent.click(homeLink);
  const pokemon = document.getElementsByClassName('pokemon');
  expect(pokemon).toHaveLength(1);
});

it('Testa os botoẽs do filtro', () => {
  const { getByRole } = renderWithRouter(<App />);

  const buttonall = getByRole('button', { name: /all/i });
  expect(buttonall).toBeInTheDocument();

  const eletricbutton = screen.getByRole('button', { name: /electric/i });
  expect(eletricbutton).toBeInTheDocument();

  const firebutton = screen.getByRole('button', { name: /fire/i });
  expect(firebutton).toBeInTheDocument();

  const bugbutton = screen.getByRole('button', { name: /bug/i });
  expect(bugbutton).toBeInTheDocument();

  const poisonbutton = screen.getByRole('button', { name: /poison/i });
  expect(poisonbutton).toBeInTheDocument();

  const psybutton = screen.getByRole('button', { name: /psychic/i });
  expect(psybutton).toBeInTheDocument();

  const normalbutton = screen.getByRole('button', { name: /normal/i });
  expect(normalbutton).toBeInTheDocument();

  const dragonbutton = screen.getByRole('button', { name: /dragon/i });
  expect(dragonbutton).toBeInTheDocument();
});

it('Testando a funcionalidade dos botões ', () => {
  const { getByRole } = renderWithRouter(<App />);
  const eletricbutton = getByRole('button', { name: /electric/i });
  userEvent.click(eletricbutton);

  const type = screen.getByTestId('pokemonType');
  expect(type).toHaveTextContent('Electric');

  const firebutton = screen.getByRole('button', { name: /fire/i });
  userEvent.click(firebutton);

  const type2 = screen.getByTestId('pokemonType');
  expect(type2).toHaveTextContent('Fire');

  const bugbutton = screen.getByRole('button', { name: /bug/i });
  userEvent.click(bugbutton);

  const type3 = screen.getByTestId('pokemonType');
  expect(type3).toHaveTextContent('Bug');

  const poisonbutton = screen.getByRole('button', { name: /poison/i });
  userEvent.click(poisonbutton);

  const type4 = screen.getByTestId('pokemonType');
  expect(type4).toHaveTextContent('Poison');

  const psybutton = screen.getByRole('button', { name: /psychic/i });
  userEvent.click(psybutton);

  const type5 = screen.getByTestId('pokemonType');
  expect(type5).toHaveTextContent('Psychic');

  const normalbutton = screen.getByRole('button', { name: /normal/i });
  userEvent.click(normalbutton);

  const type6 = screen.getByTestId('pokemonType');
  expect(type6).toHaveTextContent('Normal');

  const dragonbutton = screen.getByRole('button', { name: /dragon/i });
  userEvent.click(dragonbutton);

  const type7 = screen.getByTestId('pokemonType');
  expect(type7).toHaveTextContent('Dragon');
});

it('Testando o botão de reset ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const resetbutton = getByRole('button', { name: /all/i });
  expect(resetbutton).toBeInTheDocument();

  userEvent.click(resetbutton);
  const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pikachu).toBeInTheDocument();
});

it('Ao carregar a pagina o botão all deve estar clickado ', () => {
  const { history } = renderWithRouter(<App />);
  history.push('/');

  const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pikachu).toBeInTheDocument();

  const proximo = screen.getByRole('button', {
    name: /próximo pokémon/i });

  userEvent.click(proximo);
  const proximopokemon = screen.getByRole('img', { name: /charmander sprite/i });
  expect(proximopokemon).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon2 = screen.getByRole('img', { name: /Caterpie/i });
  expect(proximopokemon2).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon3 = screen.getByRole('img', { name: /Ekans/i });
  expect(proximopokemon3).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon4 = screen.getByRole('img', { name: /Alakazam/i });
  expect(proximopokemon4).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon5 = screen.getByRole('img', { name: /Mew/i });
  expect(proximopokemon5).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon6 = screen.getByRole('img', { name: /Rapidash/i });
  expect(proximopokemon6).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon7 = screen.getByRole('img', { name: /Snorlax/i });
  expect(proximopokemon7).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon8 = screen.getByRole('img', { name: /Dragonair/i });
  expect(proximopokemon8).toBeInTheDocument();

  userEvent.click(proximo);
  const proximopokemon9 = screen.getByRole('img', { name: /Pikachu/i });
  expect(proximopokemon9).toBeInTheDocument();
});
