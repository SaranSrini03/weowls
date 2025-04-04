import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] items-center justify-items-center px-6 py-12 sm:px-10 sm:py-20 font-[family-name:var(--font-geist-sans)] gap-12 sm:gap-16">
      <main className="row-start-2 flex flex-col items-center sm:items-start text-center sm:text-left gap-8 sm:gap-10 max-w-lg w-full">
        <Image
          className="dark:invert"
          src="/weowls-logo.svg"
          alt="WeOwls logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
          Join <span className="text-orange-600 dark:text-orange-600">WeOwls</span> today.
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Discover the power of community learning. Share knowledge, ask questions,
          and grow together with WeOwls.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-12 px-6"
            href="/signup"
          >
            Let&apos;s go
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-12 px-6 w-full sm:w-auto"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="row-start-3 text-xs text-muted-foreground text-center">
        © {new Date().getFullYear()} WeOwls · All rights reserved.
      </footer>
    </div>
  );
}
