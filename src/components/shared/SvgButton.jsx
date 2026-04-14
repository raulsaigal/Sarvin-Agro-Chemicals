import React from 'react';
import './SvgButton.css';

export default function SvgButton({ children, className = '', isDarkTheme = false, ...props }) {
  return (
    <button className={`svg-button ${isDarkTheme ? 'theme-dark' : 'theme-light'} ${className}`} {...props}>
      <svg className="svg-button__svg" width="200" height="50" viewBox="0 0 200 50">
        {/* We use x="1" y="1" width="198" height="48" to avoid stroke cropping */}
        <rect className="svg-button__line outer" x="1" y="1" width="198" height="48" />
        <rect className="svg-button__line inner" x="1" y="1" width="198" height="48" />
      </svg>
      <span className="svg-button__content">{children}</span>
    </button>
  );
}
