import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Meet.AI.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-semibold hover:underline">
            Meet.AI
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="text-sm font-medium underline-offset-4 hover:underline"
            >
              Sign up
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
        <p className="mb-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Welcome to Meet.AI. By using our service, you agree to these Terms
            of Service. Please read them carefully.
          </p>
          <p>
            Meet.AI provides an AI meeting assistant platform that allows you to
            create meetings and add AI agents to participate in your calls. Use
            of the service is subject to your compliance with these terms and
            our Privacy Policy.
          </p>
          <p>
            We reserve the right to update these terms from time to time. We will
            notify users of material changes. Continued use of the service after
            changes constitutes acceptance of the updated terms.
          </p>
          <p>
            For questions, please contact us through the channels provided in
            the application or on our website.
          </p>
        </div>
        <p className="mt-8">
          <Link href="/" className="text-muted-foreground underline underline-offset-4 hover:text-foreground">
            Back to Meet.AI
          </Link>
        </p>
      </main>
    </div>
  );
}
