import { useQuery, gql } from '@apollo/client';

const GET_MENU = gql`
  query {
    menuItems {
      data {
        attributes {
          url
          title
        }
      }
    }
  } 
`;

export const useMenuUpload = () => {
	const {error, data, loading} = useQuery(GET_MENU);

	return {error, data, loading};
};