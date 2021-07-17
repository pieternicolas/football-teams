/** @jsxImportSource @emotion/react */
import { HTMLAttributes } from 'react';

export type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: 'heading' | 'paragraph';
};

const baseTextStyles = {
  margin: 0,
};

const Text = ({ children, as, ...props }: TextProps) => {
  if (as === 'heading') {
    return (
      <h3 css={baseTextStyles} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <p css={baseTextStyles} {...props}>
      {children}
    </p>
  );
};

export default Text;
