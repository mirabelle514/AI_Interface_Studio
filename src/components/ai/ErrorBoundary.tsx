import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-dove">
          <div className="bg-ivory rounded-xl shadow-sm border border-dove p-8 max-w-md text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-burgundy" />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-navy mb-2">
              Something went wrong
            </h2>
            
            <p className="text-navy/70 mb-6">
              An unexpected error occurred while processing your request. 
              This could be due to a temporary issue with the AI service.
            </p>
            
            <button
              onClick={this.handleRetry}
              className="flex items-center space-x-2 mx-auto px-4 py-2 bg-navy text-ivory rounded-lg hover:bg-navy/90 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            
            <details className="mt-4 text-left">
              <summary className="text-sm text-navy/50 cursor-pointer hover:text-navy/70">
                Technical Details
              </summary>
              <pre className="mt-2 text-xs text-navy/70 bg-dove/50 p-2 rounded overflow-auto">
                {this.state.error?.toString()}
              </pre>
            </details>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}