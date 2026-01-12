# TODO Tasks

This file tracks the development tasks for the rich text editor application.

## Phase 1: Project Setup & Configuration

- [x] Initialize a new Next.js project with TypeScript.
  - `pnpm create next-app`
- [x] Set up ESLint and Prettier for code consistency.
  - `pnpm create next-app` also completed this.
- [x] Initialize Prisma. 
  - [x] Install NPM dependencies
  - [x] Set up the first Prisma schema for the generator and the datasource
  - [x] .env file to store the DB password and the connection URL
  - [x] Set up the postgres Docker container and its start-up script
  - [x] Update the Schema to have the first model
  - [x] `pnpm prisma migrate dev`
  - [x] `pnpm prisma generate`
  - [x] Seed the very first article to the DB

## Phase 2: Database and Backend Logic

- [x] Implement the server-side logic for creating a new article (`createArticle`).
- [x] Implement the server-side logic for updating an existing article (`updateArticle`).
- [x] Implement the server-side logic to query a single article by its ID.
- [x] Implement the server-side logic to query all articles for a list view.

## Phase 3: Core UI Components

- [x] Set up Shadcn/UI.
- [x] Install all necessary dependencies (`@tiptap/react`, `@tiptap/starter-kit`, etc.).
- [x] Create app/page.tsx to check the behavior of components in development
- [x] Create a basic site layout component (e.g., `Header`, main content area).
- [ ] Build the `Editor.tsx` component:
    - [x] Integrate the TipTap editor.
    - [x] Add an input field for the article `title`.
    - [x] Add a basic toolbar for text formatting (e.g., bold, italic, headings).
    - [x] Add a React Server Action (`createArticle`) calling the corresponding server-side logic.
    - [ ] Add a React Server Action (`updateArticle`) calling the corresponding server-side logic.
    - [x] Add a "Save" button.
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
