import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/images/csias-lighthouse.png')" }}
      className="flex flex-col bg-cover bg-center justify-center items-center text-primary-foreground p-5 py-18 md:h-80"
    >
      <h1 className="text-4xl md:text-5xl text-center font-heading mb-4">
        Next.js Example
      </h1>
      <Link href="/home">
        <Button size="lg">Open App</Button>
      </Link>
    </div>
  );
}
