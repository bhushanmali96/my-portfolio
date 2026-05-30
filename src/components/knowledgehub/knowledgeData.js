// src/components/knowledgehub/knowledgeData.js

export const knowledgeData = [
  {
    id: "streams",
    title: "Java Streams Visual Guide",
    subtitle: "Filter, map, flatMap, collect, groupingBy",
    category: "Java",
    readTime: "8 min read",
    icon: "🌊",
    content: [
      {
        heading: "What is a Stream?",
        body: "A Stream is a pipeline for processing data from a collection or array in a declarative way.",
      },
      {
        heading: "Memory Trick",
        body: "Source → Intermediate Operations → Terminal Operation → Result",
      },
      {
        heading: "Practical Use",
        body: "Use Streams for filtering active employees, mapping entities to DTOs, grouping orders, and collecting summaries.",
      },
    ],
  },
  {
    id: "oops",
    title: "OOPS Visual Guide",
    subtitle: "Abstraction, Encapsulation, Inheritance, Polymorphism",
    category: "Java",
    readTime: "6 min read",
    icon: "🏛️",
    content: [
      {
        heading: "What is OOPS?",
        body: "A programming style based on objects and classes.",
      },
      {
        heading: "Memory Trick",
        body: "Hide how, hide data, reuse code, many forms.",
      },
    ],
  },
  {
    id: "sql",
    title: "SQL Interview Notes",
    subtitle: "Joins, group by, window functions",
    category: "SQL",
    readTime: "5 min read",
    icon: "🗃️",
    content: [
      {
        heading: "Why SQL matters",
        body: "Most backend systems depend on strong SQL for reporting, filtering, and aggregation.",
      },
    ],
  },
];