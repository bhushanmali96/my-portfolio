import React, { useEffect, useState } from "react";

import "./knowledgeHub.css";

import ArticlePage from "./ArticlePage";
import { getKnowledgeTree } from "../../data/articles";

const KnowledgeHub = () => {

const [knowledgeTree, setKnowledgeTree] =
useState({});

const [selectedArticle, setSelectedArticle] =
useState(null);

const [expandedCategories, setExpandedCategories] =
useState({});

useEffect(() => {

getKnowledgeTree()
  .then((data) => {

    setKnowledgeTree(data);

    const firstCategory =
      Object.keys(data)[0];

    if (
      firstCategory &&
      data[firstCategory].length > 0
    ) {

      setSelectedArticle(
        data[firstCategory][0]
      );
    }

    const initialExpanded = {};

    Object.keys(data).forEach(
      (category) => {

        initialExpanded[category] =
          true;

      }
    );

    setExpandedCategories(
      initialExpanded
    );
  })
  .catch((error) => {

    console.error(
      "Error loading knowledge tree:",
      error
    );

  });

}, []);

const toggleCategory = (category) => {

setExpandedCategories((prev) => ({
  ...prev,
  [category]:
    !prev[category]
}));

};

return (

<section id="knowledge-hub">

  <h2 className="knowledge-title">
    📚 Knowledge Hub
  </h2>

  <div className="knowledge-layout">

    {/* SIDEBAR */}

    <aside className="knowledge-sidebar">

      {

        Object.entries(
          knowledgeTree
        ).map(

          ([category, articles]) => (

            <div
              key={category}
              className="category-group"
            >

              <div
                className="category-title"
                onClick={() =>
                  toggleCategory(
                    category
                  )
                }
              >

                <span>

                  {
                    expandedCategories[
                      category
                    ]
                      ? "▼"
                      : "▶"
                  }

                </span>

                <span>
                  📂
                </span>

                <span>
                  {category}
                </span>

              </div>

              {

                expandedCategories[
                  category
                ] && (

                  <div className="article-list">

                    {

                      articles.map(
                        (article) => (

                          <div
                            key={
                              article.file
                            }

                            className={`article-item ${
                              selectedArticle?.file ===
                              article.file
                                ? "active"
                                : ""
                            }`}

                            onClick={() =>
                              setSelectedArticle(
                                article
                              )
                            }
                          >

                            📄 {article.title}

                          </div>

                        )
                      )

                    }

                  </div>

                )

              }

            </div>

          )

        )

      }

    </aside>

    {/* CONTENT */}

    <main className="knowledge-content">

      {

        selectedArticle ? (

          <ArticlePage
            filePath={
              selectedArticle.file
            }
          />

        ) : (

          <div>

            Select an article
            from the sidebar.

          </div>

        )

      }

    </main>

  </div>

</section>

);
};

export default KnowledgeHub;