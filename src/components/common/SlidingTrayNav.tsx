import React, { useState } from 'react';
import './SlidingTrayNav.css';

interface SlidingTrayNavProps {
  selectedApp: 'interlude' | 'scorecard' | 'tokens';
  onSelectApp: (app: 'interlude' | 'scorecard' | 'tokens') => void;
}

export const SlidingTrayNav: React.FC<SlidingTrayNavProps> = ({ selectedApp, onSelectApp }) => {
  const [open, setOpen] = useState(true);

  return (
    <nav className={`sliding-tray-nav${open ? ' open' : ' closed'}`}>
      <div className="sliding-tray-toggle" onClick={() => setOpen(o => !o)}>
        {open ? '<' : '>'}
      </div>
      <ul className={`sliding-tray-nav-list${!open ? ' hidden' : ''}`}>
        <li
          className={selectedApp === 'interlude' ? 'active' : ''}
          onClick={() => onSelectApp('interlude')}
        >
          Interlude
        </li>
        <li
          className={selectedApp === 'scorecard' ? 'active' : ''}
          onClick={() => onSelectApp('scorecard')}
        >
          Scorecard
        </li>
        <li
          className={selectedApp === 'tokens' ? 'active' : ''}
          onClick={() => onSelectApp('tokens')}
        >
          Tokens
        </li>
      </ul>
    </nav>
  );
} 