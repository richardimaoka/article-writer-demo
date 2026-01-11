# Architecture

A web-based rich text editor application for demonstration, not for production.

## High-Level Overview

Users can create, edit, and save documents with rich text formatting.

## Core Technologies

*   **Frontend Framework:** **Next.js**
*   **Rich Text Editor:** **TipTap**
*   **Database:** **PostgreSQL**, **Prisma**

This app is only for demonstration, so it doesn't need user authentication.

## URL Structure

- /articles/new              : create a brand new article
- /articles/[articleId]      : view a specific article in the read-only mode
- /articles/[articleId]/edit : edit a specific article

## React Components

- Editor.tsx: used in /articles/new and /articles/[articleId]/edit
- Viewer.tsx: used in /articles/[articleId]

More components follow during development.

## Data Flow

A key aspect of this architecture is how document content is handled:

1.  **Data Format**: TipTap can export rich text contents into JSON.
2.  **Storage**: PostgreSQL's `JSONB` column can sotre JSON values in a single column.
3.  **Data Flow**:
    *   **Saving**: The user edits content in the TipTap editor -> On save, the frontend gets the content as JSON from TipTap -> The frontend sends this JSON to backend via React Server Actions, and Prisma on the backend saves it to postgres.
    *   **Loading to editor**: The user requests a document -> A React Server Component queries the document via Prisma Client -> The editor component loads the document JSON into the TipTap editor instance.
    *   **Loading to viewer**: The user requests a document -> A React Server Component queries the document via Prisma Client -> The viewer component renders React components using renderToReactElement() https://tiptap.dev/docs/editor/api/utilities/static-renderer#generating-react-components-from-json

## Data Model

We will use Prisma to define our schema. The initial schema will be simple, focusing on storing the articles.

**`prisma/schema.prisma`**

```prisma
generator client {
  provider        = "prisma-client" // ESM native
  output          = "../generated/prisma"
  engineType      = "client" // enable Prisma ORM without Rust
}

datasource db {
  provider = "postgresql"
}

model Article {
  id        String   @id @default(cuid())
  title     String   // A title for the article, for lists and metadata
  content   Json     // To store the TipTap JSON output
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## Styling

The application's user interface will be styled using **Shadcn/UI**. This component library will provide a consistent and accessible set of UI components built on top of Tailwind CSS and Radix UI.

## State Management

For managing application state, the approach will be minimal:
*   **React's default hooks** (`useState`, `useContext`, `useReducer`) will be used for general component-level and shared state.
*   **TipTap's internal state management** will be exclusively used for handling the rich text editor's content and interactions.
