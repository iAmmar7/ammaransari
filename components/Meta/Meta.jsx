import Head from 'next/head';
import { APP_URL } from '../../lib/constants';

function Meta(props) {
  const { title, description, image, route = '' } = props;

  return (
    <Head>
      <title>{`${title} 🤙`}</title>
      <meta content={title} property='og:title' />
      <meta content={description} name='description' />
      <meta content={description} property='og:description' />
      <meta content={`${APP_URL}${route}`} property='og:url' />
      <meta content={`${APP_URL}${image}`} itemProp='image' property='og:image' />
      <meta content={`${APP_URL}${image}`} property='og:image:secure_url' />
    </Head>
  );
}

export default Meta;
