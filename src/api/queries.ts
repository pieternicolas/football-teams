import { AxiosRequestConfig } from 'axios';
import { Area } from 'types/dataTypes';

export type GetAreasReturnProps = {
  count: number;
  filters: Record<string, any>;
  areas: Area[];
};
export const GetAreas: AxiosRequestConfig = { url: '/areas', method: 'GET' };
