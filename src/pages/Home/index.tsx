import WorldMap from 'components/WorldMap';

import useAxios from 'hooks/useAxios';

import { GetAreas, GetAreasReturnProps } from 'api/queries';

const Home = () => {
  const [{ data }] = useAxios<GetAreasReturnProps>(GetAreas);

  return (
    <>
      <WorldMap
        onRegionClick={(geoData) => {
          console.log(geoData);
        }}
      />
    </>
  );
};

export default Home;
