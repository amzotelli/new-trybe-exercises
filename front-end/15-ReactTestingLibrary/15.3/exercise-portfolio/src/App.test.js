import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helper/renderWithRouter';

describe('Testa redirecionamento para as páginas', () => {
  it('Home e renderiza o texto esperado na tela', () => {
    const { history } = renderWithRouter(<App />);
    const linkToHome = screen.getByRole('link', {
      name: /home/i,
    });

    userEvent.click(linkToHome);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/');
    const textHome = screen.getAllByText(/home/i);
    const textContact = screen.getAllByText(/contact/i);
    const textAbout = screen.getAllByText(/ABout/i);
    const textProjects = screen.getAllByText(/Projects/i);
    expect(textHome).toHaveLength(2);
    expect(textContact).toHaveLength(1);
    expect(textAbout).toHaveLength(1);
    expect(textProjects).toHaveLength(1);
  });

  it('Contact e renderiza o texto esperado na tela', () => {
    const { history } = renderWithRouter(<App />);
    const linkToContact = screen.getByRole('link', {
      name: /contact/i,
    });

    userEvent.click(linkToContact);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/contact');
    const textContact = screen.getAllByText(/contact/i);
    const textHome = screen.getAllByText(/home/i);
    const textAbout = screen.getAllByText(/ABout/i);
    const textProjects = screen.getAllByText(/Projects/i);
    expect(textContact).toHaveLength(2);
    expect(textHome).toHaveLength(1);
    expect(textAbout).toHaveLength(1);
    expect(textProjects).toHaveLength(1);
  });

  it('Projects e renderiza o texto esperado na tela', () => {
    const { history } = renderWithRouter(<App />);
    const linkToProjects = screen.getByRole('link', {
      name: /projects/i,
    });

    userEvent.click(linkToProjects);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/projects');
    const textProjects = screen.getAllByText(/Projects/i);
    const textHome = screen.getAllByText(/home/i);
    const textContact = screen.getAllByText(/contact/i);
    const textAbout = screen.getAllByText(/ABout/i);
    expect(textProjects).toHaveLength(2);
    expect(textHome).toHaveLength(1);
    expect(textContact).toHaveLength(1);
    expect(textAbout).toHaveLength(1);
  });

  it('About e renderiza o texto esperado na tela', () => {
    const { history } = renderWithRouter(<App />);
    const linkToAbout = screen.getByRole('link', {
      name: /About/i,
    });

    userEvent.click(linkToAbout);
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const textAbout = screen.getAllByText(/About/i);
    const textHome = screen.getAllByText(/home/i);
    const textContact = screen.getAllByText(/contact/i);
    const textProjects = screen.getAllByText(/Projects/i);
    expect(textAbout).toHaveLength(2);
    expect(textHome).toHaveLength(1);
    expect(textContact).toHaveLength(1);
    expect(textProjects).toHaveLength(1);
  });
});
