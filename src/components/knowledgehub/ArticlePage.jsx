// src/components/knowledgehub/ArticlePage.jsx

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const ArticlePage = ({ filePath }) => {
  const [content, setContent] = useState("");

  useEffect(() => {

  fetch(process.env.PUBLIC_URL + filePath)
    .then((response) => {

      if (!response.ok) {
        throw new Error(
          `Cannot load ${filePath}`
        );
      }

      return response.text();
    })
    .then((text) => {
      setContent(text);
    })
    .catch((error) => {
      console.error(error);

      setContent(
        `# Error\nUnable to load ${filePath}`
      );
    });

}, [filePath]);

  return (
    <div className="article-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default ArticlePage;