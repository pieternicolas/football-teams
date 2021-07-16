import { useEffect, useState } from 'react';

import useAxios, { axiosInstance } from 'hooks/useAxios';

import { Competition, Season, Team } from 'types/dataTypes';
import { GetCompetitions, GetCompetitionsReturnProps } from './queries';

type GetTeamsInCompetition = {
  count: number;
  filters: Record<string, any>;
  competition: Competition;
  season: Season;
  teams: Team[];
};

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
        return axiosInstance.request<GetTeamsInCompetition>({
          url: `/competitions/${competition.id}/teams`,
        });
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
