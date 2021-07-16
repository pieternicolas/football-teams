import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
      <RouterSwitch />
    </>
  );
};

export default App;
