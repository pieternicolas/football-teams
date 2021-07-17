/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';
import { Interpolation, Theme } from '@emotion/react';

const listStyles: Interpolation<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4em',
};

const List = ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul css={listStyles} {...props}>
      {children}
    </ul>
  );
};

export const ListItem = ({
  children,
  ...props
}: HTMLAttributes<HTMLLIElement>) => {
  return <li {...props}>{children}</li>;
};

export default List;
