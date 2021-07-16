import { useMemo } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import {
  makeUseAxios,
  Options,
  RefetchOptions,
  UseAxiosResult,
} from 'axios-hooks';

export const axiosInstance = axios.create({
  baseURL: 'https://api.football-data.org/v2',
  headers: {
    'X-Auth-Token': process.env.REACT_APP_AUTH_TOKEN,
  },
});

const baseUseAxiosHook = makeUseAxios({
  axios: axiosInstance,
  cache: false,
});

interface UseAxiosProps {
  <TResponse = any, THandledData = never, TError = any>(
    config: AxiosRequestConfig | string,
    options?: Options,
    dataHandler?: THandledData,
  ): UseAxiosResult<TResponse, TError>;
}
interface UseAxiosProps {
  <TResponse = any, THandledData = TResponse, TError = any>(
    config: AxiosRequestConfig | string,
    options?: Options,
    dataHandler?: (rawData?: TResponse) => THandledData,
  ): UseAxiosResult<THandledData, TError>;
}

const useAxios: UseAxiosProps = <
  TResponse = any,
  THandledData = TResponse,
  TError = any,
>(
  props: AxiosRequestConfig | string,
  config?: RefetchOptions,
  dataHandler?: (rawData?: TResponse) => THandledData,
) => {
  const rawResponse = baseUseAxiosHook<TResponse, TError>(props, config);

  const result = useMemo(
    () => ({
      ...rawResponse[0],
      data: dataHandler
        ? dataHandler(rawResponse[0].data)
        : rawResponse[0].data,
    }),
    [dataHandler, rawResponse],
  );

  return [result, rawResponse[1], rawResponse[2]];
};

export default useAxios;
