import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Eyebrow } from "@/components/content/Eyebrow";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-20 md:py-32 flex items-center">
        <div className="site-shell max-w-2xl text-center flex flex-col items-center">
          <Eyebrow>404 / Missing Page</Eyebrow>
          <h1 className="text-[clamp(3rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.07em] text-cb-ink mt-4">
            Nothing on this
            <br />
            <span className="serif text-[#8057F5] italic">shelf.</span>
          </h1>
          <p className="mt-5 text-sm md:text-base text-cb-text-muted leading-relaxed max-w-md">
            The page you are looking for has either drifted away or hasn’t been built yet.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cb-ink text-white text-xs font-bold shadow-sm hover:bg-cb-ink-raised transition-all"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              Return to Studio Home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

