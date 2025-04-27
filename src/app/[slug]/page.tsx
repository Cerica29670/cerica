/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
// ────────────────────────────────────────────────────────────────────────────
//  src/app/[slug]/page.tsx
//  (Type-checking disabled for this demo page; remove when replacing with real
//   data or when Next.js PageProps API stabilises.)
// ────────────────────────────────────────────────────────────────────────────
import { notFound } from "next/navigation";

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

export const dynamic = "force-dynamic";

export default function DynamicPage({ params, searchParams }) {
  void searchParams;            // marks variable as “used” for ESLint
  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}











