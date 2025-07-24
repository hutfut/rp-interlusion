import React, { useEffect, useRef, useState } from 'react';
import ActiveSceneCard from './ActiveSceneCard';
import { Token } from '../tokens';
import './Scorecard.css';
import './ActiveSceneCard.css';

export interface Scorecard {
  name: string; // A name written by the user describing the scorecard
  duration: number; // The total time the scorecard accounts for (in seconds)
  date: string; // The day the scorecard was recorded for (ISO string or date format)
  actors: string[]; // List of Token ids present in the scene
  scores: Record<string, number>; // Running total for each actor
}

export type Engagement = 1 | 2 | 3;
export type Intensity = 1 | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 1.7 | 1.8 | 1.9 | 2 | 2.1 | 2.2 | 2.3 | 2.4 | 2.5 | 2.6 | 2.7 | 2.8 | 2.9 | 3 | 3.1 | 3.2 | 3.3 | 3.4 | 3.5 | 3.6 | 3.7 | 3.8 | 3.9 | 4 | 4.1 | 4.2 | 4.3 | 4.4 | 4.5 | 4.6 | 4.7 | 4.8 | 4.9 | 5;
export type ActorScores = Record<string, number>;

function calculateScoreDelta(intensity: number, engagement: number): number {
  return intensity * engagement * 0.1;
}

const SCENE_STORAGE_KEY = 'saved_scenes';

export const Scorecard: React.FC = () => {
  // Active scene state
  const [activeScene, setActiveScene] = useState<Scorecard | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState<number>(0);

  const intervalRef = useRef<number | null>(null);

  // Engagement and intensity for the active scene
  const [engagement, setEngagement] = useState<Record<string, Engagement>>({});
  const [intensity, setIntensity] = useState<number>(1.5);

  // Saved scenes
  const [savedScenes, setSavedScenes] = useState<Scorecard[]>([]);

  // Track if we are in 'new scene' mode
  const [showNewSceneForm, setShowNewSceneForm] = useState(false);

  // Load tokens from localStorage
  const [tokens, setTokens] = useState<Token[]>([]);

  // Load saved scenes and tokens from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(SCENE_STORAGE_KEY);
    if (stored) {
      setSavedScenes(JSON.parse(stored));
    }
    
    const storedTokens = localStorage.getItem('character_tokens');
    if (storedTokens) {
      setTokens(JSON.parse(storedTokens));
    }
  }, []);

  // Helper function to get token by ID
  const getTokenById = (id: string): Token | undefined => {
    return tokens.find(token => token.id === id);
  };

  // Save scenes to localStorage
  const saveScene = (scene: Scorecard) => {
    const updated = [scene, ...savedScenes];
    setSavedScenes(updated);
    localStorage.setItem(SCENE_STORAGE_KEY, JSON.stringify(updated));
  };

  // Start scoring interval
  useEffect(() => {
    if (isPlaying && activeScene) {
      intervalRef.current = window.setInterval(() => {
        setElapsed(prev => prev + 1);
        setActiveScene(prev => {
          if (!prev) return prev;
          const newScores: Record<string, number> = { ...prev.scores };
          prev.actors.forEach(actorId => {
            const delta = calculateScoreDelta(intensity, engagement[actorId] || 1);
            newScores[actorId] = (newScores[actorId] || 0) + delta;
          });
          return { ...prev, scores: newScores, duration: prev.duration + 1 };
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, activeScene, intensity, engagement]);

  // Handler for creating a new scene
  const handleCreateScene = (actorIds: string[], title: string, sceneIntensity: number, sceneEngagement: number) => {
    const now = new Date().toISOString();
    const initialScores: Record<string, number> = {};
    actorIds.forEach(id => (initialScores[id] = 0));
    setEngagement(Object.fromEntries(actorIds.map(id => [id, sceneEngagement as Engagement])));
    setIntensity(sceneIntensity);
    setActiveScene({
      name: title,
      duration: 0,
      date: now,
      actors: actorIds,
      scores: initialScores,
    });
    setElapsed(0);
    setIsPlaying(false);
    setShowNewSceneForm(false);
  };

  // Handler for updating individual token engagement
  const handleEngagementChange = (tokenId: string, value: number) => {
    setEngagement(prev => ({ ...prev, [tokenId]: value as Engagement }));
  };

  // Handler for saving and ending the active scene
  const handleEndScene = () => {
    if (activeScene) {
      saveScene(activeScene);
      setActiveScene(null);
      setElapsed(0);
      setIsPlaying(false);
    }
  };

  // Handler for starting a new scene (with confirmation if one is active)
  const handleNewScene = () => {
    if (activeScene) {
      if (!window.confirm('End and save the current active scene?')) return;
      handleEndScene();
    }
    setActiveScene(null);
    setElapsed(0);
    setIsPlaying(false);
    setShowNewSceneForm(true);
  };

  // Handler for deleting a saved scene
  const handleDeleteScene = (sceneToDelete: Scorecard) => {
    if (window.confirm(`Delete scene '${sceneToDelete.name}'? This cannot be undone.`)) {
      const updated = savedScenes.filter(scene => scene.date !== sceneToDelete.date);
      setSavedScenes(updated);
      localStorage.setItem(SCENE_STORAGE_KEY, JSON.stringify(updated));
    }
  };

  // Reverse chronological order for saved scenes
  const scenesToShow = [...savedScenes];

  return (
    <div className="scorecard-container">
      {activeScene ? (
        <div className="active-scene-window">
          <h2 className="scorecard-heading">{activeScene.name}</h2>
          <div className="scorecard-intensity">Elapsed: {elapsed}s</div>
          
          <ActiveSceneCard 
            isActiveScene={true}
            initialIntensity={intensity}
            initialEngagement={engagement}
            onIntensityChange={setIntensity}
            onEngagementChange={handleEngagementChange}
            activeSceneTitle={activeScene.name}
            activeSceneTokens={activeScene.actors.map(actorId => getTokenById(actorId)).filter(Boolean) as Token[]}
            activeSceneScores={activeScene.scores}
          />
          
          <div className="scene-controls">
            <button
              className={isPlaying ? 'pause' : 'play'}
              onClick={() => setIsPlaying(p => !p)}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              className="end"
              onClick={handleEndScene}
            >
              End Scene
            </button>
          </div>
        </div>
      ) : showNewSceneForm || scenesToShow.length === 0 ? (
        <div className="active-scene-window">
          <ActiveSceneCard onCreate={handleCreateScene} onCancel={() => setShowNewSceneForm(false)} />
        </div>
      ) : null}
      {scenesToShow.length > 0 && (
        <>
          <h2 className="scorecard-heading">Saved Scenes</h2>
          <div className="saved-scenes-list">
            {/* New Scene Placeholder Card */}
            <div
              className="new-scene-card"
              onClick={handleNewScene}
              title="Start a new scene"
            >
              + New Scene
            </div>
            {/* Saved Scenes, reverse chronological */}
            {scenesToShow.map((scene, idx) => (
              <div key={scene.date + idx} className="saved-scene-card">
                <button
                  className="scene-delete-btn"
                  title="Delete scene"
                  onClick={() => handleDeleteScene(scene)}
                >
                  ×
                </button>
                <div className="saved-scene-name">{scene.name}</div>
                <div className="saved-scene-date">Date: {new Date(scene.date).toLocaleString()}</div>
                <div className="saved-scene-duration">Duration: {scene.duration}s</div>
                <ul className="saved-scene-actors-list">
                  {scene.actors.map(actorId => {
                    const token = getTokenById(actorId);
                    return (
                      <li key={actorId} className="saved-scene-actor-item">
                        {token ? (
                          <>
                            <img 
                              src={token.image} 
                              alt={token.name} 
                              className="saved-scene-actor-avatar"
                            />
                            <span className="saved-scene-actor-name">{token.name}:</span>
                          </>
                        ) : (
                          <span className="saved-scene-unknown-token">Unknown Token ({actorId}):</span>
                        )}
                        <span className="saved-scene-actor-score">Score {scene.scores[actorId]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}; 