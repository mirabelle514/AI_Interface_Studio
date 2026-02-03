import React from 'react';
import { BookOpen, MousePointer, Eye, Code, Zap, Brain, Target, Settings, ArrowRight, CheckCircle } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Start with the Content Analyzer",
      description: "Begin by exploring the main feature - paste any text content and see AI analysis in action.",
      details: [
        "Enter text in the input area (emails, articles, reports, etc.)",
        "Click 'Analyze' to see real-time AI processing",
        "Watch confidence scores and progressive disclosure patterns",
        "Notice how uncertainty is communicated clearly"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Explore the Design System",
      description: "Study the specialized components built for AI interfaces and their usage patterns.",
      details: [
        "View live component examples with real interactions",
        "Copy code snippets for your own projects",
        "Understand confidence thresholds and color coding",
        "Learn about progressive disclosure patterns"
      ]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Experiment in the Playground",
      description: "Test different AI model parameters and see how they affect outputs and confidence.",
      details: [
        "Adjust temperature, tokens, and other model settings",
        "Try different types of prompts (emails, analysis, reports)",
        "Compare alternative outputs with confidence scores",
        "Understand the relationship between parameters and results"
      ]
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Read the About Section",
      description: "Understand the philosophy and real-world applications of these design patterns.",
      details: [
        "Learn why AI interfaces need different design approaches",
        "See examples of where these patterns apply",
        "Understand the future vision for human-AI interaction",
        "Get context on the design principles"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Confidence Indicators",
      description: "Every AI output shows how certain the system is about its results",
      example: "Green = High confidence (≥80%), Gold = Medium (60-79%), Red = Low (<60%)"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Progressive Disclosure",
      description: "Complex information is revealed in layers to prevent cognitive overload",
      example: "Click arrows to expand detailed analysis sections"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Processing States",
      description: "Clear feedback about what the AI is doing and how long it might take",
      example: "Loading → Processing → Analyzing → Complete with progress bars"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Error Recovery",
      description: "When AI systems fail, users get clear paths to try again",
      example: "Retry buttons, alternative suggestions, graceful degradation"
    }
  ];

  const useCases = [
    {
      scenario: "You're a Product Manager",
      howTo: "Use this to understand how to design AI features that users will trust and understand. Focus on the confidence indicators and error handling patterns.",
      benefit: "Build AI products that users actually want to use"
    },
    {
      scenario: "You're a Designer",
      howTo: "Study the component library and design tokens. Notice how uncertainty is visualized and how complex information is organized.",
      benefit: "Create interfaces that make AI systems more approachable"
    },
    {
      scenario: "You're a Developer",
      howTo: "Copy the component code and adapt the patterns for your own AI applications. Pay attention to the error boundaries and loading states.",
      benefit: "Implement AI interfaces that handle uncertainty gracefully"
    },
    {
      scenario: "You're Building AI Tools",
      howTo: "Use the playground to understand how different AI parameters affect user experience. Test various confidence levels and output types.",
      benefit: "Design AI systems with appropriate user expectations"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center">
            <BookOpen className="w-8 h-8 text-ivory" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-navy mb-4">
          How to Use AI Interface Studio
        </h1>
        <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
          A step-by-step guide to exploring and understanding the patterns, components, 
          and principles for designing better AI interfaces.
        </p>
      </div>

      <div className="bg-sage/10 border border-sage/30 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <MousePointer className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">Quick Start Guide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage/15 rounded-lg flex items-center justify-center text-sage">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-6 h-6 bg-navy text-ivory rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-navy/70 mb-3">
                    {step.description}
                  </p>
                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2 text-sm text-navy/80">
                        <ArrowRight className="w-3 h-3 mt-0.5 text-sage flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-3 mb-8">
          <Target className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">Key Features to Notice</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-navy/15 rounded-lg flex items-center justify-center text-navy">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy/70 mb-3">
                    {feature.description}
                  </p>
                  <div className="bg-sage/10 border border-sage/30 rounded-lg p-3">
                    <p className="text-sm text-navy font-medium">Example:</p>
                    <p className="text-sm text-navy/80">{feature.example}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-ivory rounded-2xl shadow-sm border border-dove p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">How to Use This Based on Your Role</h2>
        </div>
        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <div key={index} className="border border-dove rounded-xl p-6">
              <h3 className="text-lg font-semibold text-navy mb-3">
                {useCase.scenario}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-navy/80 mb-2">How to Use:</h4>
                  <p className="text-navy/70">{useCase.howTo}</p>
                </div>
                <div>
                  <h4 className="font-medium text-navy/80 mb-2">Key Benefit:</h4>
                  <p className="text-sage font-medium">{useCase.benefit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy/5 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Code className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">What You'll Learn</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-navy">Design Patterns</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">How to communicate AI uncertainty</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Progressive information disclosure</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Error handling for AI systems</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Loading states for AI processing</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-navy">Implementation</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Reusable React components</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Design system tokens</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Accessibility considerations</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-sage" />
                <span className="text-navy/80">Performance optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-ivory rounded-2xl shadow-sm border border-dove p-8">
        <h2 className="text-2xl font-bold text-navy mb-4">Ready to Explore?</h2>
        <p className="text-navy/70 mb-6">
          Start with the Content Analyzer to see these patterns in action, then dive into 
          the Design System to understand how to implement them in your own projects.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/" 
            className="flex items-center space-x-2 px-6 py-3 bg-navy text-ivory rounded-lg hover:bg-sage hover:text-navy transition-colors"
          >
            <Brain className="w-4 h-4" />
            <span>Try the Analyzer</span>
          </a>
          <a 
            href="/design-system" 
            className="flex items-center space-x-2 px-6 py-3 border border-navy text-navy rounded-lg hover:bg-navy hover:text-ivory transition-colors"
          >
            <Code className="w-4 h-4" />
            <span>View Components</span>
          </a>
        </div>
      </div>
    </div>
  );
}