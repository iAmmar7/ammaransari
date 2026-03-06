import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent-hover font-semibold shadow-sm shadow-accent/20',
  secondary:
    'border border-border text-fg hover:border-border-hover hover:bg-bg-raised',
  ghost:
    'text-fg-muted hover:text-fg hover:bg-bg-raised',
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-50 disabled:pointer-events-none';

type ButtonProps = {
  variant?: Variant;
  className?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: never } & ButtonHTMLAttributes<HTMLButtonElement>)
);

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ('href' in props && props.href) {
    const { href, ...rest } = props as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return <a href={href} className={styles} {...rest} />;
  }

  return <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
