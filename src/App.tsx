import React, { Suspense, Fragment } from 'react';
import { Normalize } from '@smooth-ui/core-sc';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import screens from './screens';
import theme from './assets/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Normalize />
        <BrowserRouter>
          <Suspense fallback="Loading">
            <Switch>
              {screens.map((screen, index) => (
                <Route key={index} {...screen} />
              ))}
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
