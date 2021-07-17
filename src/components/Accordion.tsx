/** @jsxImportSource @emotion/react */
import { ReactNode, useState } from 'react';
import { Interpolation, Theme } from '@emotion/react';

import Button from 'atoms/Button';
import Div from 'atoms/Div';

export type AccordionProps = {
  header: string;
  children?: ReactNode;
  css?: Interpolation<Theme>;
};

const accordionStyles: Record<string, Interpolation<Theme>> = {
  button: {
    backgroundColor: '#eee',
    color: '#444',
    cursor: 'pointer',
    padding: '1em',
    width: '100%',
    textAlign: 'left',
    border: 'none',
    outline: 'none',
    transition: '0.4s',
    ':hover': {
      backgroundColor: '#ccc',
    },
    panel: {
      padding: '1em',
    },
  },
};

const Accordion = ({ children, header, css }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Div css={css}>
        <Button
          css={accordionStyles.button}
          onClick={() => setOpen((currentState) => !currentState)}
        >
          {header}
        </Button>
        {open && <Div css={accordionStyles.panel}>{children}</Div>}
      </Div>
    </>
  );
};

export default Accordion;
