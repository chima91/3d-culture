import { Helmet, HelmetProvider } from 'react-helmet-async';

type HeadProps = {
  title: string | undefined;
  imgUrl: string | undefined | null;
};

const Head = ({ title, imgUrl }: HeadProps) => (
  <HelmetProvider>
    <Helmet>
      {title ? <title>{title} - 3dimencul</title> : <title>3dimencul</title>}
      <meta
        name='description'
        content='3D文化財鑑賞用Webアプリケーション「3dimencul」では、博物館施設が所蔵する文化財をスマホやパソコンから3Dで鑑賞することができます。'
      />
      <head prefix='og: http://ogp.me/ns#' />
      <meta property='og:url' content='https://www.3dimencul.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='3dimencul' />
      <meta
        property='og:description'
        content='3D文化財鑑賞用Webアプリケーション「3dimencul」では、博物館施設が所蔵する文化財をスマホやパソコンから3Dで鑑賞することができます。'
      />
      <meta property='og:site_name' content='3dimencul' />
      {imgUrl ? (
        <meta property='og:image' content={imgUrl} />
      ) : (
        <meta
          property='og:image'
          content='https://www.3dimencul.com/static/logo.png'
        />
      )}
      <meta name='twitter:card' content='summary' />
    </Helmet>
  </HelmetProvider>
);

export default Head;
