import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-[#E8D5BF] bg-[#FDFBF7] px-3 py-2 text-sm text-[#2C2C2C] placeholder:text-[#9B9489] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4834B]/40 focus-visible:border-[#C4834B]/60 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
