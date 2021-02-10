import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderwithrouter';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

it('deve testar se a Pokedex é renderizada no app ', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={ ['/'] }>
      <App />
    </MemoryRouter>,
  );
  expect(getByText('Encountered pokémons')).toBeInTheDocument();
});

it('deve testar a barra de navegação ', () => {
  const { getByRole } = renderWithRouter(<App />);
  const homeLink = getByRole('link', {
    name: /Home/i,
  });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = getByRole('link', {
    name: /About/i,
  });
  expect(aboutLink).toBeInTheDocument();

  const favoritesLink = getByRole('link', {
    name: /Favorite Pokémons/i,
  });
  expect(favoritesLink).toBeInTheDocument();
});

it('testando redirecionamento da home', () => {
  const { history } = renderWithRouter(<App />);

  const homeLink = screen.getByRole('link', {
    name: /Home/i,
  });

  userEvent.click(homeLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/');
});

it('testando redirecionamento do about', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', {
    name: /About/i,
  });

  userEvent.click(aboutLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/about');
});

it('testando redirecionamento dos favoritos', () => {
  const { history } = renderWithRouter(<App />);

  const favoritesLink = screen.getByRole('link', {
    name: /Favorite Pokémons/i,
  });

  userEvent.click(favoritesLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/favorites');
});

it('Deve testar se a pagina vai para o notFound', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/pagina/que-nao-existe/');
  const noMatch = getByText(/Page requested not found/i);
  expect(noMatch).toBeInTheDocument();
});
