# TODO Tasks

This file tracks the development tasks for the rich text editor application.

## Phase 1: Project Setup & Configuration

- [ ] Initialize a new Next.js project with TypeScript.
- [ ] Set up ESLint and Prettier for code consistency.
- [ ] Initialize Prisma.
- [ ] Set up Shadcn/UI.
- [ ] Install all necessary dependencies (`@tiptap/react`, `@tiptap/starter-kit`, etc.).
- [ ] Configure environment variables for the database connection (`.env`).

## Phase 2: Database and Backend Logic

- [ ] Create the `schema.prisma` file based on the architecture.
- [ ] Run the initial database migration to create the `Article` table in PostgreSQL.
- [ ] Implement the server-side logic for creating a new article (`createArticle`).
- [ ] Implement the server-side logic for updating an existing article (`updateArticle`).
- [ ] Implement the server-side logic to query a single article by its ID.
- [ ] Implement the server-side logic to query all articles for a list view.

## Phase 3: Core UI Components

- [ ] Create app/page.tsx to check the behavior of following components
- [ ] Create a basic site layout component (e.g., `Header`, main content area).
- [ ] Build the `Editor.tsx` component:
    - [ ] Integrate the TipTap editor.
    - [ ] Add an input field for the article `title`.
    - [ ] Add a basic toolbar for text formatting (e.g., bold, italic, headings).
    - [ ] Add a React Server Action (`createArticle`) calling the corresponding server-side logic
    - [ ] Add a React Server Action (`updateArticle`) calling the corresponding server-side logic
    - [ ] Add a "Save" button.
- [ ] Build the `Viewer.tsx` component:
    - [ ] Implement the logic to render TipTap's JSON content as read-only content.

## Phase 4: Page Implementation and Routing

- [ ] Implement the "New Article" page (`/articles/new`):
    - [ ] Use the `Editor.tsx` component.
    - [ ] Wire the "Save" button to the `createArticle` server action.
    - [ ] On success, redirect to the new article's edit page (`/articles/[articleId]/edit`).
- [ ] Implement the "Edit Article" page (`/articles/[articleId]/edit`):
    - [ ] Fetch the specific article's data on the server.
    - [ ] Load the fetched `title` and `content` into the `Editor.tsx` component.
    - [ ] Wire the "Save" button to the `updateArticle` server action.
- [ ] Implement the "View Article" page (`/articles/[articleId]`):
    - [ ] Fetch the specific article's data on the server.
    - [ ] Display the `title` and use the `Viewer.tsx` to display the `content`.
- [ ] Create a home page (`/`) to act as an index:
    - [ ] Fetch all articles.
    - [ ] Display a list of article titles, linking to their respective view pages.

## Phase 5: Polishing (To Be Prioritized Later)

- [ ] Implement loading UI for data fetching and form submissions.
- [ ] Implement basic error handling and user feedback (e.g., "Article saved!", "Article not found").
- [ ] Refine the styling and layout of all pages.
