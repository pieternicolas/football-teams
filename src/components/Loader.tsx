/** @jsxImportSource @emotion/react */
import { Interpolation, keyframes, Theme } from '@emotion/react';

import Div from 'atoms/Div';
import Image from 'atoms/Image';

import loading from 'assets/svg/loading.svg';

const spinningAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;
const loaderStyles: Record<string, Interpolation<Theme>> = {
  root: {
    animation: `${spinningAnimation} infinite 2s linear`,
    height: '10%',
    width: '10%',
  },
  centeringContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export type LoaderProps = {
  centered?: boolean;
};

const Loader = ({ centered }: LoaderProps) => {
  if (centered) {
    return (
      <Div css={loaderStyles.centeringContainer}>
        <Image src={loading} css={loaderStyles.root} alt="loader" />
      </Div>
    );
  }

  return <Image src={loading} css={loaderStyles.root} alt="loader" />;
};

export default Loader;
