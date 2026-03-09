import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'outlined';
  leading?: ReactNode;
  children: ReactNode;
  className?: string; // Allow overriding/adding classes
}

export const Button = ({
  variant = 'primary',
  color = 'var(--primary)',
  leading,
  children,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-4 h-10 rounded-full text-md font-semibold transition-transform active:scale-95 cursor-pointer w-fit';

  const variantStyles = {
    primary:
      'text-white bg-blue-500 hover:opacity-90',
    outlined:
      'bg-transparent text-[#26214D] border border-[#26214D] hover:bg-gray-50/50 hover:bg-gray-200 opacity-60',
  };

  return (
    <a
      className={clsx(baseStyles, variantStyles[variant], className)}
      style={{ background: variant === 'primary' ? color : undefined }}
      {...props}
    >
      {leading && (
        <span className="flex items-center justify-center [&_svg]:fill-current [&_path]:fill-current">
          {leading}
        </span>
      )}
      <span>{children}</span>
    </a>
  );
};
