import React from 'react';
import { cn } from '../../utils/cn';

interface OutlineCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const OutlineCard: React.FC<OutlineCardProps> = ({
  children,
  className,
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      className={cn(
        'border border-gray-300 rounded-xl bg-off-white p-4',
        hoverable && 'hover:border-royal-plum hover:shadow-sm transition-all duration-200 cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};