import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface ConfidenceScoreProps {
  label: string;
  value: string;
  confidence: number;
  color?: 'navy' | 'sage' | 'gold' | 'burgundy';
  showTrend?: boolean;
}

export default function ConfidenceScore({ 
  label, 
  value, 
  confidence, 
  color = 'navy',
  showTrend = false 
}: ConfidenceScoreProps) {
  const getColorClasses = () => {
    switch (color) {
      case 'sage':
        return 'text-sage bg-sage/15 border-sage/40';
      case 'gold':
        return 'text-gold bg-gold/10 border-gold/30';
      case 'burgundy':
        return 'text-burgundy bg-burgundy/10 border-burgundy/30';
      default:
        return 'text-navy bg-navy/15 border-navy/40';
    }
  };

  const getConfidenceColor = () => {
    if (confidence >= 0.8) return 'text-sage';
    if (confidence >= 0.6) return 'text-gold';
    return 'text-burgundy';
  };

  const getTrendIcon = () => {
    if (confidence >= 0.8) return <TrendingUp className="w-3 h-3" />;
    if (confidence >= 0.6) return <Minus className="w-3 h-3" />;
    return <TrendingDown className="w-3 h-3" />;
  };

  return (
    <div className={`rounded-lg border p-4 ${getColorClasses()}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium opacity-75">{label}</span>
        {showTrend && (
          <div className={getConfidenceColor()}>
            {getTrendIcon()}
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <span className="text-lg font-bold">{value}</span>
        <div className="text-right">
          <div className={`text-xs font-medium ${getConfidenceColor()}`}>
            {Math.round(confidence * 100)}% confidence
          </div>
          <div className="w-12 h-1 bg-navy/20 rounded-full mt-1">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                confidence >= 0.8 ? 'bg-sage' :
                confidence >= 0.6 ? 'bg-gold' : 'bg-burgundy'
              }`}
              style={{ width: `${confidence * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}