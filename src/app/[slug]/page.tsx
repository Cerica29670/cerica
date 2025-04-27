// src/app/[slug]/page.tsx
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

/* Render this route dynamically each request */
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
   Page component — prop type now includes both `params`
   and `_searchParams` (prefixed with underscore so ESLint
   ignores the unused variable).
--------------------------------------------------------------------------- */
export default function DynamicPage({
  params,
  _searchParams, // eslint-ignore: underscore marks it as intentionally unused
}: {
  params: { slug: string };
  _searchParams?: { [key: string]: string | string[] | undefined };
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


