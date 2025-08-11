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
    
    // Simulate model inference with more realistic outputs
    setTimeout(() => {
      // Generate different outputs based on prompt content and parameters
      let output = "";
      let alternatives = [];
      
      // Create more realistic outputs based on prompt content
      if (prompt.toLowerCase().includes('email') || prompt.toLowerCase().includes('client')) {
        output = `Dear Valued Client,

I hope this message finds you well. I wanted to personally address the recent adjustment to your insurance premium, which reflects our ongoing commitment to providing you with comprehensive coverage while maintaining competitive pricing.

The 15% increase in your premium is primarily due to several factors:
• Updated risk assessment models that better reflect current market conditions
• Enhanced coverage options that provide additional protection
• Regional factors affecting claims patterns in your area

To help manage costs, I'd recommend:
1. Reviewing your current coverage levels to ensure they align with your needs
2. Exploring available discounts for safety features or loyalty programs
3. Considering higher deductibles if appropriate for your financial situation

I'm here to discuss any questions or explore options that might better suit your budget. Please don't hesitate to reach out.

Best regards,
Your Insurance Team`;
        
        alternatives = [
          { text: `Dear Client,

I'm writing to inform you of the premium adjustment for your insurance policy. The 15% increase reflects current market conditions and enhanced coverage benefits.

Key factors driving this change:
• Market rate adjustments based on industry data
• Enhanced coverage options for better protection
• Regional risk factor updates

Cost management options:
1. Increase deductible: Potential 10-15% savings
2. Safety feature discounts: Up to 8% reduction
3. Multi-policy bundling: Additional 5-10% savings

I'm available to discuss these options and find the best solution for your needs.

Best regards,
Your Insurance Team`, confidence: 0.72 },
          { text: `Dear Valued Customer,

I understand that premium changes can be concerning, and I want to personally assure you that we're here to help during this transition.

The 15% adjustment reflects our commitment to providing you with comprehensive protection while adapting to current market realities. We've identified several ways to help manage this change:

Support options available:
1. Personalized coverage review to optimize your policy
2. Flexible payment plans to ease the transition
3. Dedicated customer service support for any questions

Your satisfaction and financial security remain our top priorities. Please reach out anytime - I'm here to help.

Warm regards,
Your Customer Success Team`, confidence: 0.68 }
        ];
      } else if (prompt.toLowerCase().includes('insurance') || prompt.toLowerCase().includes('risk')) {
        output = `Based on our comprehensive risk assessment analysis, we've identified several key factors that influence your current insurance profile:

Risk Profile Analysis:
• Primary Risk Factors: Location-based exposure, claims history, coverage type
• Mitigation Opportunities: Safety improvements, policy adjustments, bundling options
• Market Considerations: Industry trends, regulatory changes, competitive landscape

Our AI-powered assessment indicates a moderate risk profile with opportunities for optimization. The system has identified 3 specific areas where we can potentially reduce your premium while maintaining or improving coverage.

Recommendations:
1. Implement suggested safety measures (estimated 8-12% savings)
2. Review coverage limits for optimal cost-benefit balance
3. Explore loyalty and multi-policy discount opportunities

This analysis represents our commitment to data-driven, personalized insurance solutions.`;
        
        alternatives = [
          { text: `Technical Risk Assessment Report

Statistical Analysis Summary:
• Risk Probability: 0.23 (23% likelihood of claims)
• Confidence Interval: ±5% (95% confidence level)
• Standard Deviation: 0.08

Detailed Breakdown:
1. Location Risk: 0.31 (High exposure area)
2. Claims History: 0.18 (Favorable record)
3. Coverage Type: 0.12 (Standard protection)

Mitigation Probability:
• Safety Improvements: 0.85 success rate
• Policy Adjustments: 0.72 success rate
• Bundling Options: 0.68 success rate

This analysis provides quantitative foundation for risk management decisions.`, confidence: 0.75 },
          { text: `Customer-Focused Risk Summary

Your Risk Profile: Moderate with High Optimization Potential

Immediate Actions (Next 30 days):
• Schedule safety inspection with our team
• Review current coverage limits and gaps
• Explore available discount programs

Short-term Goals (3-6 months):
• Implement recommended safety measures
• Adjust coverage based on life changes
• Establish monitoring and review schedule

Long-term Strategy (6-12 months):
• Regular risk assessment reviews
• Proactive policy optimization
• Ongoing relationship building

We're here to guide you through each step.`, confidence: 0.71 }
        ];
      } else if (prompt.toLowerCase().includes('analysis') || prompt.toLowerCase().includes('report')) {
        output = `Executive Summary Report

Our comprehensive analysis reveals significant insights into the current operational landscape and strategic opportunities for optimization.

Key Findings:
• Performance metrics show 23% improvement in efficiency over baseline
• Risk assessment indicates moderate exposure with manageable mitigation strategies
• Cost analysis reveals 15% potential savings through strategic adjustments

Strategic Recommendations:
1. Immediate Actions: Implement identified efficiency improvements
2. Short-term (3-6 months): Develop comprehensive risk mitigation plan
3. Long-term (6-12 months): Establish monitoring and optimization framework

The data suggests strong potential for continued improvement with focused implementation of these recommendations.`;
        
        alternatives = [
          { text: `Detailed Technical Analysis Report

Data Visualization Summary:
• Performance Metrics: 23% improvement (baseline: 100, current: 123)
• Statistical Significance: p < 0.01 (99% confidence)
• Correlation Coefficient: r = 0.87 (strong positive)

Statistical Modeling Results:
1. Linear Regression: R² = 0.76 (76% variance explained)
2. Trend Analysis: Consistent upward trajectory
3. Outlier Detection: 3 anomalies identified and addressed

Model Validation:
• Cross-validation accuracy: 89%
• Prediction error: ±2.3%
• Confidence intervals: 95% coverage

This analysis provides robust statistical foundation for strategic decisions.`, confidence: 0.78 },
          { text: `Executive Summary with Financial Impact

Financial Performance Overview:
• Revenue Impact: +$2.3M (23% increase)
• Cost Savings: $1.1M through optimization
• ROI: 3.2:1 (320% return on investment)

Projected Financial Impact:
• Q1: $800K additional revenue
• Q2: $1.2M additional revenue  
• Q3: $1.5M additional revenue
• Q4: $1.8M additional revenue

Strategic Investment Recommendations:
• Immediate: $500K for efficiency tools
• Short-term: $1.2M for process optimization
• Long-term: $2.5M for technology infrastructure

Expected 18-month payback period with ongoing benefits.`, confidence: 0.73 }
        ];
      } else {
        // Generic AI response
        output = `Based on your request, I've analyzed the provided information and generated the following response:

The analysis indicates positive trends in the areas you've highlighted, with several opportunities for optimization and improvement. Our assessment shows consistent performance metrics that align with industry benchmarks.

Key insights include:
• Strong performance in core competency areas
• Identified opportunities for process improvement
• Recommendations for strategic advancement

This response demonstrates how AI can process complex information and provide structured, actionable insights. The confidence level reflects the quality and reliability of the analysis performed.`;
        
        alternatives = [
          { text: `Detailed Technical Breakdown

Comprehensive Analysis Results:
• Performance Metrics: 23% improvement over baseline
• Statistical Significance: p < 0.05 (95% confidence)
• Effect Size: Cohen's d = 0.87 (large effect)

Benchmark Comparisons:
1. Industry Average: 15% improvement
2. Competitor Benchmark: 18% improvement  
3. Historical Performance: 12% improvement
4. Target Achievement: 92% of goal

Technical Specifications:
• Data Points Analyzed: 15,432
• Model Accuracy: 89.3%
• Processing Time: 2.3 seconds
• Confidence Interval: ±3.2%

This analysis exceeds industry benchmarks and demonstrates strong performance.`, confidence: 0.74 },
          { text: `Simplified Action Summary

Key Action Items:
1. Review current performance metrics
2. Identify optimization opportunities
3. Implement recommended improvements
4. Monitor progress and results

Next Steps Timeline:
• Week 1: Performance review and goal setting
• Week 2-3: Implementation planning
• Week 4-6: Execute improvements
• Week 7-8: Measure and adjust

Success Metrics:
• Target: 25% improvement
• Current: 23% improvement
• Gap: 2% remaining
• Timeline: 4-6 weeks

Focus on high-impact, low-effort improvements first.`, confidence: 0.69 }
        ];
      }

      // Adjust output based on model parameters
      if (modelConfig.temperature > 1.5) {
        output += "\n\n[Note: Higher temperature setting generated more creative variations]";
      } else if (modelConfig.temperature < 0.3) {
        output += "\n\n[Note: Lower temperature setting produced more focused, consistent output]";
      }

      // Adjust token count based on maxTokens setting
      const estimatedTokens = Math.min(output.length / 4, modelConfig.maxTokens);
      
      setResults({
        output: output,
        metrics: {
          tokens: Math.round(estimatedTokens),
          latency: Math.round(800 + Math.random() * 1000), // Randomize latency
          confidence: 0.75 + Math.random() * 0.2, // Randomize confidence
          cost: (estimatedTokens * 0.0001).toFixed(4) // Calculate cost based on tokens
        },
        alternatives: alternatives
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
                    <div 
                      key={index} 
                      className="border border-dove rounded-lg p-4 hover:border-sage hover:bg-sage/5 cursor-pointer transition-all duration-200"
                      onClick={() => {
                        // Replace the main output with the selected alternative
                        setResults(prev => ({
                          ...prev,
                          output: alt.text,
                          metrics: {
                            ...prev.metrics,
                            confidence: alt.confidence,
                            tokens: Math.round(alt.text.length / 4)
                          }
                        }));
                      }}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-navy">Alternative {index + 1}</span>
                        <span className="text-xs text-navy/70">{Math.round(alt.confidence * 100)}% confidence</span>
                      </div>
                      <p className="text-navy/80 text-sm">{alt.text}</p>
                      <div className="mt-2 text-xs text-sage font-medium">
                        Click to use this alternative
                      </div>
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