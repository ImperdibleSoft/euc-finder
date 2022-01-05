import React from 'react';

interface Props {
  autoplay?: boolean;
  controls?: boolean;
  url: string;
  width: number;
}
const YoutubePlayer: React.FC<Props> = ({ autoplay = false, controls = false, url, width = 560 }) =>{
  const allow = ['accelerometer', 'clipboard-write', 'encrypted-media', 'gyroscope', 'picture-in-picture'];
  if (autoplay) {
    allow.push('autoplay');
  }

  const height = 315 * width / 560;

  return (
    <iframe
      key={ url }
      allow={ allow.join('; ') }
      allowFullScreen
      frameBorder="0"
      height={ height }
      src={ `${ url }&controls=${ controls ? 1 : 0 }` }
      title="YouTube video player"
      width={ width }
    />
  );};


export default YoutubePlayer;