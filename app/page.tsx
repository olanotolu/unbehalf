import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0A0A0B] px-6 py-16 text-[#F1F1F1]">
      <div />
      <div className="flex max-w-3xl flex-col items-center text-center">
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
      </div>
      <footer className="text-sm text-[#555]">Unbehalf</footer>
    </main>
  );
}
