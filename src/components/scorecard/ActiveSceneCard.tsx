import React, { useEffect, useState } from 'react';
import { Token } from '../tokens';
import './ActiveSceneCard.css';

const ActiveSceneCard: React.FC<{ 
  onCreate?: (selectedTokenIds: string[], title: string, intensity: number, engagement: number) => void;
  onCancel?: () => void;
  isActiveScene?: boolean;
  initialIntensity?: number;
  initialEngagement?: Record<string, number>;
  onIntensityChange?: (intensity: number) => void;
  onEngagementChange?: (tokenId: string, engagement: number) => void;
  activeSceneTitle?: string;
  activeSceneTokens?: Token[];
  activeSceneScores?: Record<string, number>;
}> = ({ 
  onCreate, 
  onCancel, 
  isActiveScene = false,
  initialIntensity = 1.5,
  initialEngagement = {},
  onIntensityChange,
  onEngagementChange,
  activeSceneTokens = [],
  activeSceneScores = {}
}) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [title, setTitle] = useState('');
  const [intensity, setIntensity] = useState(initialIntensity);
  const [engagement, setEngagement] = useState<Record<string, number>>(initialEngagement);

  useEffect(() => {
    const stored = localStorage.getItem('character_tokens');
    if (stored) {
      setTokens(JSON.parse(stored));
    }
  }, []);

  const toggleToken = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleIntensityChange = (value: number) => {
    setIntensity(value);
    if (onIntensityChange) {
      onIntensityChange(value);
    }
  };

  const handleEngagementChange = (tokenId: string, value: number) => {
    setEngagement(prev => ({ ...prev, [tokenId]: value }));
    if (onEngagementChange) {
      onEngagementChange(tokenId, value);
    }
  };

  // Show different content based on whether this is for creating or displaying
  if (isActiveScene) {
    return (
      <div className="active-scene-form">
        <div className="scene-intensity-container">
          <label htmlFor="scene-intensity">Scene Intensity: {intensity}</label>
          <input
            id="scene-intensity"
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={intensity}
            onChange={e => handleIntensityChange(parseFloat(e.target.value))}
            className="scene-intensity-slider"
          />
        </div>
        
        <div className="character-engagement-container">
          <div className="character-engagement-header">Character Engagement & Scores:</div>
          {activeSceneTokens.map(token => (
            <div key={token.id} className="character-engagement-row">
              <img 
                src={token.image} 
                alt={token.name} 
                className="character-engagement-avatar"
              />
              <span className="character-engagement-name">{token.name}:</span>
              <span className="character-engagement-value">{engagement[token.id] || 1}</span>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={engagement[token.id] || 1}
                onChange={e => handleEngagementChange(token.id, parseFloat(e.target.value))}
                className="character-engagement-slider"
              />
              <span className="character-engagement-score">Score {activeSceneScores[token.id] || 0}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Original form for creating new scenes
  return (
    <div className="active-scene-form">
      <div className="scene-title-container">
        <label htmlFor="scene-title">Scene Title:</label>
        <input
          id="scene-title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter scene title..."
        />
      </div>
      
      <div className="add-tokens-container">Add Tokens to Scene:</div>
      <div className="active-scene-tokens">
        {tokens.length === 0 && <div>No tokens found. Create tokens first.</div>}
        {tokens.map(token => (
          <div
            key={token.id}
            onClick={() => toggleToken(token.id)}
            className={`active-scene-token${selected.has(token.id) ? ' selected' : ''}`}
          >
            <img src={token.image} alt={token.name} />
            <span className="active-scene-token-name">{token.name}</span>
            {selected.has(token.id) && <span className="active-scene-token-selected">Selected</span>}
          </div>
        ))}
      </div>
      <button onClick={() => { setTitle(''); if (onCancel) onCancel(); }} type="button">Cancel</button>
      <button
        onClick={() => {
          if (onCreate) onCreate(Array.from(selected), title, intensity, engagement[Array.from(selected)[0]] || 1);
          setTitle('');
        }}
        disabled={selected.size === 0 || !title.trim()}
      >Create Scene</button>
    </div>
  );
};

export default ActiveSceneCard; 