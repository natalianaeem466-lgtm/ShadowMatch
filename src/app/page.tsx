import Link from "next/link";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Bug,
  Clock,
  FileText,
  FlaskConical,
  GraduationCap,
  LayoutDashboard,
  Palette,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const taskTypes = [
  {
    icon: FlaskConical,
    title: "Testing",
    description: "Exercise real features, file structured reports, catch what automated suites miss.",
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description: "Tackle scoped, well-described issues in a live codebase — no firefights, just fixes.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Turn tribal knowledge into docs engineers actually read, guided by the team that owns it.",
  },
  {
    icon: Palette,
    title: "UI",
    description: "Ship small, visible interface improvements with design support from the team.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your profile",
    description: "Sign up, tell us your university, skills, and what you want to learn. Takes about two minutes.",
  },
  {
    step: "02",
    title: "Apply to micro-tasks",
    description: "Browse 1–3 day tasks posted by real companies. Apply to the ones that match your goals.",
  },
  {
    step: "03",
    title: "Ship it, get verified",
    description: "Complete the task in a sandboxed environment. A mentor reviews your work and issues a badge.",
  },
  {
    step: "04",
    title: "Build your passport",
    description: "Every verified task becomes a permanent, shareable credential backed by real work.",
  },
];

const studentBenefits = [
  "Real production experience — not tutorial projects",
  "Paid stipends held in escrow until work is accepted",
  "Mentor feedback on every submission",
  "A Verified Digital Passport employers can trust",
];

const companyBenefits = [
  "Vetted CS students matched to your stack",
  "Sandboxed environments keep your code safe",
  "Escrowed payments — pay only for accepted work",
  "A pipeline for your next batch of interns and hires",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" aria-hidden />
            </span>
            ShadowMatch
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#how-it-works" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a href="#task-types" className="transition-colors hover:text-foreground">
              Task types
            </a>
            <a href="#for-students" className="transition-colors hover:text-foreground">
              For students
            </a>
            <a href="#for-companies" className="transition-colors hover:text-foreground">
              For companies
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button size="sm">Get started</Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <Button asChild size="sm">
                <Link href="/dashboard">
                  <LayoutDashboard className="size-4" aria-hidden />
                  Dashboard
                </Link>
              </Button>
              <UserButton />
            </Show>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center sm:px-6 md:py-28">
            <span className="inline-flex items-center gap-2 rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              <BadgeCheck className="size-3.5 text-emerald-600" aria-hidden />
              Micro-internships with verified proof of work
            </span>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Real experience for CS students.{" "}
              <span className="text-muted-foreground">Verified, paid, and done in days.</span>
            </h1>

            <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
              ShadowMatch pairs vetted computer science students with companies on 1–3 day
              micro-tasks — testing, bug fixes, docs, and UI. Every completed task becomes a
              verified credential on your digital passport.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Show when="signed-out">
                <SignUpButton mode="modal">
                  <Button size="lg">
                    Browse open tasks
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Go to dashboard
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
              </Show>
              <Button asChild size="lg" variant="outline">
                <a href="#how-it-works">See how it works</a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-muted-foreground">
              <Clock className="size-3.5" aria-hidden />
              Tasks take 1–3 days
              <span aria-hidden>·</span>
              <Wallet className="size-3.5" aria-hidden />
              Stipends paid on acceptance
              <span aria-hidden>·</span>
              <ShieldCheck className="size-3.5" aria-hidden />
              Mentor-verified badges
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-b bg-muted/40">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <div className="mb-10 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                From sign-up to verified credential in four steps
              </h2>
              <p className="mt-3 text-muted-foreground">
                No applications that vanish into a portal. No unpaid &ldquo;for the
                experience&rdquo; work. Just short, scoped tasks with a real payoff.
              </p>
            </div>

            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(({ step, title, description }) => (
                <li key={step} className="rounded-xl border bg-card p-6">
                  <span className="font-mono text-sm text-muted-foreground">{step}</span>
                  <h3 className="mt-3 font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Task types */}
        <section id="task-types" className="border-b">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <div className="mb-10 max-w-xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Four task types, one goal: work that counts
              </h2>
              <p className="mt-3 text-muted-foreground">
                Every micro-task is scoped to fit between classes and reviewed by a mentor
                before it counts toward your passport.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {taskTypes.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-xl border bg-card p-6">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For students / For companies */}
        <section className="border-b bg-muted/40">
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div id="for-students" className="rounded-2xl border bg-card p-8">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">For students</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Build a portfolio of verified, paid work before you graduate.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {studentBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div id="for-companies" className="rounded-2xl border bg-card p-8">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Building2 className="size-5" aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-semibold tracking-tight">For companies</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Get real tasks done and evaluate future hires on real output.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {companyBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Passport highlight */}
        <section className="border-b">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 md:py-24">
            <Briefcase className="size-10 text-muted-foreground" aria-hidden />
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              One passport. Every verified task you&rsquo;ve ever shipped.
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              The Verified Digital Passport compiles your completed micro-tasks, mentor ratings,
              and badges into a shareable profile — proof that goes beyond a GitHub graph.
            </p>
            <Show when="signed-out">
              <SignInButton mode="modal">
                <Button size="lg">
                  Start your passport
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  View your passport
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
            </Show>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-2 font-medium text-foreground">
            <ShieldCheck className="size-4" aria-hidden />
            ShadowMatch
          </div>
          <p>Micro-internships and job shadowing for CS students.</p>
          <p>© {new Date().getFullYear()} ShadowMatch</p>
        </div>
      </footer>
    </div>
  );
}
