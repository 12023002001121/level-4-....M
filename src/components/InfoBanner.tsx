import React from 'react';

export function InfoBanner() {
  return (
    <div className="info-banner glass-panel">
      <span className="info-banner-icon">🛡️</span>
      <div>
        <strong>Level 4 Zero-Knowledge Privacy Architecture:</strong> Only authorized voters whose credential commitments form the depth-3 Merkle Tree allowlist are permitted to vote. Client-side ZK-SNARK circuits prove tree inclusion in zero-knowledge and register deterministic nullifiers on-chain. Observer anonymity is mathematically absolute: no link exists between voter secret keys, wallet addresses, or YES/NO ballots.
      </div>
    </div>
  );
}
