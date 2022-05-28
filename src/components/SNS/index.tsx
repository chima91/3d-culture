import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

export const SNS = () => (
  <span style={{ marginLeft: 15 }}>
    <TwitterShareButton
      url={window.location.href}
      title='「Culpticon」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
    <LineShareButton
      url={window.location.href}
      title='「Culpticon」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <LineIcon size={32} round />
    </LineShareButton>
    <FacebookShareButton
      url={window.location.href}
      quote='「Culpticon」で3Dの文化財を楽しもう!'
      style={{ margin: 5 }}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  </span>
);
