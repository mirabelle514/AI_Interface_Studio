import React from 'react';
import { Loader2, Brain, Zap } from 'lucide-react';

interface AIProcessingIndicatorProps {
  stage: 'loading' | 'processing' | 'analyzing' | 'generating';
  progress?: number;
  message?: string;
}

export default function AIProcessingIndicator({ 
  stage, 
  progress = 0, 
  message 
}: AIProcessingIndicatorProps) {
  const getStageIcon = () => {
    switch (stage) {
      case 'loading':
        return <Loader2 className="w-5 h-5 animate-spin" />;
      case 'processing':
        return <Brain className="w-5 h-5 animate-pulse" />;
      case 'analyzing':
        return <Zap className="w-5 h-5 animate-bounce" />;
      case 'generating':
        return <Brain className="w-5 h-5 animate-pulse" />;
      default:
        return <Loader2 className="w-5 h-5 animate-spin" />;
    }
  };

  const getStageColor = () => {
    switch (stage) {
      case 'loading':
        return 'text-navy';
      case 'processing':
        return 'text-burgundy';
      case 'analyzing':
        return 'text-sage';
      case 'generating':
        return 'text-gold';
      default:
        return 'text-navy';
    }
  };

  const getProgressColor = () => {
    switch (stage) {
      case 'loading':
        return 'bg-navy';
      case 'processing':
        return 'bg-burgundy';
      case 'analyzing':
        return 'bg-sage';
      case 'generating':
        return 'bg-gold';
      default:
        return 'bg-navy';
    }
  };

  return (
    <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={getStageColor()}>
            {getStageIcon()}
          </div>
          <div>
            <h3 className="font-medium text-navy capitalize">{stage}</h3>
            {message && (
              <p className="text-sm text-navy/70">{message}</p>
            )}
          </div>
        </div>
        {progress > 0 && (
          <span className="text-sm font-medium text-navy/70">
            {progress}%
          </span>
        )}
      </div>
      
      <div className="w-full h-2 bg-dove rounded-full overflow-hidden">
        <div
          className={`h-full ${getProgressColor()} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}