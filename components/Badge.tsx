interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-bg-raised px-3 py-1 text-xs font-medium text-fg-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </span>
  );
}
