import { Route, Switch } from 'react-router-dom';
import { ComponentType } from 'react';

import { RoutingProps } from 'config/router';

export const useTypedSwitch = (
  routes: ReadonlyArray<RoutingProps>,
  providers: ComponentType,
  fallbackComponent?: ComponentType,
): ComponentType => {
  const Fallback = fallbackComponent;
  const Providers = providers;

  return () => (
    <Providers>
      <Switch>
        {routes.map(({ path, component: RouteComponent }) => (
          <Route exact strict sensitive path={path} key={`route-${path}`}>
            <RouteComponent />
          </Route>
        ))}
        {Fallback && <Fallback />}
      </Switch>
    </Providers>
  );
};

export default useTypedSwitch;
