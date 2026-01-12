"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./prisma"; // Assuming the prisma client is exported from 'lib/prisma.ts'

// Note: In a real-world app, you'd want to use a validation library like Zod
// to validate the input data, but we'll keep it simple for now.

/**
 * Creates a new article in the database.
 * This is a React Server Action.
 * @param data - The data for the new article, including title and content.
 */
export async function createArticle(data: { title: string; content: string }) {
  try {
    const newArticle = await prisma.article.create({
      data: {
        title: data.title,
        content: data.content,
      },
    });

    // Revalidate paths to reflect the new article
    revalidatePath("/"); // The home page (article list)

    return newArticle;
  } catch (error) {
    console.error("Failed to create article:", error);
    // You might want to return a more user-friendly error message
    return { error: "Failed to create the article." };
  }
}

/**
 * Updates an existing article in the database.
 * This is a React Server Action.
 * @param articleId - The ID of the article to update.
 * @param data - The new data for the article.
 */
export async function updateArticle(
  articleId: string,
  data: { title: string; content: string }
) {
  try {
    const updatedArticle = await prisma.article.update({
      where: { id: articleId },
      data: {
        title: data.title,
        content: data.content,
      },
    });

    // Revalidate all paths where this article might appear
    revalidatePath("/");
    revalidatePath(`/articles/${articleId}`);
    revalidatePath(`/articles/${articleId}/edit`);

    return updatedArticle;
  } catch (error) {
    console.error("Failed to update article:", error);
    return { error: "Failed to update the article." };
  }
}

/**
 * Fetches a single article by its ID for server-side rendering.
 * @param articleId - The ID of the article to fetch.
 */
export async function getArticleById(articleId: string) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: articleId },
    });
    return article;
  } catch (error) {
    console.error("Failed to fetch article:", error);
    // This function will likely be used in Server Components, which can handle null returns.
    return null;
  }
}

/**
 * Fetches all articles to display in a list.
 */
export async function getAllArticles() {
  try {
    const articles = await prisma.article.findMany({
      orderBy: {
        updatedAt: "desc", // Show the most recently updated articles first
      },
    });
    return articles;
  } catch (error) {
    console.error("Failed to fetch articles:", error);
    return [];
  }
}
