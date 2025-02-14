'use client';

import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  hoverColor: string;
  extraContent?: React.ReactNode;
}

export function SocialLink({ href, icon: Icon, label, hoverColor, extraContent }: SocialLinkProps) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-2 text-gray-400 ${hoverColor} transition-colors relative`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
      {extraContent}
    </a>
  );
}