import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SectionHeading } from "@/components/content/SectionHeading";
import { Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact the Studio",
  description:
    "Get in touch with CodeBrise for questions, feedback, open-source discussions, or collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="site-shell max-w-4xl">
          <SectionHeading
            eyebrow="Say Hello"
            title={
              <>
                Let&apos;s start a
                <br />
                thoughtful <span className="serif text-[#32C7D0] italic">conversation.</span>
              </>
            }
            intro="Have thoughts on one of our explorations, an open-source tool, or just want to connect? We’re always open to interesting ideas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="p-7 rounded-[var(--cb-radius-md)] border border-cb-border bg-white/50 flex flex-col justify-between min-h-[190px]">
              <div>
                <div className="flex items-center gap-2 text-cb-violet mb-3">
                  <Mail className="size-4" />
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
                    Direct Studio Email
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-cb-ink">hello@codebrise.com</h3>
                <p className="text-xs text-cb-text-muted mt-2 leading-relaxed">
                  For product feedback, partnership ideas, or general studio inquiries.
                </p>
              </div>
              <a
                href="mailto:hello@codebrise.com"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cb-ink hover:text-cb-violet transition-colors mt-4"
              >
                Send an email <ArrowUpRight className="size-3.5" />
              </a>
            </div>

            <div className="p-7 rounded-[var(--cb-radius-md)] border border-cb-border bg-white/50 flex flex-col justify-between min-h-[190px]">
              <div>
                <div className="flex items-center gap-2 text-[#536DFE] mb-3">
                  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold">
                    Community & Code
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-cb-ink">github.com/codebrise</h3>
                <p className="text-xs text-cb-text-muted mt-2 leading-relaxed">
                  Submit bug reports, feature discussions, and PRs across public studio repositories.
                </p>
              </div>
              <a
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-cb-ink hover:text-[#536DFE] transition-colors mt-4"
              >
                Open GitHub Discussions <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
