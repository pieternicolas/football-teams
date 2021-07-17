import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {};

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
