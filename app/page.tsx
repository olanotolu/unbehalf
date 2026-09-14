import Image from "next/image";

const capabilities = [
  {
    title: "Acts on your behalf",
    body: "Tell it the outcome you want. It plans, browses, books, and builds — doing the work, not just describing it.",
  },
  {
    title: "Proactive, not reactive",
    body: "It watches what matters to U and moves first, surfacing what needs attention before you ask.",
  },
  {
    title: "U stay in control",
    body: "Every meaningful action comes with a clear approve-or-decline. Nothing irreversible happens without U.",
  },
  {
    title: "Grows with U",
    body: "It remembers your goals, preferences, and context — getting sharper and more yours every day.",
  },
];

const steps = [
  {
    n: "01",
    title: "Tell it the goal",
    body: "Say what you want in plain words. No prompts to engineer, no workflows to build.",
  },
  {
    n: "02",
    title: "It goes to work",
    body: "Your agent plans the steps and executes them across the web, on your behalf.",
  },
  {
    n: "03",
    title: "U approve",
    body: "Review results and approve the actions that matter. Done.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0A0A0B] text-[#F1F1F1]">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Unbehalf logo" width={28} height={36} />
          <span className="text-lg font-semibold tracking-tight">
            Unbehalf
          </span>
        </div>
        <a
          href="#get-started"
          className="rounded-full bg-[#F1F1F1] px-5 py-2 text-sm font-medium text-[#0A0A0B]"
        >
          Get started
        </a>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-28 pt-16 text-center sm:pt-24">
        <Image
          src="/logo.svg"
          alt="Unbehalf"
          width={72}
          height={92}
          priority
        />
        <h1 className="mt-10 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Superintelligence on behalf of U
        </h1>
        <p className="mt-6 max-w-xl text-lg text-[#999]">
          An agent that acts on your behalf.
        </p>
        <a
          href="#get-started"
          className="mt-10 rounded-full bg-[#F1F1F1] px-8 py-3 font-medium text-[#0A0A0B]"
        >
          Get started
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Capabilities
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[#232323] bg-[#121212] p-8"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-[#999]">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-28">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          How it works
        </h2>
        <div className="mt-12 flex flex-col gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex gap-6 rounded-2xl border border-[#232323] bg-[#121212] p-8"
            >
              <span className="text-sm font-semibold text-[#555]">{s.n}</span>
              <div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-[#999]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="get-started"
        className="mx-auto max-w-3xl px-6 pb-28 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Put superintelligence to work for U.
        </h2>
        <p className="mt-4 text-lg text-[#999]">Early access opening soon.</p>
      </section>

      <footer className="border-t border-[#232323] py-8 text-center text-sm text-[#555]">
        Unbehalf © 2026
      </footer>
    </main>
  );
}
