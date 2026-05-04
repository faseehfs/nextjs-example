"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { Post } from "@/prisma/src/generated/prisma/client";
import { validatePost } from "../../../utils";

export default async function updatePost(
  post: Post,
): Promise<{ success: boolean; message: string }> {
  const session = await auth();

  if (!session) {
    return { success: false, message: "You have to be signed in." };
  }

  if (post.authorId !== session?.user?.id) {
    return { success: false, message: "You are not the author of this post." };
  }

  const { approved, newTitle, newContent, message } = validatePost({
    title: post.title,
    content: String(post.content),
  });

  if (!approved) {
    return { success: false, message };
  }

  await prisma.post.update({
    where: {
      id: post.id,
    },
    data: {
      title: newTitle,
      content: newContent,
    },
  });

  return { success: true, message: "Post updated successfully." };
}
