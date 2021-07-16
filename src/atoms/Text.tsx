import { HTMLAttributes } from 'react';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {};

const Text = ({ children, ...props }: TextProps) => {
  return <p {...props}>{children}</p>;
};

export default Text;
