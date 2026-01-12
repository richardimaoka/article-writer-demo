import SiteLayout from "@/components/layout";
import { Viewer } from "@/components/viewer";
import { getArticleById } from "@/lib/actions";
import { notFound } from "next/navigation";

type ViewArticlePageProps = {
  params: Promise<{ articleId: string }>;
};

export default async function ViewArticlePage({
  params,
}: ViewArticlePageProps) {
  const { articleId } = await params;
  const article = await getArticleById(articleId);

  if (!article) {
    notFound();
  }

  return (
    <SiteLayout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        {article.content ? (
          <Viewer content={article.content.toString()} />
        ) : (
          <p>No content available.</p>
        )}
      </div>
    </SiteLayout>
  );
}
