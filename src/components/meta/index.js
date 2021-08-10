import Head from 'next/head';
import createImageUrl from '../../utils/createImageUrl';

const Meta = ({ imageUrl, name, keywords, intro }) => {
  const url = createImageUrl(imageUrl);
  return (
    <Head>
      <title>{name}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google" content="notranslate" />
      <meta name="Description" content={intro} />
      <meta name="keywords" content={keywords} />
      <meta name="og:title" content={name} />
      <meta name="og:type" content="website" />
      <meta property="og:image" content={url} />
      <meta name="og:description" content={intro} />
      <link rel="icon" href="/images/frame-logo.svg" />
    </Head>
  );
};

export default Meta;
