import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Palette, PlayCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-ivory">
      <nav className="bg-ivory/90 backdrop-blur-sm border-b border-dove sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-ivory" />
              </div>
              <span className="font-bold text-xl text-navy">
                AI Interface Studio
              </span>
            </div>
            
            <div className="flex space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sage/20 text-navy border border-sage/30'
                      : 'text-navy hover:text-navy hover:bg-navy/10'
                  }`
                }
              >
                <Brain className="w-4 h-4" />
                <span>Analyzer</span>
              </NavLink>
              <NavLink
                to="/design-system"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sage/20 text-navy border border-sage/30'
                      : 'text-navy hover:text-navy hover:bg-navy/10'
                  }`
                }
              >
                <Palette className="w-4 h-4" />
                <span>Design System</span>
              </NavLink>
              <NavLink
                to="/playground"
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sage/20 text-navy border border-sage/30'
                      : 'text-navy hover:text-navy hover:bg-navy/10'
                  }`
                }
              >
                <PlayCircle className="w-4 h-4" />
                <span>Playground</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-ivory border-t border-dove mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-navy/70 text-sm">
              Made by{' '}
              <a 
                href="https://mirabelledoiron.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-navy font-medium hover:text-sage transition-colors"
              >
                Mirabelle Doiron
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}