import { notFound } from "next/navigation";

/* --------------------------------------------------------------------------
   Dummy content – replace later with CMS / MDX
--------------------------------------------------------------------------- */
const pages = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: "This is our privacy policy…",
  },
  terms: {
    title: "Terms of Service",
    body: "These are our terms of service…",
  },
} as const;

/* Always render this route dynamically */
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
   Page component
   - `searchParams` is required to satisfy the Next-15 PageProps constraint
   - One eslint-disable comment silences “unused variable”
--------------------------------------------------------------------------- */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export default function DynamicPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}









