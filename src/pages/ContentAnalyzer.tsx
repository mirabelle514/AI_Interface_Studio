import React, { useState } from 'react';
import { Send, FileText, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import AIProcessingIndicator from '../components/ai/AIProcessingIndicator';
import ConfidenceScore from '../components/ai/ConfidenceScore';
import InsightCard from '../components/ai/InsightCard';
import ProgressiveDisclosure from '../components/ai/ProgressiveDisclosure';
import ErrorBoundary from '../components/ai/ErrorBoundary';

export default function ContentAnalyzer() {
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!content.trim()) return;
    
    setIsAnalyzing(true);
    setError(null);
    
    // Simulate AI processing
    setTimeout(() => {
      // Simulate occasional errors for demo
      if (Math.random() < 0.1) {
        setError('Model temporarily unavailable. Please try again.');
        setIsAnalyzing(false);
        return;
      }
      
      setAnalysis({
        sentiment: {
          score: 0.75,
          label: 'Positive',
          confidence: 0.89
        },
        topics: [
          { name: 'Technology', relevance: 0.92 },
          { name: 'Innovation', relevance: 0.78 },
          { name: 'Business', relevance: 0.65 }
        ],
        readability: {
          score: 8.2,
          level: 'Professional',
          confidence: 0.94
        },
        insights: [
          {
            type: 'strength',
            title: 'Clear Communication',
            description: 'Content demonstrates clear, professional language with good structure.',
            confidence: 0.91
          },
          {
            type: 'suggestion',
            title: 'Engagement Opportunity',
            description: 'Consider adding more specific examples to increase reader engagement.',
            confidence: 0.73
          }
        ]
      });
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <ErrorBoundary>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">
            AI Content Analyzer
          </h1>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto">
            Advanced AI-powered content analysis with real-time insights, 
            confidence scoring, and progressive disclosure patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-navy" />
                <h2 className="text-lg font-semibold text-navy">Input Content</h2>
              </div>
              
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your content here for AI analysis..."
                className="w-full h-48 p-4 border border-dove rounded-lg resize-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors bg-ivory"
                disabled={isAnalyzing}
              />
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-navy/70">
                  {content.length} characters
                </span>
                <button
                  onClick={handleAnalyze}
                  disabled={!content.trim() || isAnalyzing}
                  className="flex items-center space-x-2 px-4 py-2 bg-navy text-ivory rounded-lg hover:bg-sage hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{isAnalyzing ? 'Analyzing...' : 'Analyze'}</span>
                </button>
              </div>
            </div>

            {isAnalyzing && (
              <AIProcessingIndicator 
                stage="analyzing"
                progress={75}
                message="Processing content with advanced NLP models..."
              />
            )}
          </div>

          <div className="space-y-6">
            {error && (
              <div className="bg-burgundy/10 border border-burgundy/30 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-burgundy" />
                  <span className="font-medium text-burgundy">Analysis Error</span>
                </div>
                <p className="text-burgundy/80 mt-1">{error}</p>
                <button
                  onClick={handleAnalyze}
                  className="mt-3 px-3 py-1 bg-navy text-ivory text-sm rounded hover:bg-sage hover:text-navy transition-colors"
                >
                  Retry Analysis
                </button>
              </div>
            )}

            {analysis && (
              <div className="space-y-4">
                <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-navy" />
                    <h2 className="text-lg font-semibold text-navy">Analysis Results</h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <ConfidenceScore
                      label="Sentiment"
                      value={analysis.sentiment.label}
                      confidence={analysis.sentiment.confidence}
                      color="sage"
                    />
                    <ConfidenceScore
                      label="Readability"
                      value={`${analysis.readability.score}/10`}
                      confidence={analysis.readability.confidence}
                      color="navy"
                    />
                  </div>

                  <ProgressiveDisclosure title="Detailed Insights" defaultOpen={false}>
                    <div className="space-y-3">
                      {analysis.insights.map((insight: any, index: number) => (
                        <InsightCard
                          key={index}
                          type={insight.type}
                          title={insight.title}
                          description={insight.description}
                          confidence={insight.confidence}
                        />
                      ))}
                    </div>
                  </ProgressiveDisclosure>

                  <ProgressiveDisclosure title="Topic Analysis" defaultOpen={true}>
                    <div className="space-y-2">
                      {analysis.topics.map((topic: any, index: number) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-navy/80">{topic.name}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-24 h-2 bg-dove rounded-full">
                              <div
                                className="h-2 bg-navy rounded-full"
                                style={{ width: `${topic.relevance * 100}%` }}
                              />
                            </div>
                            <span className="text-sm text-navy/70 w-8">
                              {Math.round(topic.relevance * 100)}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ProgressiveDisclosure>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}