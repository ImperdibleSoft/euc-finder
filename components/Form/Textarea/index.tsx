import { TextareaAutosize } from '@mui/material';
import React from 'react';

interface Props {
  disabled?: boolean;
  minRows?: number;
  resizable?: boolean;
  style?: React.CSSProperties;
  value?: string;
}

const Textarea = ({ disabled = false, minRows, resizable=false, style, value }: Props): JSX.Element => (
  <TextareaAutosize
    disabled={ disabled }
    minRows={ minRows }
    style={ {
      fontFamily: 'Roboto',
      fontSize: '14px',
      padding: 8,
      resize: resizable ? 'both' : 'none',
      whiteSpace: 'pre',
      ...style
    } }
    value={ value }
  />
);

export default Textarea;
