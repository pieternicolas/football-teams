import { Interpolation, Theme } from '@emotion/react';

const playerProfileStyles: Record<string, Interpolation<Theme>> = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
  },
};

export default playerProfileStyles;
