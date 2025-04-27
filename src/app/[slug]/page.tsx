// src/app/[slug]/page.tsx
import { notFound } from "next/navigation";

// Dummy content – expand later
const pages = {
  "privacy-policy": {
    title: "Privacy Policy",
    body: "This is our privacy policy…",
  },
  terms: {
    title: "Terms of Service",
    body: "These are our terms of service…",
  },
};

/** Tell Next.js this route is always rendered dynamically. */
export const dynamic = "force-dynamic";

export default function DynamicPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = pages[params.slug];
  if (!page) notFound();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}
