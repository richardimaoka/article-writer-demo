"use client";

import { Button } from "@/components/ui/button"; // Assuming Shadcn/UI button
import { Input } from "@/components/ui/input"; // Assuming Shadcn/UI input
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

const Toolbar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="border-b border-gray-200 p-2 flex items-center space-x-2">
      <Button
        variant={editor.isActive("bold") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        Bold
      </Button>
      <Button
        variant={editor.isActive("italic") ? "secondary" : "ghost"}
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        Italic
      </Button>
      <Button
        variant={
          editor.isActive("heading", { level: 2 }) ? "secondary" : "ghost"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        H2
      </Button>
      <Button
        variant={
          editor.isActive("heading", { level: 3 }) ? "secondary" : "ghost"
        }
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        H3
      </Button>
    </div>
  );
};
// TODO: Define the props for the editor, e.g., initial content and onSave function
interface EditorProps {
  initialContent?: string;
  // onSave: (data: { title: string; content: any }) => void;
}

export default function MyEditor({}: EditorProps) {
  const [title, setTitle] = React.useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit],
    content: "<p>Start writing your article...</p>",
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  });

  const handleSave = () => {
    if (editor) {
      const content = editor.getJSON();
      // TODO: Call the onSave prop with the title and content
      console.log("title:", title);
      console.log(JSON.stringify(content, null, 2));
      alert("Article saved! (Check console for output)");
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <Input
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-2xl font-bold"
      />
      <div className="border rounded-md">
        {editor ? <Toolbar editor={editor} /> : <></>}
        <EditorContent editor={editor} />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSave}>Save Article</Button>
      </div>
    </div>
  );
}
