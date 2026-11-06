import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent whitespace-nowrap font-medium transition-all duration-200 outline-none select-none focus-visible:border-cb-violet focus-visible:ring-2 focus-visible:ring-cb-violet/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-cb-ink text-white hover:bg-cb-ink-raised shadow-sm hover:-translate-y-0.5",
        heroLight:
          "bg-[#f7f6f2] text-cb-ink shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.22)] hover:bg-white hover:-translate-y-0.5",
        outline:
          "border-cb-border bg-transparent text-cb-ink hover:bg-cb-paper-raised hover:border-cb-ink/40",
        secondary:
          "bg-cb-paper-muted text-cb-ink hover:bg-cb-paper-raised",
        ghost:
          "text-cb-ink hover:bg-cb-paper-muted hover:text-cb-ink",
        destructive:
          "bg-red-50 text-red-600 hover:bg-red-100",
        link:
          "text-cb-violet underline-offset-4 hover:underline p-0 h-auto",
        gradient:
          "bg-[linear-gradient(112deg,#8057f5_0%,#536dfe_56%,#32c7d0_100%)] text-white hover:opacity-90 shadow-sm hover:-translate-y-0.5",
      },
      size: {
        default: "min-h-[44px] gap-2 px-5 text-xs font-bold rounded-full",
        xs: "min-h-[26px] gap-1 px-2 text-[10px] font-semibold rounded-full",
        sm: "min-h-[36px] gap-1.5 px-3.5 text-xs font-medium rounded-full",
        lg: "min-h-[48px] gap-2.5 px-6 text-xs font-bold rounded-full",
        icon: "size-10 rounded-full",
        "icon-xs": "size-6 rounded-full [&_svg]:size-3",
        "icon-sm": "size-8 rounded-full [&_svg]:size-3.5",
        "icon-lg": "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
