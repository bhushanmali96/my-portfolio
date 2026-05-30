// src/data/articles.js

export async function getKnowledgeTree() {

  const response = await fetch(
    process.env.PUBLIC_URL +
      "/content/content-index.json"
  );

  return response.json();
}