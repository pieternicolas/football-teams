import { Interpolation, Theme } from '@emotion/react';

const homeStyles: Record<string, Interpolation<Theme>> = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    gap: '0.5em',
  },
  worldMap: {
    flex: '0 0 auto',
    width: '60%',
    maxWidth: '960px',
  },
  teamList: {
    flex: '1 1 auto',
    overflowY: 'auto',
  },
};

export default homeStyles;
