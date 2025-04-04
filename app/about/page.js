import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl text-center sm:text-left flex flex-col gap-8 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/weowls-logo.svg"
          alt="WeOwls logo"
          width={160}
          height={36}
        />

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
          About <span className="text-orange-600 dark:text-orange-400">WeOwls</span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          WeOwls is more than just a platform — its a movement built around learning, curiosity, and collaboration. 
          We believe knowledge should be shared, not siloed.
        </p>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Whether you are an expert or just getting started, WeOwls offers a welcoming space to ask questions, exchange ideas, and grow together.
          Our mission is to connect curious minds and empower communities through shared wisdom.
        </p>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Built with ❤️ by a team that believes in the magic of peer-to-peer learning.
        </p>

        <div className="flex gap-4 mt-6">
          <Link href="/signup">
            <span className="bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] cursor-pointer">
              Join Now
            </span>
          </Link>
          <Link href="/">
            <span className="border border-black/[.08] dark:border-white/[.145] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] cursor-pointer">
              Back to Home
            </span>
          </Link>
        </div>
      </main>

      <footer className="mt-16 text-xs text-muted-foreground">
        © {new Date().getFullYear()} WeOwls · Built for learners, by learners.
      </footer>
    </div>
  );
}
