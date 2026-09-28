

export const Footer = () => {
  return (
    <footer style={{
      marginTop: '4rem',
      padding: '2rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.9rem'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Midnight Private Voting</strong> - Credential-Gated Governance
      </div>
      <div>
        <a href="https://x.com/midnightnetwork" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', textDecoration: 'none', margin: '0 10px' }}>Twitter / X</a>
        |
        <a href="https://github.com/12023002001121/level-4-....M" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-light)', textDecoration: 'none', margin: '0 10px' }}>GitHub</a>
      </div>
    </footer>
  );
};
