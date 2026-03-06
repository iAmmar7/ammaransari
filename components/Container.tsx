interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return <Tag className={`mx-auto w-full max-w-5xl px-6 sm:px-8 ${className}`}>{children}</Tag>;
}
