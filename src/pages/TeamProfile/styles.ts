import { Interpolation, Theme } from '@emotion/react';

const teamProfileStyles: Record<string, Interpolation<Theme>> = {
  root: {
    width: '80%',
    maxWidth: '960px',
    margin: '0 auto',
    padding: '1em 0',
  },
  header: {
    display: 'flex',
    gap: '0.5em',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
  },
  logo: {
    width: '100px',
  },
};

export default teamProfileStyles;
