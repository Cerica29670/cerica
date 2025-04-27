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
   Page component — inline prop type includes both `params` and optional
   `searchParams`, which satisfies Next.js PageProps constraint.
--------------------------------------------------------------------------- */
export default function DynamicPage({
  params,
  searchParams,          //  ←  add this (even if we don’t use it)
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

