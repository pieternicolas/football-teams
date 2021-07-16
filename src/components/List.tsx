import { HTMLAttributes } from 'react';

const List = ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => {
  return <ul {...props}>{children}</ul>;
};

export const ListItem = ({
  children,
  ...props
}: HTMLAttributes<HTMLLIElement>) => {
  return <li {...props}>{children}</li>;
};

export default List;
