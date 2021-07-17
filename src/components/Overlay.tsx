/** @jsxImportSource @emotion/react */
import { MouseEvent, ReactNode } from 'react';
import { Interpolation, Theme } from '@emotion/react';

import Div from 'atoms/Div';

export type OverlayProps = {
  open: boolean;
  children?: ReactNode;
  onContainerClick?: () => void;
};

const overlayStyles: Record<string, Interpolation<Theme>> = {
  container: {
    height: '0',
    width: '100%',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    overflowX: 'hidden',
    transition: '0.5s',
  },
  containerOpen: {
    height: '100%',
  },
  content: {
    position: 'relative',
    top: '25%',
    width: '60%',
    maxWidth: '960px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2em',
  },
};

const Overlay = ({ open, children, onContainerClick }: OverlayProps) => {
  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      onContainerClick?.();
    }
  };

  return (
    <Div
      css={[overlayStyles.container, open && overlayStyles.containerOpen]}
      onClick={handleContainerClick}
    >
      <Div css={overlayStyles.content}>{children}</Div>
    </Div>
  );
};

export default Overlay;
