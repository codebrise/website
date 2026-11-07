"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectStatus } from "./ProjectStatus";
import { JobwhistleVisual } from "./JobwhistleVisual";
import { SliprowVisual } from "./SliprowVisual";
import { FormspindleVisual } from "./FormspindleVisual";

interface ProjectCardProps {
  project: Project;
  layout?: "featured" | "standard";
  className?: string;
}

export function ProjectCard({
  project,
  layout = "standard",
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isJob = project.slug === "jobwhistle";
  const isSlip = project.slug === "sliprow";
  const isForm = project.slug === "formspindle";

  const renderVisual = () => {
    if (project.assets.visualComponent === "jobwhistle") return <JobwhistleVisual />;
    if (project.assets.visualComponent === "sliprow") return <SliprowVisual />;
    if (project.assets.visualComponent === "formspindle") return <FormspindleVisual />;
    return <div className="flex-1 min-h-[160px] my-4" />;
  };

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
      exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
      whileHover={shouldReduceMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 0.8, 0.24, 1] }}
      className={cn(
        "group relative flex flex-col min-h-[435px] p-6 rounded-[var(--cb-radius-lg)] border border-cb-ink/10 transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(26,31,43,0.12)]",
        isJob && "bg-[#151D2B] text-white",
        isSlip && "bg-[#E6E5EE] text-[#171B27]",
        isForm && "bg-[#DCEEE8] text-[#152A2A]",
        !isJob && !isSlip && !isForm && "bg-cb-paper-raised text-cb-ink",
        layout === "featured" && isJob && "lg:col-span-6 col-span-12",
        layout === "featured" && (isSlip || isForm) && "lg:col-span-3 md:col-span-6 col-span-12",
        className
      )}
    >
      <div className="relative z-10 flex items-center justify-between gap-3 text-inherit">
        <span className="font-mono text-[9px] tracking-[0.12em] uppercase opacity-65">
          {project.badgeNumber || `${project.kind}`}
        </span>
        <ProjectStatus status={project.status} />
      </div>

      <h3 className="relative z-10 text-[27px] font-semibold tracking-[-0.055em] mt-5 mb-1 leading-tight">
        <Link
          href={`/work/${project.slug}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cb-violet rounded-sm"
        >
          {project.name}
        </Link>
      </h3>

      <p className="relative z-10 text-[11px] leading-[1.7] opacity-70 max-w-[340px]">
        {project.summary}
      </p>

      {renderVisual()}

      <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full border border-current text-[8px] font-semibold opacity-70"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/work/${project.slug}`}
          aria-label={`View ${project.name} details`}
          className="flex items-center justify-center w-8 h-8 rounded-full border border-current opacity-65 transition-all group-hover:scale-110 group-hover:opacity-100"
        >
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
