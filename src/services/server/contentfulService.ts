import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getAllEntries = async () => {
  return await client.getEntries({
    content_type: "beMinimal",
  });
};

export const getEntriesByCategory = async (category: string) => {
  return await client.getEntries({
    content_type: "beMinimal",
    "fields.category": category,
  });
};
