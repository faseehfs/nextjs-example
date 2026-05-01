"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    setSaving(true);
    e.preventDefault();
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
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Title" defaultValue={post.title} />
          <textarea
            name="content"
            placeholder="Content"
            className="w-full h-40 mt-4 p-2 border rounded"
            defaultValue={String(post.content)}
          />
          {errorMessage && <p className="text-destructive">{errorMessage}</p>}
          <Button type="submit" disabled={saving}>
            {saving ? (
              <>
                <Spinner /> Saving...
              </>
            ) : (
              "Save"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
