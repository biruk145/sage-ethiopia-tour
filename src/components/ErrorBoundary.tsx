import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  // Declare state property to satisfy TypeScript in environments without @types/react
  declare state: State;
  declare props: Readonly<Props>;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: unknown): State {
    return { 
      hasError: true, 
      errorMessage: error instanceof Error ? error.message : String(error) 
    };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error('ErrorBoundary captured error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-amber-50/50 text-gray-800">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-200 text-center space-y-4">
            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              !
            </div>
            <h2 className="text-2xl font-serif font-bold text-gray-900">Something went wrong</h2>
            <p className="text-sm text-gray-600">
              {this.state.errorMessage || 'An error occurred while loading this page.'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg font-medium transition-colors shadow-md text-sm"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
