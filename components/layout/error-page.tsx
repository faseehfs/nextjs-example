import { ReactNode } from "react";

export default function ErrorPage({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-center min-h-[75vh] justify-center items-center">
      <h1 className="text-2xl font-bold font-heading">{title || "Oops!"}</h1>
      <p className="text-muted-foreground">
        {description || "An error occurred"}
      </p>
    </div>
  );
}
