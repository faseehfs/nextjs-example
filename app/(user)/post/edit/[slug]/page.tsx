import ErrorPage from "@/components/layout/error-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";

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
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>
            <p>{post.content}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Coming soon.</p>
        </CardContent>
      </Card>
    </div>
  );
}
