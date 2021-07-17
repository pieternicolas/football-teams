import Text, { TextProps } from 'atoms/Text';
import { AnchorHTMLAttributes } from 'react';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  textProps?: TextProps;
};

const Link = ({ textProps, children, target, ...props }: LinkProps) => {
  return (
    <>
      <Text {...textProps}>
        <a {...props} rel={target === '_blank' ? 'noopener' : undefined}>
          {children}
        </a>
      </Text>
    </>
  );
};

export default Link;
