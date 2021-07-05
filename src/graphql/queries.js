/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCanvas = /* GraphQL */ `
  query GetCanvas($id: ID!) {
    getCanvas(id: $id) {
      id
      clientId
      data
      createdAt
      updatedAt
    }
  }
`;
export const listCanvas = /* GraphQL */ `
  query ListCanvas(
    $filter: ModelCanvasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCanvas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
