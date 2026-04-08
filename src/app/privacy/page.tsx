import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Meet.AI.",
};

export default function PrivacyPage() {
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
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            Meet.AI respects your privacy. This Privacy Policy describes how we
            collect, use, and protect your information when you use our AI
            meeting assistant platform.
          </p>
          <p>
            We collect information you provide when you sign up and use the
            service, including account details and meeting-related data. We use
            this information to operate and improve Meet.AI, to provide
            support, and to communicate with you in accordance with your
            preferences.
          </p>
          <p>
            We do not sell your personal information. We may share data with
            service providers that help us run the platform, under strict
            confidentiality and data protection obligations.
          </p>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data. For more details on your rights and how to
            contact us, please reach out through the application or our website.
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
