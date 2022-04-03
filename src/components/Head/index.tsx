/**
 * @prettier
 */

import { Helmet, HelmetProvider } from 'react-helmet-async';

type HeadProps = {
  title: string | undefined;
  imgUrl: string | undefined | null;
};

const Head = ({ title, imgUrl }: HeadProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        {title ? <title>{title} - Culpticon</title> : <title>Culpticon</title>}
        <meta
          name='description'
          content='3D文化財鑑賞用Webアプリケーション「Culpticon」では、博物館施設が所蔵する文化財をスマホやパソコンから3Dで鑑賞することができます。'
        />
        <head prefix='og: http://ogp.me/ns#' />
        <meta property='og:url' content='https://www.culpticon.net/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Culpticon' />
        <meta
          property='og:description'
          content='3D文化財鑑賞用Webアプリケーション「Culpticon」では、博物館施設が所蔵する文化財をスマホやパソコンから3Dで鑑賞することができます。'
        />
        <meta property='og:site_name' content='Culpticon' />
        {imgUrl ? (
          <meta property='og:image' content={imgUrl} />
        ) : (
          <meta
            property='og:image'
            content='https://www.culpticon.net/static/logo.png'
          />
        )}
        <meta name='twitter:card' content='summary' />
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
