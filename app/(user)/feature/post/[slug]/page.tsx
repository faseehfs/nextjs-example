import { Article, ArticleContainer } from "@/components/layout/article";
import ErrorPage from "@/components/layout/error-page";
import prisma from "@/lib/prisma";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await prisma.post.findUnique({
    where: { id: slug },
    include: { author: true },
  });

  if (!post) {
    return <ErrorPage description="That URL does not match any post" />;
  }

  return (
    <ArticleContainer>
      <Article>
        <h1>{post!.title}</h1>
        <p className="text-muted-foreground text-sm">By {post.author.name}</p>
        <p>{post.content}</p>
      </Article>
    </ArticleContainer>
  );
}
