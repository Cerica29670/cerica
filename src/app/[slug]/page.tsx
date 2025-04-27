/* eslint-disable @typescript-eslint/no-unused-vars */
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

/* Always render this route dynamically */
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
   Page component — `searchParams` is included in the *type* (TS constraint),
   but not destructured, so it’s never considered a runtime variable.
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








