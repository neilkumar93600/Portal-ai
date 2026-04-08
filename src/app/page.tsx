import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const baseUrl =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Meet.AI — AI Agents That Join Your Meetings | Free Trial",
  description:
    "Add AI agents to your meetings in real time. Meet.AI lets you create agents that join calls, follow instructions, and collaborate. Start your free trial today.",
  openGraph: {
    title: "Meet.AI — AI Agents That Join Your Meetings | Free Trial",
    description:
      "Add AI agents to your meetings in real time. Meet.AI lets you create agents that join calls, follow instructions, and collaborate. Start your free trial today.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an AI meeting assistant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An AI meeting assistant is software that can join or monitor your meetings and perform tasks like taking notes, answering questions, or following custom instructions in real time. Meet.AI lets you create such agents and add them to your video calls.",
      },
    },
    {
      "@type": "Question",
      name: "How do Meet.AI agents work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You create a meeting in Meet.AI, add one or more AI agents with custom instructions, and invite participants. When the meeting starts, the agents join the call and interact with participants in real time—answering questions, following your workflow, and collaborating like a team member.",
      },
    },
    {
      "@type": "Question",
      name: "Can the AI join my video call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Meet.AI agents join your video call as participants. They appear in the meeting and can interact with everyone in real time, following the instructions you define when you create the agent.",
      },
    },
    {
      "@type": "Question",
      name: "Is Meet.AI secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Meet.AI is built with security and privacy in mind. We use industry-standard practices to protect your meetings and data. You control what each agent can do and what instructions they follow.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up for a free Meet.AI account, create your first meeting, add an AI agent with your instructions, and invite participants. No credit card required for the free trial.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Meet.AI — AI Agents That Join Your Meetings",
  description:
    "Add AI agents to your meetings. Meet.AI lets you create agents that join calls, follow instructions, and collaborate in real time. Free trial.",
  url: baseUrl,
  publisher: {
    "@type": "Organization",
    name: "Meet.AI",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
  },
};

const faqItems = [
  {
    q: "What is an AI meeting assistant?",
    a: "An AI meeting assistant is software that can join or monitor your meetings and perform tasks like taking notes, answering questions, or following custom instructions in real time. Meet.AI lets you create such agents and add them to your video calls.",
  },
  {
    q: "How do Meet.AI agents work?",
    a: "You create a meeting in Meet.AI, add one or more AI agents with custom instructions, and invite participants. When the meeting starts, the agents join the call and interact with participants in real time—answering questions, following your workflow, and collaborating like a team member.",
  },
  {
    q: "Can the AI join my video call?",
    a: "Yes. Meet.AI agents join your video call as participants. They appear in the meeting and can interact with everyone in real time, following the instructions you define when you create the agent.",
  },
  {
    q: "Is Meet.AI secure?",
    a: "Meet.AI is built with security and privacy in mind. We use industry-standard practices to protect your meetings and data. You control what each agent can do and what instructions they follow.",
  },
  {
    q: "How do I start?",
    a: "Sign up for a free Meet.AI account, create your first meeting, add an AI agent with your instructions, and invite participants. No credit card required for the free trial.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-xl font-semibold">Meet.AI</span>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Start free trial</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-12 md:py-20">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Meet.AI — AI Agents That Join Your Meetings
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Add AI meeting assistants to your calls. Create agents that follow
            your instructions and collaborate with participants in real time.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/sign-up">Start free trial</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-in">Sign in</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Create meetings and invite participants
              </h3>
              <p className="text-muted-foreground">
                Schedule a meeting in Meet.AI and invite your team or guests.
                Each meeting has its own link and settings so you stay in
                control.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Add AI agents that follow your instructions
              </h3>
              <p className="text-muted-foreground">
                Create one or more AI agents and give them custom instructions.
                They will join the call and act on those instructions—answering
                questions, taking notes, or supporting your workflow.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Agents collaborate and interact during the call
              </h3>
              <p className="text-muted-foreground">
                When the meeting starts, your AI agents join as participants.
                They interact with everyone in real time, making your meetings
                more productive without extra manual work.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Why Meet.AI</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Real-time AI in the meeting (not just notes)
              </h3>
              <p className="text-muted-foreground">
                Unlike tools that only summarize after the call, Meet.AI agents
                are in the meeting with you. They respond, participate, and
                follow your instructions live.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Customizable agents for your workflow
              </h3>
              <p className="text-muted-foreground">
                Define what each agent does. Use them for standups, interviews,
                training, or customer calls—each agent can have different
                instructions and behavior.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Free trial — no credit card
              </h3>
              <p className="text-muted-foreground">
                Start with a free trial to create meetings and add AI agents.
                Upgrade when you need more agents or meetings.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Use cases</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Standups and team syncs
              </h3>
              <p className="text-muted-foreground">
                Add an AI agent to capture action items, track commitments, and
                keep the standup on track without someone having to take notes.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Interviews and panels
              </h3>
              <p className="text-muted-foreground">
                Use an agent to summarize answers, highlight key points, or
                suggest follow-up questions so you can focus on the
                conversation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Training and onboarding
              </h3>
              <p className="text-muted-foreground">
                Let an AI agent answer common questions, reinforce key
                concepts, or document the session so new hires can review later.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">Pricing</h2>
          <p className="mb-4 text-muted-foreground">
            Start with a free trial that includes a set number of agents and
            meetings. When you need more, upgrade to a paid plan for additional
            capacity and features.
          </p>
          <Button asChild>
            <Link href="/upgrade">View plans and upgrade</Link>
          </Button>
        </section>

        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-semibold">FAQ</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="border-t pt-8 text-center">
          <p className="mb-4 text-muted-foreground">
            Ready to add AI agents to your meetings?
          </p>
          <Button asChild>
            <Link href="/sign-up">Start free trial</Link>
          </Button>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-center text-sm text-muted-foreground">
          <Link href="/terms" className="underline underline-offset-4 hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="/privacy" className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/sign-in" className="underline underline-offset-4 hover:text-foreground">
            Sign in
          </Link>
        </div>
      </footer>
    </div>
  );
}
