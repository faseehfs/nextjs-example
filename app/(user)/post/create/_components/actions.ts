"use server";

import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { hasPermissionToCreatePost } from "../utils";
import { validatePost } from "../../utils";

export async function createPost(data: {
  title: string;
  content: string;
}): Promise<{ success: boolean; message: string }> {
  if (!hasPermissionToCreatePost()) {
    return {
      success: false,
      message:
        "You do not have the permission to create a post today. Please try again later",
    };
  }

  const session = await auth();
  if (!session?.user?.id) {
    return { success: false, message: "Unauthorized" };
  }

  const { approved, newTitle, newContent, message } = validatePost(data);

  const title = data.title.trim();
  const content = data.content.trim();

  if (!approved) {
    return { success: false, message };
  }

  await prisma.post.create({
    data: {
      title: newTitle,
      content: newContent,
      authorId: session.user.id,
    },
  });

  revalidatePath("/post");

  return { success: true, message: "Post created successfully." };
}
