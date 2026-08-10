import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-lift active:scale-[0.98]",
        secondary:
          "border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary-soft hover:text-accent-foreground active:scale-[0.98]",
        outline:
          "border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.98]",
        ghost: "text-primary hover:bg-primary-soft",
      },
      size: {
        sm: "min-h-10 px-4 text-sm",
        md: "min-h-12 px-6 text-sm sm:text-base",
        lg: "min-h-13 px-7 text-base",
      },
      block: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", block: false },
  },
);

type Styles = VariantProps<typeof buttonStyles>;

export function Button({
  className,
  variant,
  size,
  block,
  ...props
}: ComponentProps<"button"> & Styles) {
  return <button className={cn(buttonStyles({ variant, size, block }), className)} {...props} />;
}

export function ButtonLink({
  to,
  href,
  children,
  className,
  variant,
  size,
  block,
  ...rest
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
} & Styles &
  Omit<ComponentProps<"a">, "href" | "className">) {
  const classes = cn(buttonStyles({ variant, size, block }), className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}