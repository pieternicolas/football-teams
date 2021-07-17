import { useEffect, useState } from 'react';

import useAxios, { axiosInstance } from 'hooks/useAxios';

import { Team } from 'types/dataTypes';
import {
  GetCompetitions,
  GetCompetitionsReturnProps,
  GetTeamsInCompetition,
  GetTeamsInCompetitionReturnProps,
} from './queries';

export const useGetTeamsPerRegion = (regionCode: number) => {
  const [teams, setTeams] = useState<Team[]>();

  const [{ data: competitionsData }, fetchCompetitions] =
    useAxios<GetCompetitionsReturnProps>(GetCompetitions(regionCode), {
      manual: true,
    });

  useEffect(() => {
    if (regionCode) {
      fetchCompetitions();
    }
  }, [regionCode, fetchCompetitions]);

  useEffect(() => {
    if (competitionsData) {
      const fetches = competitionsData?.competitions.map((competition) => {
        return axiosInstance.request<GetTeamsInCompetitionReturnProps>(
          GetTeamsInCompetition(competition.id),
        );
      });

      Promise.allSettled(fetches).then((fetchResults) => {
        const allTeams = fetchResults.reduce<Team[]>((acc, result) => {
          if (result.status === 'fulfilled') {
            return [...acc, ...(result.value.data?.teams ?? [])];
          }

          return acc;
        }, []);

        setTeams(allTeams);
      });
    }
  }, [competitionsData]);

  return teams;
};
