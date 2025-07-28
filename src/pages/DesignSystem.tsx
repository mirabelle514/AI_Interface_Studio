import React, { useState } from 'react';
import { Palette, Code, Eye, Copy } from 'lucide-react';
import ConfidenceScore from '../components/ai/ConfidenceScore';
import AIProcessingIndicator from '../components/ai/AIProcessingIndicator';
import InsightCard from '../components/ai/InsightCard';
import ProgressiveDisclosure from '../components/ai/ProgressiveDisclosure';

export default function DesignSystem() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string, componentName: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(componentName);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const components = [
    {
      name: 'AI Processing Indicator',
      description: 'Shows real-time AI processing states with progress and contextual messaging',
      component: (
        <AIProcessingIndicator 
          stage="analyzing"
          progress={65}
          message="Processing with advanced NLP models..."
        />
      ),
      code: `<AIProcessingIndicator 
  stage="analyzing"
  progress={65}
  message="Processing with advanced NLP models..."
/>`
    },
    {
      name: 'Confidence Score',
      description: 'Displays AI model confidence with visual indicators and color coding',
      component: (
        <div className="grid grid-cols-2 gap-4">
          <ConfidenceScore
            label="Sentiment"
            value="Positive"
            confidence={0.89}
            color="sage"
            showTrend={true}
          />
          <ConfidenceScore
            label="Classification"
            value="Technical"
            confidence={0.54}
            color="gold"
            showTrend={true}
          />
        </div>
      ),
      code: `<ConfidenceScore
  label="Sentiment"
  value="Positive"
  confidence={0.89}
  color="sage"
  showTrend={true}
/>`
    },
    {
      name: 'Insight Cards',
      description: 'Contextual AI insights with confidence levels and actionable recommendations',
      component: (
        <div className="space-y-3">
          <InsightCard
            type="strength"
            title="Strong Technical Content"
            description="Content demonstrates deep technical understanding with clear explanations."
            confidence={0.91}
            actionable={true}
          />
          <InsightCard
            type="suggestion"
            title="Engagement Opportunity"
            description="Consider adding more interactive elements to improve user engagement."
            confidence={0.73}
            actionable={true}
          />
        </div>
      ),
      code: `<InsightCard
  type="strength"
  title="Strong Technical Content"
  description="Content demonstrates deep technical understanding."
  confidence={0.91}
  actionable={true}
/>`
    },
    {
      name: 'Progressive Disclosure',
      description: 'Hierarchical information reveal for complex AI outputs and detailed analysis',
      component: (
        <ProgressiveDisclosure title="Analysis Details" defaultOpen={true}>
          <div className="space-y-2">
            <ProgressiveDisclosure title="Sentiment Analysis" level={2}>
              <p className="text-sm text-slate-600">Detailed sentiment breakdown with sub-emotions and confidence intervals.</p>
            </ProgressiveDisclosure>
            <ProgressiveDisclosure title="Topic Modeling" level={2}>
              <p className="text-sm text-slate-600">Hierarchical topic extraction with relevance scoring and semantic relationships.</p>
            </ProgressiveDisclosure>
          </div>
        </ProgressiveDisclosure>
      ),
      code: `<ProgressiveDisclosure title="Analysis Details" defaultOpen={true}>
  <ProgressiveDisclosure title="Sentiment Analysis" level={2}>
    <p>Detailed sentiment breakdown...</p>
  </ProgressiveDisclosure>
</ProgressiveDisclosure>`
    }
  ];

  const designTokens = {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8'
      },
      semantic: {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
      }
    },
    spacing: {
      xs: '0.5rem',
      sm: '0.75rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem'
    },
    typography: {
      sizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem'
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">
          AI Interface Design System
        </h1>
        <p className="text-xl text-navy/70 max-w-3xl mx-auto">
          Specialized components and patterns for AI/ML interfaces, featuring confidence indicators, 
          progressive disclosure, and intelligent error handling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Eye className="w-6 h-6 text-sage" />
              <h2 className="text-2xl font-bold text-navy">Components</h2>
            </div>
            
            <div className="space-y-8">
              {components.map((comp, index) => (
                <div key={index} className="bg-ivory rounded-xl shadow-sm border border-dove overflow-hidden">
                  <div className="p-6 border-b border-dove">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-navy">{comp.name}</h3>
                      <button
                        onClick={() => copyCode(comp.code, comp.name)}
                        className="flex items-center space-x-1 px-2 py-1 text-sm text-navy hover:text-sage hover:bg-navy/10 rounded transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                        <span>{copiedCode === comp.name ? 'Copied!' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-navy/70">{comp.description}</p>
                  </div>
                  
                  <div className="p-6 bg-navy/5">
                    {comp.component}
                  </div>
                  
                  <div className="p-4 bg-navy text-ivory">
                    <pre className="text-sm overflow-x-auto">
                      <code>{comp.code}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Palette className="w-6 h-6 text-sage" />
              <h2 className="text-xl font-bold text-navy">Design Tokens</h2>
            </div>
            
            <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-navy mb-3">Primary Colors</h3>
                <div className="space-y-2">
                  {[
                    ['ivory', '#FAF8F3'],
                    ['navy', '#22304A'],
                    ['gold', '#C6A664'],
                    ['burgundy', '#7C3048'],
                    ['sage', '#A6B89A'],
                    ['dove', '#E5E2DD']
                  ].map(([key, value]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded border border-navy/20"
                        style={{ backgroundColor: value }}
                      />
                      <span className="text-sm text-navy">{key}</span>
                      <code className="text-xs text-navy/70">{value}</code>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-3">Usage Guidelines</h3>
                <div className="space-y-2">
                  <p className="text-sm text-navy">• <strong>Navy:</strong> Primary color for text, buttons, and main UI elements</p>
                  <p className="text-sm text-navy">• <strong>Sage:</strong> Accent color for highlights, success states, and interactive elements</p>
                  <p className="text-sm text-navy">• <strong>Ivory:</strong> Primary background and card surfaces</p>
                  <p className="text-sm text-navy">• <strong>Gold:</strong> Progress indicators and highlights</p>
                  <p className="text-sm text-navy">• <strong>Burgundy:</strong> Errors and warnings (borders only)</p>
                  <p className="text-sm text-navy">• <strong>Dove:</strong> Subtle borders and dividers</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-3">Spacing Scale</h3>
                <div className="space-y-2">
                  {Object.entries(designTokens.spacing).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between">
                      <span className="text-sm text-navy">{key}</span>
                      <code className="text-xs text-navy/70">{value}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="w-6 h-6 text-sage" />
              <h2 className="text-xl font-bold text-navy">Guidelines</h2>
            </div>
            
            <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-navy mb-2">Confidence Thresholds</h3>
                <ul className="text-sm text-navy space-y-1">
                  <li>• High: ≥80% (Sage indicators)</li>
                  <li>• Medium: 60-79% (Gold indicators)</li>
                  <li>• Low: &lt;60% (Burgundy indicators)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-2">Loading States</h3>
                <ul className="text-sm text-navy space-y-1">
                  <li>• Always show progress when available</li>
                  <li>• Provide contextual messaging</li>
                  <li>• Use appropriate stage indicators</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-navy mb-2">Error Handling</h3>
                <ul className="text-sm text-navy space-y-1">
                  <li>• Clear error messages</li>
                  <li>• Actionable recovery options</li>
                  <li>• Graceful degradation</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}