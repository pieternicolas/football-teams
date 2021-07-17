import { useMemo } from 'react';
import { useHistory as useRouterHistory } from 'react-router-dom';

import { Path } from 'config/router';

import { buildUrl, BuildUrlProps } from 'helpers/paths';

const useHistory = () => {
  const history = useRouterHistory();

  return useMemo(
    () => ({
      history,
      historyBack: (amount: number = 0) => {
        if (amount > 0) throw new Error('Needs to be a negative number');

        history.go(amount);
      },
      historyRefresh: () => history.go(0),
      historyPush: <T extends Path>(
        path: BuildUrlProps<T>['path'],
        params: BuildUrlProps<T>['params'],
      ) => history.push(buildUrl(path, params)),
      historyReplace: <T extends Path>(
        path: BuildUrlProps<T>['path'],
        params: BuildUrlProps<T>['params'],
      ) => history.replace(buildUrl(path, params)),
    }),
    [history],
  );
};

export default useHistory;
