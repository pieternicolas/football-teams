export type BaseArea = {
  id: number;
  name: string;
  countryCode: string;
  ensignUrl?: string;
  parentAreaId: number;
  parentArea: string;
};

export type Area = BaseArea & {
  childAreas: Area[];
};

export type Player = {
  id: number;
  name: string;
  firstName: string;
  lastName?: string;
  dateOfBirth: string; // date string
  countryOfBirth: string;
  nationality: string;
  position: string;
  shirtNumber?: number;
};

export type PlayerRole = Pick<
  Player,
  'id' | 'name' | 'position' | 'dateOfBirth' | 'countryOfBirth' | 'nationality'
> & {
  role: string;
};

export type Team = {
  id: number;
  area: {
    id: Area['id'];
    name: Area['name'];
  };
  crestUrl: string;
  name: string;
  shortName: string;
  tla: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors: string;
  venue?: string;
  squad: PlayerRole[];
  activeCompetitions: Competition[];
  lastUpdated: string; // date string
};

export type Season = {
  id: string;
  startDate: string; // date string
  endDate: string; // date string
  currentMatchDay?: number;
  winner?: Team;
  lastUpdated: string; // date string
};

export type Competition = {
  id: number;
  area: {
    id: Area['id'];
    name: Area['name'];
  };
  name: string;
  code: string;
  emblemUrl?: string;
  currentSeason: Season;
  seasons: Season[];
  lastUpdated: string; // date string
};
