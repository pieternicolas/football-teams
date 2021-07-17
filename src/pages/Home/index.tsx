/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';

import List, { ListItem } from 'components/List';
import WorldMap from 'components/WorldMap';

import useAxios from 'hooks/useAxios';
import useHistory from 'hooks/useHistory';

import { useGetTeamsPerRegion } from 'api/hooks';
import { GetAreas, GetAreasReturnProps } from 'api/queries';
import { Area } from 'types/dataTypes';

import homeStyles from './styles';

const Home = () => {
  const { historyPush } = useHistory();

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
      <Div css={homeStyles.root}>
        <WorldMap
          onRegionClick={(geoData) => {
            handleRegionClick(geoData.ISO_A3);
          }}
          css={homeStyles.worldMap}
        />

        {selectedArea && (
          <>
            <Text>Teams in {selectedArea.name}</Text>
            <List css={homeStyles.teamList}>
              {teamsInRegion?.map((team) => (
                <ListItem
                  key={`team-item-${team.id}`}
                  onClick={() =>
                    historyPush('/team/:teamId', { teamId: String(team.id) })
                  }
                >
                  <Text>{team.name}</Text>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Div>
    </>
  );
};

export default Home;
