'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-lg border border-border p-6 ${
        hover ? 'transition-all duration-300 hover:shadow-lg hover:border-accent' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
