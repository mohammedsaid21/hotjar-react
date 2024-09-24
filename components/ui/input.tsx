import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <div className="relative flex-grow">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            "transition-all duration-200 ease-in-out",
            "shadow-sm",
            "focus:shadow-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
            error && !isFocused && "border-red-500 pr-10",
            className
          )}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {error && !isFocused && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="red" fillOpacity="0.7">
                <circle cx="8" cy="8" r="8" fill="red" fillOpacity="0.2"/>
                <path d="M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-8a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1z"/>
              </g>
            </svg>
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }