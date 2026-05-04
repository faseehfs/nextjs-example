import ErrorPage from "@/components/layout/error-page";
import prisma from "@/lib/prisma";
import EditPostForm from "./_components/edit-post-form";

export default async function CreatePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: slug,
    },
  });

  if (!post) {
    return <ErrorPage description="That URL did not match any post." />;
  }

  return (
    <div className="flex flex-col w-full max-w-xl mx-auto p-4 flex-1 justify-center items-center">
      <EditPostForm {...post} />
    </div>
  );
}
