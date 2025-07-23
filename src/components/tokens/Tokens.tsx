import React, { useState, useRef, useEffect } from 'react';
import './Tokens.css';

export interface Token {
  id: string;
  name: string;
  image: string; // data URL
}

const LOCAL_STORAGE_KEY = 'character_tokens';

const Tokens: React.FC = () => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load tokens from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (stored) {
      setTokens(JSON.parse(stored));
    }
  }, []);

  // Save tokens to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tokens));
  }, [tokens]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !image) return;
    const newToken: Token = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      image,
    };
    setTokens((prev) => [...prev, newToken]);
    setName('');
    setImage(null);
    setShowForm(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCancel = () => {
    setShowForm(false);
    setName('');
    setImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="tokens-container">
      {tokens.length === 0 && !showForm ? (
        <p className="tokens-empty">No tokens created yet.</p>
      ) : null}
      <div className="tokens-grid">
        {tokens.map((token) => (
          <div key={token.id} className="token-card">
            <img src={token.image} alt={token.name} className="token-image" />
            <div className="token-name">{token.name}</div>
            <button
              className="token-delete-btn"
              title="Delete token"
              onClick={() => {
                if (window.confirm(`Delete token '${token.name}'? This cannot be undone.`)) {
                  setTokens(tokens => tokens.filter(t => t.id !== token.id));
                }
              }}
            >
              <span className="token-delete-x" aria-label="Delete">&times;</span>
            </button>
          </div>
        ))}
        {showForm ? (
          <form onSubmit={handleAddToken} className="token-form">
            {image ? (
              <img src={image} alt="Preview" className="token-form-preview" />
            ) : (
              <div
                className="token-image-placeholder"
                onClick={() => fileInputRef.current?.click()}
                tabIndex={0}
                role="button"
                aria-label="Upload image"
                onKeyPress={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    fileInputRef.current?.click();
                  }
                }}
              >
                <span className="token-image-placeholder-icon">+</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              required
              className="token-form-file"
            />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="token-form-input"
            />
            <div className="token-form-actions">
              <button type="submit" className="token-form-add">Add</button>
              <button type="button" onClick={handleCancel} className="token-form-cancel">Cancel</button>
            </div>
          </form>
        ) : (
          <div
            onClick={() => setShowForm(true)}
            className="token-add-card"
            title="Add new token"
          >
            +
          </div>
        )}
      </div>
    </div>
  );
};

export default Tokens; 