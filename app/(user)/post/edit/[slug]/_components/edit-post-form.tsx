"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Post } from "@/prisma/src/generated/prisma/client";
import updatePost from "./actions";
import { redirect } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export default function EditPostForm(post: Post) {
  const [errorMessage, setErrorMessage] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setErrorMessage("");
    const formdata = new FormData(e.target as HTMLFormElement);
    const title = formdata.get("title") as string;
    const content = formdata.get("content") as string;
    const result = await updatePost({
      ...post,
      title,
      content,
    });
    if (result.success) {
      redirect(`/post/${post.id}`);
    } else {
      setErrorMessage(result.message);
      setSaving(false);
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Edit Post</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter post title"
              defaultValue={post.title}
              disabled={saving}
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your post content here..."
              className="h-48 sm:h-32 w-full resize-none min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 resize-vertical"
              defaultValue={String(post.content)}
              disabled={saving}
              required
            />
          </div>

          {errorMessage && (
            <p className="text-destructive">Error: {errorMessage}</p>
          )}

          <Button type="submit" disabled={saving}>
            {saving ? (
              <div className="flex items-center gap-2">
                <Spinner className="size-4" />
                Saving...
              </div>
            ) : (
              "Save Changes"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
