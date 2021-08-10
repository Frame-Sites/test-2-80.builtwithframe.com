import { gql } from '@apollo/client';
import { HomePage } from '../components';
import { getApolloClient } from '../utils';

export default function Home(props) {
  const { profile } = props;
  return <HomePage profile={profile} />;
}

export const getStaticProps = async () => {
  const GET_PROFILE = gql`{
    getProfile (account_id: "${process.env.GATSBY_ACCOUNT_ID}") {
      dev
    }
  }`;

  const { data } = await getApolloClient().query({ query: GET_PROFILE });
  const profile = JSON.parse(data.getProfile.dev);

  return {
    props: {
      profile,
    },
    revalidate: 1,
  };
};
