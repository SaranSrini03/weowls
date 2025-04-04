import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-20 py-12 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            className="dark:invert"
            src="/weowls-logo.svg" // Replace with your logo path
            alt="WeOwls logo"
            width={160}
            height={36}
          />
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Welcome back to <span className="text-orange-600 dark:text-orange-600">WeOwls</span>
          </h1>
          <p className="text-sm text-muted-foreground text-center">
            Log in to continue learning and growing with the community.
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address [or] owlcode
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                className="w-full mt-1 px-4 py-2 rounded border border-gray-300 dark:border-white/20 bg-white dark:bg-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full mt-1 px-4 py-2 rounded border border-gray-300 dark:border-white/20 bg-white dark:bg-black/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-foreground text-background py-2.5 rounded-full font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
          >
            Log In
          </button>

          <p className="text-sm text-center text-muted-foreground">
            New here?{" "}
            <a href="/signup" className="text-orange-600 dark:text-orange-600 hover:underline">
              Create an account
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
