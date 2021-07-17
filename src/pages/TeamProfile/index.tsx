/** @jsxImportSource @emotion/react */
import { useMemo } from 'react';

import Div from 'atoms/Div';
import Image from 'atoms/Image';
import Text from 'atoms/Text';

import Loader from 'components/Loader';
import Link from 'components/Link';
import List, { ListItem } from 'components/List';
import Accordion from 'components/Accordion';

import useAxios from 'hooks/useAxios';
import useParams from 'hooks/useParams';

import { GetTeamById, GetTeamByIdReturnProps } from 'api/queries';

import { groupBy } from 'helpers/data';

import teamProfileStyles from './styles';

const TeamProfile = () => {
  const params = useParams('/team/:teamId');

  const [{ data: teamProfileData, loading }] = useAxios<GetTeamByIdReturnProps>(
    GetTeamById(Number(params?.teamId)),
  );

  const squads = useMemo(() => {
    return Array.from(
      groupBy(teamProfileData?.squad ?? [], (player) => player.position),
    );
  }, [teamProfileData?.squad]);

  return (
    <>
      <Div css={teamProfileStyles.root}>
        {loading && <Loader centered />}

        {teamProfileData && (
          <>
            <Div css={teamProfileStyles.header}>
              <Image
                src={teamProfileData.crestUrl}
                css={teamProfileStyles.logo}
              />
              <Div css={teamProfileStyles.section}>
                <Text as="heading">{`${teamProfileData.name} (${teamProfileData.tla})`}</Text>
                <Text>Founded {teamProfileData.founded}</Text>
                <Link href={teamProfileData.website} target="_blank">
                  {teamProfileData.website}
                </Link>
              </Div>
            </Div>

            <Div css={teamProfileStyles.section}>
              <Text>Current squad</Text>
              <Div>
                {squads.map((squad) => (
                  <Accordion header={squad[0]} key={`position-${squad[0]}`}>
                    <List>
                      {squad[1].map((player) => (
                        <ListItem key={`player-${player.id}`}>
                          {player.name}
                        </ListItem>
                      ))}
                    </List>
                  </Accordion>
                ))}
              </Div>
            </Div>
          </>
        )}
      </Div>
    </>
  );
};

export default TeamProfile;
