import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <span className="font-telemetry text-xs uppercase tracking-widest text-[var(--accent)] font-bold mb-2">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-body">
        Page Not Found
      </h1>
      <p className="text-sm font-telemetry text-[var(--text-secondary)] max-w-md mb-8">
        The requested resource does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-xs font-telemetry font-bold shadow-md hover:brightness-110 transition-all"
      >
        Return to Portfolio
      </Link>
    </div>
  );
}

