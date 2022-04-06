import { Link } from '@mui/material';
import React from 'react';

interface Props {
  margins?: boolean;
  userName: string;
}

const InstagramChip = ({ margins = false, userName }: Props): JSX.Element => (
  <Link
    href={ `https://www.instagram.com/${ userName }` }
    target="_blank"
    rel="noopener noreferrer"
    sx={ {
      color: '#3897f0',
      display: margins ? 'block' : 'inline-block',
      mb: margins ? 2 : 0,
      '&:last-of-type': { mb: 0 }
    } }
  >
    @{ userName }
  </Link>
);

export default InstagramChip;
