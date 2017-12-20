import * as React from 'react';
import { StatelessComponent } from 'react';
import { Header } from './header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HomePage } from "./home/HomePage";

export const App: StatelessComponent = () => {
  return (
    <MuiThemeProvider>
      <Header />
      <HomePage />
    </MuiThemeProvider>
  );
}