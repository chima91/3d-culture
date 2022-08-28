import { VFC } from 'react';
import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

export const SNS: VFC = () => (
  <span style={{ marginLeft: 15 }}>
    <TwitterShareButton
      url={window.location.href}
      title='「3dimencul」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LineShareButton
      url={window.location.href}
      title='「3dimencul」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <LineIcon size={32} round />
    </LineShareButton>
    <FacebookShareButton
      url={window.location.href}
      quote='「3dimencul」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  </span>
);
