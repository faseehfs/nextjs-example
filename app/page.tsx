import Button from "@/components/ui/Button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4">
      <h1 className="text-4xl my-4">Welcome</h1>
      <Link href="/sign-in/">
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
