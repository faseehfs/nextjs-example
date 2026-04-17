import { Article, ArticleContainer } from "@/components/layout/article";
import { DataTable, Payment, columns } from "./_components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <ArticleContainer>
      <Article>
        <h1>Data table</h1>
        <p>
          Data table is a Shadcn component that displays data in a table format.
        </p>
        <DataTable columns={columns} data={data} />
      </Article>
    </ArticleContainer>
  );
}
