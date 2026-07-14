import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-kumkum px-4 text-sandalwood">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-turmeric/80">404</p>
        <h1 className="mt-4 text-4xl font-heading font-semibold">Page not found</h1>
        <p className="mt-4 text-base leading-8 text-sandalwood/80">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-turmeric px-6 py-3 text-sm font-semibold text-kumkum transition hover:bg-gold"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
