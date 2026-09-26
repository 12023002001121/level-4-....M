import React from 'react';

interface HeaderProps {
  blockHeight: number;
  mode: 'simulator' | 'freighter';
  walletAddress: string | null;
  handleResetSandbox: () => void;
  handleConnectWallet: () => void;
}

export function Header({ blockHeight, mode, walletAddress, handleResetSandbox, handleConnectWallet }: HeaderProps) {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo-icon">M</div>
        <div>
          <h1 className="logo-title">Midnight Private Voting</h1>
          <div className="logo-subtitle">
            <span>Level 4 Credential-Gated Governance Suite</span>
            <span>•</span>
            <span className="live-indicator">
              <span className="pulse-dot" /> Block #{blockHeight}
            </span>
          </div>
        </div>
      </div>

      <div className="header-status-group">
        {mode === 'simulator' ? (
          <span className="badge badge-simulator">⚡ Sandbox Simulator</span>
        ) : (
          <span className="badge badge-freighter">
            🦊 Freighter Connected ({walletAddress?.slice(0, 6)}...{walletAddress?.slice(-4)})
          </span>
        )}
        
        {mode === 'simulator' && (
          <button className="btn btn-secondary btn-action" onClick={handleResetSandbox}>
            Reset Sandbox
          </button>
        )}
        {mode === 'simulator' && (
          <button className="btn btn-primary btn-action" onClick={handleConnectWallet}>
            Connect Freighter
          </button>
        )}
      </div>
    </header>
  );
}
