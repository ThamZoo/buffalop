import React, { Component } from 'react';

import $ from './index.module.scss';

export class ErrorBoundary extends Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false } as any;
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  doReload = () => {
    window.location.reload();
  };

  backToHomePage = () => {
    window.location.pathname = '/';
  };

  render() {
    if ((this.state as any)?.hasError) {
      if ((this.props as any)?.ErrorComponent) {
        return (this.props as any).ErrorComponent;
      }

      return (
        <div className={$.error}>
          <div className="bg"></div>
          <div className="content">
            <img src="data:image/png;base64,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" />
            <h1>
              <span>A Bug appeared</span>
            </h1>
            <div className="description">It crashed the system, try to reload or contact administrator for support</div>
            <button onClick={this.doReload}>Reload</button>
            <button onClick={this.backToHomePage}>Back To HomePage</button>
            <code>{(this.state as any)?.error?.toString()}</code>
          </div>
        </div>
      );
    }

    return (this.props as any).children;
  }
}
