import StarterKit from "@tiptap/starter-kit";
import { renderToReactElement } from "@tiptap/static-renderer/pm/react";

interface ViewerProps {
  content: string; // TipTap JSON content as a string
}

export function Viewer({ content }: ViewerProps) {
  // Parse the content string into a JSON object
  const jsonContent = JSON.parse(content);

  const reactElement = renderToReactElement({
    content: jsonContent,
    extensions: [StarterKit],
  });

  return (
    <div className="prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none">
      {reactElement}
    </div>
  );
}
