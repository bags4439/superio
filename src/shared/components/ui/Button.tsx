import styles from './Button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'navOutline'
  | 'navSolid'
  | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  target,
  rel,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={cls} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
