interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  hover?: boolean;
}

export function Card({ children, className = '', as: Tag = 'div', hover = true }: CardProps) {
  return (
    <Tag
      className={`rounded-xl border border-border bg-bg-raised p-5 sm:p-6 ${
        hover
          ? 'transition-all duration-300 hover:border-border-hover hover:shadow-lg hover:shadow-accent/5'
          : ''
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
