/** @jsxImportSource @emotion/react */
import { useEffect } from 'react';

import Div from 'atoms/Div';
import Text from 'atoms/Text';

import Overlay from 'components/Overlay';
import Loader from 'components/Loader';

import useAxios from 'hooks/useAxios';

import { GetPlayerById, GetPlayerByIdReturnProps } from 'api/queries';
import { Player } from 'types/dataTypes';

import playerProfileStyles from './styles';

export type PlayerProfileProps = {
  playerId?: Player['id'];
  onClosePlayerProfile?: () => void;
};

const PlayerProfile = ({
  playerId,
  onClosePlayerProfile,
}: PlayerProfileProps) => {
  const [{ data: playerProfileData, loading }, fetchPlayerData] =
    useAxios<GetPlayerByIdReturnProps>(GetPlayerById(Number(playerId)), {
      manual: true,
    });

  useEffect(() => {
    if (playerId) {
      fetchPlayerData();
    }
  }, [playerId, fetchPlayerData]);

  const open = !!playerId;

  return (
    <>
      <Overlay open={open} onContainerClick={() => onClosePlayerProfile?.()}>
        {open && (
          <Div css={playerProfileStyles.content}>
            {loading && <Loader centered />}
            {playerProfileData && !loading && (
              <>
                <Text as="heading">{playerProfileData.name}</Text>
                <Text>Date of birth: {playerProfileData.dateOfBirth}</Text>
                <Text>
                  Nationality / country of birth:{' '}
                  {playerProfileData.nationality ===
                  playerProfileData.countryOfBirth
                    ? playerProfileData.nationality
                    : `${playerProfileData.nationality} / ${playerProfileData.countryOfBirth}`}
                </Text>
                <Text>Position: {playerProfileData.position}</Text>
                {playerProfileData.shirtNumber && (
                  <Text>Shirt Number: {playerProfileData.shirtNumber}</Text>
                )}
              </>
            )}
          </Div>
        )}
      </Overlay>
    </>
  );
};

export default PlayerProfile;
