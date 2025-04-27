import { notFound } from "next/navigation";

/* -------------------------------------------------------------------------- */
/*  Dummy content – swap out for real CMS / MDX later                         */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*  Page component                                                            */
/*  - `searchParams` **must** be present (Next.js type-constraint)            */
/*  - We immediately reference it with `void searchParams;` so ESLint         */
/*    considers it “used” and no rule is violated.                            */
/* -------------------------------------------------------------------------- */
export default function DynamicPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  /* mark variable as used → silences @typescript-eslint/no-unused-vars */
  void searchParams;

  const page = pages[params.slug as keyof typeof pages];
  if (!page) notFound();

  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{page.title}</h1>
      <p>{page.body}</p>
    </main>
  );
}










