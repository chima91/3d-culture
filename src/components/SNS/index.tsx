import {
  TwitterIcon,
  TwitterShareButton,
  LineShareButton,
  LineIcon,
  HatenaShareButton,
  HatenaIcon,
} from "react-share";

export const SNS = () => {
  return (
    <span style={{ marginLeft: 15 }}>
      <TwitterShareButton url={window.location.href} title='文化財のYouTube「Culpticon」で3Dの文化財を楽しもう!!!!' style={{ margin: 5 }}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LineShareButton url={window.location.href} title='文化財のYouTube「Culpticon」で3Dの文化財を楽しもう!!!!' style={{ margin: 5 }}>
        <LineIcon size={32} round />
      </LineShareButton>
      <HatenaShareButton url={window.location.href} title='文化財のYouTube「Culpticon」で3Dの文化財を楽しもう!!!!' style={{ margin: 5 }}>
        <HatenaIcon size={32} round />
      </HatenaShareButton>
    </span>
  )
}

