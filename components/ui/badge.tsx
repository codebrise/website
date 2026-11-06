import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold transition-colors select-none",
  {
    variants: {
      variant: {
        default:
          "border-cb-border bg-cb-paper-raised text-cb-ink",
        secondary:
          "border-transparent bg-cb-paper-muted text-cb-text-muted",
        outline:
          "border-current text-inherit opacity-75",
        status:
          "border-current text-inherit opacity-80 font-mono text-[9px] tracking-widest uppercase py-1 px-2.5",
        mint:
          "border-[#42D6B0]/30 bg-[#42D6B0]/15 text-[#1b7a61]",
        violet:
          "border-cb-violet/30 bg-cb-violet/10 text-cb-violet",
        dark:
          "border-white/20 bg-white/10 text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
