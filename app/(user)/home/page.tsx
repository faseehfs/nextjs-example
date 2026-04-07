import Article from "@/components/ui/article";
import { auth } from "@/auth";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fsImage from "@/assets/fs.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-4">
      <div className="text-center">
        <Image
          src={fsImage}
          alt="App Image"
          className="w-25 rounded-full border-2 border-foreground mx-auto my-4"
        />
        <h1 className="text-3xl">Next.js Example</h1>
        <p className="text-muted-foreground mt-2 mb-3">
          An all-in-one Next.js application
        </p>
        <a href="https://github.com/faseehfs/nextjs-example">
          <Button>View on GitHub</Button>
        </a>
      </div>
    </div>
  );
}
