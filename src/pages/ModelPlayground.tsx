import React, { useState } from 'react';
import { Settings, Zap, BarChart3, AlertCircle } from 'lucide-react';
import ConfidenceScore from '../components/ai/ConfidenceScore';
import AIProcessingIndicator from '../components/ai/AIProcessingIndicator';

export default function ModelPlayground() {
  const [modelConfig, setModelConfig] = useState({
    temperature: 0.7,
    maxTokens: 256,
    topP: 0.9,
    frequencyPenalty: 0.0
  });
  
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [results, setResults] = useState<any>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate model inference
    setTimeout(() => {
      setResults({
        output: "This is a simulated AI response based on your prompt. In a real implementation, this would be connected to actual AI models with live inference.",
        metrics: {
          tokens: 42,
          latency: 1250,
          confidence: 0.87,
          cost: 0.0023
        },
        alternatives: [
          { text: "Alternative response 1...", confidence: 0.72 },
          { text: "Alternative response 2...", confidence: 0.68 }
        ]
      });
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">
          Model Playground
        </h1>
        <p className="text-xl text-navy/70 max-w-2xl mx-auto">
          Interactive environment for testing AI models with real-time parameter tuning, 
          performance metrics, and response analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-5 h-5 text-navy" />
              <h2 className="text-lg font-semibold text-navy">Input & Generation</h2>
            </div>
            
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="w-full h-32 p-4 border border-dove rounded-lg resize-none focus:ring-2 focus:ring-sage focus:border-transparent transition-colors mb-4 bg-ivory"
              disabled={isGenerating}
            />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-navy/70">
                {prompt.length} characters
              </span>
              <button
                onClick={handleGenerate}
                disabled={!prompt.trim() || isGenerating}
                className="flex items-center space-x-2 px-4 py-2 bg-navy text-ivory rounded-lg hover:bg-sage hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Zap className="w-4 h-4" />
                <span>{isGenerating ? 'Generating...' : 'Generate'}</span>
              </button>
            </div>
          </div>

          {isGenerating && (
            <AIProcessingIndicator 
              stage="generating"
              progress={45}
              message="Running inference on language model..."
            />
          )}

          {results && (
            <div className="space-y-6">
              <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
                <h3 className="text-lg font-semibold text-navy mb-4">Generated Output</h3>
                <div className="bg-navy/5 rounded-lg p-4 mb-4">
                  <p className="text-navy/90">{results.output}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ConfidenceScore
                    label="Confidence"
                    value={`${Math.round(results.metrics.confidence * 100)}%`}
                    confidence={results.metrics.confidence}
                    color="sage"
                  />
                  <div className="bg-navy/10 border border-navy/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-navy mb-1">Tokens</div>
                    <div className="text-lg font-bold text-navy">{results.metrics.tokens}</div>
                  </div>
                  <div className="bg-sage/10 border border-sage/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-sage mb-1">Latency</div>
                    <div className="text-lg font-bold text-sage">{results.metrics.latency}ms</div>
                  </div>
                  <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                    <div className="text-sm font-medium text-gold mb-1">Cost</div>
                    <div className="text-lg font-bold text-gold">${results.metrics.cost}</div>
                  </div>
                </div>
              </div>

              <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
                <h3 className="text-lg font-semibold text-navy mb-4">Alternative Outputs</h3>
                <div className="space-y-3">
                  {results.alternatives.map((alt: any, index: number) => (
                    <div key={index} className="border border-dove rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-navy">Alternative {index + 1}</span>
                        <span className="text-xs text-navy/70">{Math.round(alt.confidence * 100)}% confidence</span>
                      </div>
                      <p className="text-navy/80 text-sm">{alt.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-5 h-5 text-navy" />
              <h2 className="text-lg font-semibold text-navy">Model Parameters</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Temperature</span>
                  <span className="text-sm text-navy/70">{modelConfig.temperature}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={modelConfig.temperature}
                  onChange={(e) => setModelConfig(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-navy/70 mt-1">Controls randomness in output</div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Max Tokens</span>
                  <span className="text-sm text-navy/70">{modelConfig.maxTokens}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="2048"
                  step="50"
                  value={modelConfig.maxTokens}
                  onChange={(e) => setModelConfig(prev => ({ ...prev, maxTokens: parseInt(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-navy/70 mt-1">Maximum response length</div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Top P</span>
                  <span className="text-sm text-navy/70">{modelConfig.topP}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={modelConfig.topP}
                  onChange={(e) => setModelConfig(prev => ({ ...prev, topP: parseFloat(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-navy/70 mt-1">Nucleus sampling threshold</div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-navy">Frequency Penalty</span>
                  <span className="text-sm text-navy/70">{modelConfig.frequencyPenalty}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="0.1"
                  value={modelConfig.frequencyPenalty}
                  onChange={(e) => setModelConfig(prev => ({ ...prev, frequencyPenalty: parseFloat(e.target.value) }))}
                  className="w-full"
                />
                <div className="text-xs text-navy/70 mt-1">Reduces repetition</div>
              </div>
            </div>
          </div>

          <div className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
            <div className="flex items-center space-x-2 mb-4">
              <BarChart3 className="w-5 h-5 text-navy" />
              <h2 className="text-lg font-semibold text-navy">Performance Metrics</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-navy">Avg. Latency</span>
                <span className="text-sm font-medium text-navy">1,234ms</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-navy">Success Rate</span>
                <span className="text-sm font-medium text-sage">99.2%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-navy">Avg. Confidence</span>
                <span className="text-sm font-medium text-navy">0.82</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-navy">Total Requests</span>
                <span className="text-sm font-medium text-navy">1,547</span>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-gold mt-0.5" />
              <div>
                <h3 className="font-medium text-gold text-sm">Playground Mode</h3>
                <p className="text-gold/80 text-xs mt-1">
                  This is a simulation for demonstration. In production, this would connect to real AI models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}