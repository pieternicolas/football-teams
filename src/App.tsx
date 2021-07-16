import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { css, Global } from '@emotion/react';

import useTypedSwitch from 'hooks/useTypedSwitch';

import mainRoutingList from 'config/router';

const App = () => {
  const RouterSwitch = useTypedSwitch(mainRoutingList, ({ children }) => (
    <>
      <Suspense fallback={null}>
        <BrowserRouter>{children ?? <></>}</BrowserRouter>
      </Suspense>
    </>
  ));

  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      />

      <RouterSwitch />
    </>
  );
};

export default App;
