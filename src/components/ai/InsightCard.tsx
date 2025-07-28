import React from 'react';
import { CheckCircle, AlertCircle, Info, TrendingUp } from 'lucide-react';

interface InsightCardProps {
  type: 'strength' | 'suggestion' | 'warning' | 'info';
  title: string;
  description: string;
  confidence: number;
  actionable?: boolean;
}

export default function InsightCard({ 
  type, 
  title, 
  description, 
  confidence,
  actionable = false 
}: InsightCardProps) {
  const getTypeConfig = () => {
    switch (type) {
      case 'strength':
        return {
          icon: <CheckCircle className="w-5 h-5" />,
          color: 'text-sage',
          bgColor: 'bg-sage/10',
          borderColor: 'border-sage/30'
        };
      case 'suggestion':
        return {
          icon: <TrendingUp className="w-5 h-5" />,
          color: 'text-navy',
          bgColor: 'bg-navy/10',
          borderColor: 'border-navy/30'
        };
      case 'warning':
        return {
          icon: <AlertCircle className="w-5 h-5" />,
          color: 'text-gold',
          bgColor: 'bg-gold/10',
          borderColor: 'border-gold/30'
        };
      case 'info':
        return {
          icon: <Info className="w-5 h-5" />,
          color: 'text-navy/70',
          bgColor: 'bg-dove/50',
          borderColor: 'border-dove'
        };
      default:
        return {
          icon: <Info className="w-5 h-5" />,
          color: 'text-navy/70',
          bgColor: 'bg-dove/50',
          borderColor: 'border-dove'
        };
    }
  };

  const config = getTypeConfig();

  return (
    <div className={`rounded-lg border p-4 ${config.bgColor} ${config.borderColor}`}>
      <div className="flex items-start space-x-3">
        <div className={config.color}>
          {config.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className={`font-medium ${config.color}`}>{title}</h4>
            <span className="text-xs text-navy/50">
              {Math.round(confidence * 100)}% confidence
            </span>
          </div>
          <p className="text-sm text-navy/80">{description}</p>
          {actionable && (
            <button className={`mt-2 text-xs ${config.color} hover:underline`}>
              Learn more →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}