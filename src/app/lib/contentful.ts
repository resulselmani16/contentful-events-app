const CONTENTFUL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
const token = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export const graphqlFetcher = async (
  query: string,
  variables?: Record<string, unknown>
) => {
  if (!CONTENTFUL_ENDPOINT) {
    throw new Error("CONTENTFUL_GRAPHQL_ENDPOINT is not defined");
  }
  if (!token) {
    throw new Error("CONTENTFUL_ACCESS_TOKEN is not defined");
  }
  const res = await fetch(CONTENTFUL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(variables ? { query, variables } : { query }),
  });
  if (!res.ok) {
    throw new Error(`Contentful fetch error: ${res.status} ${res.statusText}`);
  }
  return res.json();
};
