// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";

/* --------------------------------------------------------------------------
   Dummy content – replace with real CMS / MDX later
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

/* --------------------------------------------------------------------------
   Tell Next.js to render this route dynamically each request
--------------------------------------------------------------------------- */
export const dynamic = "force-dynamic";

/* --------------------------------------------------------------------------
   Page component
   - The prop type now includes *both* `params` and optional `searchParams`
     to satisfy Next.js’s PageProps constraint (fixes the TS build error).
--------------------------------------------------------------------------- */
type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function DynamicPage({ params }: PageProps) {
  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}

