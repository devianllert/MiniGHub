import { api } from './api';

export type Variables = { [key: string]: any };

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: any;
}

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLError[];
  extensions?: any;
  status: number;
  [key: string]: any;
}

export interface GraphQLRequestContext<V = Variables> {
  query: string | string[];
  variables?: V;
}

export const graphqlRequest = async <T = any, V = Variables>(url: string, query: string | string[], variables?: V): Promise<T> => {
  const response = await api.post<T>(url, {
    query,
    variables,
  },
  {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GRAPHQL_API_KEY}`,
    },
  });

  return response.data;
};
