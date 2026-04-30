export default function ErrorPage({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-2">
      <h1 className="text-2xl font-bold font-heading">{title || "Oops!"}</h1>
      <p className="text-muted-foreground">
        {description || "An error occurred"}
      </p>
    </div>
  );
}
