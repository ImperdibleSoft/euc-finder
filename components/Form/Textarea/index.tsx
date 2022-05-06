import React from 'react';

const paddingTop = 8;
const paddingBottom = 16;
const lineHeight = 14;

interface Props {
  disabled?: boolean;
  minRows?: number;
  resizable?: boolean;
  style?: React.CSSProperties;
  value?: string;
}

const Textarea = ({ disabled = false, minRows = 6, resizable=false, style, value }: Props): JSX.Element => (
  <textarea
    disabled={ disabled }
    style={ {
      boxSizing: 'border-box',
      fontFamily: 'Roboto',
      fontSize: '14px',
      lineHeight: `${ lineHeight }px`,
      minHeight: (minRows * lineHeight + paddingTop + paddingBottom),
      padding: 8,
      resize: resizable ? 'both' : 'none',
      whiteSpace: 'pre',
      ...style
    } }
    value={ value }
  />
);

export default Textarea;
