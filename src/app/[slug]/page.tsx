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
   Page component — only `params` is destructured; `searchParams`
   exists *in the type* (to satisfy Next.js) but isn’t bound, so
   ESLint sees no unused variable.
--------------------------------------------------------------------------- */
export default function DynamicPage({
  params,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
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



