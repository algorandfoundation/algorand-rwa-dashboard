import React from 'react';
import './Footer.css';

const Footer = ({ activeTab }) => {
  const getProjectsConsidered = () => {
    switch (activeTab) {
      case '/':
        return 'Lofty, ASA.Gold, Meld Gold, HAFN, World Chess (WCPP), Mann Deshi, Labtrace, Stablecoins (USDC, USDT, xUSD, goUSD)';
      case '/private-credit':
        return 'Folks Finance Lending Protocol';
      case '/real-estate':
        return 'Lofty';
      case '/certificates':
        return 'Labtrace and Mann Deshi';
      case '/loyalty':
        return 'World Chess (WCPP)';
      default:
        return null;
    }
  };

  const projectsText = getProjectsConsidered();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Data Sources</h4>
          <div className="footer-sources">
            <span>Defillama</span>
            <span className="footer-separator">•</span>
            <span>Nodely DW</span>
            <span className="footer-separator">•</span>
            <span>Yahoo Finance</span>
          </div>
        </div>

        {projectsText && (
          <div className="footer-section">
            <h4 className="footer-title">Projects Considered</h4>
            <p className="footer-text">
              {projectsText}
            </p>
          </div>
        )}

        <div className="footer-section">
          <p className="footer-text">
            If you have an RWA project on Algorand contact us so it can be added.
          </p>
        </div>

        <div className="footer-section">
          <p className="footer-powered">
            Dashboard powered by <strong>Algorand Foundation BI Team</strong>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;