import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#C4834B] text-white",
        manas: "border-transparent bg-[#7B5EA7] text-white",
        kama: "border-transparent bg-[#C4834B] text-white",
        vecu: "border-[#8B6E4E] bg-[#F5EDE3] text-[#8B6E4E]",
        reference: "border-[#5B7A6E] bg-[#E8F0EB] text-[#5B7A6E]",
        friction: "border-[#9E4A4A] bg-[#F5E6E6] text-[#9E4A4A]",
        outline: "border-[#C4834B]/40 text-[#2C2C2C]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
