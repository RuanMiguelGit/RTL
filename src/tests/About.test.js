import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

it('testando o heading do about ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const aboutLink = getByRole('link', {
    name: /about/i,
  });

  userEvent.click(aboutLink);

  const aboutheading = getByRole('heading', {
    name: /about pokédex/i,
  });

  expect(aboutheading).toBeInTheDocument();
});

it('testando o primeiro paragrafo', () => {
  const { getByRole, getByText } = renderWithRouter(<App />);

  const aboutLink = getByRole('link', {
    name: /about/i,
  });

  userEvent.click(aboutLink);

  const text1 = getByText(
    /This application/,
    /simulates a Pokédex, a digital encliclopedia containing all Pokémons/i
    ,
  );

  expect(text1).toBeInTheDocument();
});

it('testando o segundo paragrafo', () => {
  const { getByRole, getByText } = renderWithRouter(<App />);

  const aboutLink = getByRole('link', {
    name: /about/i,
  });

  userEvent.click(aboutLink);

  const text = getByText(
    /one can filter pokémons by type, and see more details for each one of them/i,
  );

  expect(text).toBeInTheDocument();
});

it('testando as inagens ', () => {
  const { getByRole } = renderWithRouter(<App />);

  const aboutLink = getByRole('link', {
    name: /about/i,
  });

  userEvent.click(aboutLink);

  const picture = screen.getByRole('img', {
    name: /pokédex/i,
  });

  expect(picture).toBeInTheDocument();
  expect(picture).toHaveAttribute('src', 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
