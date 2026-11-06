import * as React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function PageContainer({
  children,
  className,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component className={cn("site-shell w-full", className)}>
      {children}
    </Component>
  );
}
