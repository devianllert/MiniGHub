import { gql } from '@/modules/core/api/gql';

export const CreateIssueMutation = gql`
  mutation CreateIssue($input: CreateIssueInput!) {
    createIssue(input: $input) {
      issue {
        number
        body
      }
    }
  }
`;
