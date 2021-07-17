import { AxiosRequestConfig } from 'axios';

import { Area, Competition, Season, Team } from 'types/dataTypes';

export type GetAreasReturnProps = {
  count: number;
  filters: Record<string, any>;
  areas: Area[];
};
export const GetAreas: AxiosRequestConfig = { url: '/areas', method: 'GET' };

export type GetCompetitionsReturnProps = {
  count: number;
  filters: Record<string, any>;
  competitions: Competition[];
};
export const GetCompetitions = (areaCode: number): AxiosRequestConfig => ({
  url: '/competitions',
  params: {
    areas: areaCode,
  },
  method: 'GET',
});

export type GetTeamsInCompetitionReturnProps = {
  count: number;
  filters: Record<string, any>;
  competition: Competition;
  season: Season;
  teams: Team[];
};
export const GetTeamsInCompetition = (
  competitionId: number,
): AxiosRequestConfig => ({
  url: `/competitions/${competitionId}/teams`,
  method: 'GET',
});
