import { useRouteMatch } from 'react-router';

import { Path, PathParams } from 'config/router';
import { isParams } from 'helpers/paths';

const useParams = <P extends Path>(path: P): PathParams<P> | null => {
  const match = useRouteMatch({
    path,
    exact: true,
    sensitive: true,
    strict: true,
  });

  if (!match || !isParams(path, match.params)) {
    return null;
  }

  return match.params;
};

export default useParams;
