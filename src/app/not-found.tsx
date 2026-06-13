import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="rounded-full bg-gradient-primary px-6 py-2 text-sm font-bold text-white">
        404
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold text-foreground">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-soft px-6 py-3 text-sm font-semibold text-indigo-700"
      >
        <Home className="h-4 w-4" />
        Back home
      </Link>
    </div>
  );
}
