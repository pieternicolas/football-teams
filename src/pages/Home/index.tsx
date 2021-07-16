import useAxios from 'hooks/useAxios';

import { GetAreas, GetAreasReturnProps } from 'api/queries';

const Home = () => {
  const [{ data }] = useAxios<GetAreasReturnProps>(GetAreas, {});

  return <></>;
};

export default Home;
