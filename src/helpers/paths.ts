import { Path, PathParams } from 'config/router';

export type BuildUrlProps<T extends Path> = {
  path: T;
  params: PathParams<T>;
};

export const buildUrl = <T extends Path>(
  path: BuildUrlProps<T>['path'],
  params: BuildUrlProps<T>['params'],
): string => {
  let url: string = path;

  const paramObj: { [i: string]: string } = params;

  for (const key of Object.keys(paramObj)) {
    url = url.replace(`:${key}`, paramObj[key]);
  }

  return url;
};

export const isParams = <T extends Path>(
  path: T,
  params: unknown,
): params is PathParams<T> => {
  if (!(params instanceof Object)) {
    return false;
  }

  const paramSet = new Set(Object.keys(params));

  const requiredParams = path
    .split('/')
    .filter((s) => s.startsWith(':'))
    .map((s) => s.substr(1));

  for (const x of requiredParams) {
    if (!paramSet.has(x)) {
      return false;
    }
  }

  return true;
};
