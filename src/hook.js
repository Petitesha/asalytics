import { request, gql } from 'graphql-request';
import { useQuery, useQueryClient } from '@tanstack/react-query';
const endpoint = 'https://analytics-api.herokuapp.com/analytics';

const useAlgos = () => {
  return useQuery(['algos'], async () => {
    const {
      asalist: { result },
    } = await request(
      endpoint,
      gql`
        query MyQuery {
          asalist {
            result {
              logo
              available
              assetId
              name
            }
          }
        }
      `
    );
    return result;
  });
};

export default useAlgos;
