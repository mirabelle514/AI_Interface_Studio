import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ProgressiveDisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  level?: 1 | 2 | 3;
}

export default function ProgressiveDisclosure({ 
  title, 
  children, 
  defaultOpen = false,
  level = 1 
}: ProgressiveDisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const getHeaderSize = () => {
    switch (level) {
      case 1:
        return 'text-base font-semibold';
      case 2:
        return 'text-sm font-medium';
      case 3:
        return 'text-sm font-normal';
      default:
        return 'text-base font-semibold';
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 w-full text-left p-2 hover:bg-navy/10 rounded-lg transition-colors"
      >
        {isOpen ? (
          <ChevronDown className="w-4 h-4 text-navy" />
        ) : (
          <ChevronRight className="w-4 h-4 text-navy" />
        )}
        <span className={`text-navy ${getHeaderSize()}`}>{title}</span>
      </button>
      
      {isOpen && (
        <div className="pl-6 animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}