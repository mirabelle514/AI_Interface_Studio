import React from 'react';
import { Brain, Target, Shield, Zap, Users, Lightbulb, TrendingUp, Globe } from 'lucide-react';

export default function About() {
  const principles = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Confidence-First Design",
      description: "Every AI output includes confidence indicators, helping users make informed decisions about AI-generated content."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Progressive Intelligence",
      description: "Information is revealed hierarchically, allowing users to dive deeper into AI reasoning only when needed."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Graceful Degradation",
      description: "When AI systems fail, our patterns provide clear recovery paths and maintain user trust."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Awareness",
      description: "Real-time feedback about AI processing states helps users understand system behavior."
    }
  ];

  const applications = [
    "Content Management Systems with AI-powered analysis",
    "Business Intelligence Platforms with ML-driven insights",
    "Creative Tools that augment human creativity",
    "Customer Support Systems with intelligent routing",
    "Research Platforms for complex AI-generated analysis",
    "Educational Applications that adapt to learning patterns"
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center">
            <Brain className="w-8 h-8 text-ivory" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-navy mb-4">
          About AI Interface Studio
        </h1>
        <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
          A comprehensive prototype that demonstrates the future of human-AI interaction design, 
          bridging complex AI capabilities with intuitive user experiences.
        </p>
      </div>

      <div className="bg-ivory rounded-2xl shadow-sm border border-dove p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Lightbulb className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">Vision & Mission</h2>
        </div>
        <div className="prose prose-lg max-w-none">
          <p className="text-navy/80 mb-4">
            As artificial intelligence becomes increasingly integrated into everyday applications, 
            the need for thoughtful, user-centered interface patterns has never been more critical.
          </p>
          <p className="text-navy/80 mb-4">
            AI Interface Studio represents a new paradigm in interface design—one that acknowledges 
            and embraces the inherent uncertainty of AI systems while building user trust through 
            transparency, progressive disclosure, and intelligent feedback mechanisms.
          </p>
          <div className="bg-sage/10 border border-sage/30 rounded-lg p-4">
            <p className="text-navy font-medium mb-2">Core Mission:</p>
            <ul className="text-navy/80 space-y-1">
              <li>• Bridge the gap between complex AI capabilities and intuitive user experiences</li>
              <li>• Establish design patterns that make AI systems more trustworthy and understandable</li>
              <li>• Demonstrate how confidence scoring reduces cognitive load</li>
              <li>• Provide a foundation for building AI-first applications users actually want to use</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-3 mb-8">
          <Target className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">Design Principles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="bg-ivory rounded-xl shadow-sm border border-dove p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sage/15 rounded-lg flex items-center justify-center text-sage">
                  {principle.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-navy/70">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-ivory rounded-2xl shadow-sm border border-dove p-8">
        <div className="flex items-center space-x-3 mb-6">
          <Globe className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">Real-World Applications</h2>
        </div>
        <p className="text-navy/70 mb-6">
          The patterns demonstrated in this studio are designed for production use in:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {applications.map((app, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-sage rounded-full" />
              <span className="text-navy/80">{app}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-navy/5 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-sage" />
          <h2 className="text-2xl font-bold text-navy">The Future of AI Interfaces</h2>
        </div>
        <p className="text-navy/80 mb-6">
          As AI capabilities continue to evolve, interface design must evolve alongside them. 
          This studio represents a step toward interfaces that:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Make AI accessible to non-technical users</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Build trust through transparency</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Scale gracefully as AI improves</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Maintain human agency in AI workflows</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Create delightful uncertain experiences</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-sage" />
              <span className="text-navy/80">Enable effective human-AI collaboration</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-ivory rounded-2xl shadow-sm border border-dove p-8">
        <p className="text-navy/70 mb-4">
          This isn't just a design system—it's a vision for how humans and AI can work together 
          more effectively through thoughtful interface design.
        </p>
        <div className="text-sm text-navy/60">
          <p>Created by{' '}
            <a 
              href="https://mirabelledoiron.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-navy font-medium hover:text-sage transition-colors"
            >
              Mirabelle Doiron
            </a>
          </p>
          <p className="mt-1">Specializing in AI/ML interface design and design systems engineering</p>
        </div>
      </div>
    </div>
  );
}