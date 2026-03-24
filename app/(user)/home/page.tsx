import Article from "@/components/ui/article";
import ApiMessage from "./api-message";
import { auth } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Article>
        <h1>Homepage</h1>
        <ApiMessage />
        {/* {session.user.image && (
          <Image
            src={session.user.image}
            alt="User Avatar"
            referrerPolicy="no-referrer"
          />
        )} */}
      </Article>
    </div>
  );
}
