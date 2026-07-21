import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

export const cardVariantsConfig = {
  variants: {
    variant: {
      door: [
        "after:border-door",
        "after:shadow-[inset_0_0_.71cqw_1.43cqw_hsl(var(--door))]",
      ],
      treasure: [
        "after:border-treasure",
        "after:shadow-[inset_0_0_.71cqw_1.43cqw_hsl(var(--treasure))]",
      ],
    },
    size: {
      sm: "w-[70px]",
      md: "w-[140px]",
      lg: "w-[280px]",
    },
  },

  defaultVariants: {
    size: "md",
  },
} as const;

const cardConfig = {
  ...cardVariantsConfig,
};

export const cardVariants = cva(
  [
    "@container",
    "[container-type:inline-size]",
    "relative",
    "aspect-[140/218]",
    "overflow-visible",

    "after:absolute",
    "after:inset-0",
    "after:rounded-[7.14cqw]",
    "after:border-[10cqw]",
    "after:pointer-events-none",
  ],
  cardConfig,
);

const contentVariants = cva(
  [
    "absolute",
    "inset-[5cqw]",
    "border-[1.43cqw]",
    "rounded-[7.14cqw]",
    "overflow-visible",
    "z-1",
    "px-2",
    "pt-1",
  ],
  {
    variants: {
      variant: {
        door: [
          "border-door-border",
          "bg-door-border",
          "shadow-[0_0_1.43cqw_.71cqw_hsl(var(--color-door-border))]",
        ],
        treasure: [
          "border-treasure-border",
          "bg-treasure-border",
          "shadow-[0_0_1.43cqw_.71cqw_hsl(var(--color-treasure-border))]",
        ],
      },
    },
  },
);

export type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    contentClassName?: string;
  };

export default function Card({
  variant,
  size,
  className,
  contentClassName,
  children,
  ...props
}: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, size }), className)} {...props}>
      <div
        className={cn(
          "p-0",
          contentVariants({ variant }),
          props.onClick && "cursor-pointer",
          "bg-gradient-to-b from-surface to-white",
          contentClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
