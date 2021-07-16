import { useState } from 'react';

import WorldMap from 'components/WorldMap';

import useAxios from 'hooks/useAxios';

import { useGetTeamsPerRegion } from 'api/hooks';
import { GetAreas, GetAreasReturnProps } from 'api/queries';
import { Area } from 'types/dataTypes';

const Home = () => {
  const [selectedArea, setSelectedArea] = useState<Area>();
  const teamsInRegion = useGetTeamsPerRegion(selectedArea?.id ?? 0);

  const [{ data: areasData }] = useAxios<GetAreasReturnProps>(GetAreas);

  const handleRegionClick = (regionCode: string) => {
    setSelectedArea(
      areasData?.areas.find((area) => area.countryCode === regionCode),
    );
  };

  return (
    <>
      <WorldMap
        onRegionClick={(geoData) => {
          handleRegionClick(geoData.ISO_A3);
        }}
      />
    </>
  );
};

export default Home;
