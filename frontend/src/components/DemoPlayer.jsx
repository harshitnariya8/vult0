import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { demoTranscript } from '../mockData';

const DemoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    
    // Simulate audio playback progress
    if (!isPlaying) {
      let currentProgress = progress;
      const interval = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setIsPlaying(false);
          setProgress(0);
        }
      }, 154); // 154ms * 100 = ~15.4 seconds (mock duration)
      
      return () => clearInterval(interval);
    }
  };

  return (
    <div className="demo-player-section">
      <div className="container">
        <div className="demo-header">
          <h2 className="heading-1">Listen to a call your competitor would've missed</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            Real conversation. Real case. Real revenue.
          </p>
        </div>

        <div className="demo-content-grid">
          {/* Audio Player Card */}
          <div className="demo-player-card">
            <div className="demo-player-header">
              <div className="demo-info">
                <h3 className="heading-3">Property Dispute Consultation</h3>
                <p className="caption">{demoTranscript.date} • {demoTranscript.callDuration}</p>
              </div>
            </div>

            <div className="audio-player-widget">
              <button 
                className="play-button-large" 
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              <div className="audio-progress-container">
                <div className="audio-progress-bar">
                  <div 
                    className="audio-progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="audio-time-display">
                  <span className="audio-time">0:00</span>
                  <span className="audio-time">{demoTranscript.callDuration}</span>
                </div>
              </div>

              <div className="audio-volume">
                <Volume2 size={20} />
              </div>
            </div>

            <div className="demo-outcome">
              <div className="outcome-badge">
                <span className="outcome-label">Result:</span>
                <span className="outcome-value">Consultation Booked • Est. Value ₹75,000</span>
              </div>
            </div>
          </div>

          {/* Transcript Card */}
          <div className="demo-transcript-card">
            <div className="transcript-header">
              <h4 className="heading-3">Call Transcript</h4>
              <span className="caption">AI-powered conversation</span>
            </div>

            <div className="transcript-content">
              {demoTranscript.transcript.slice(0, 6).map((line, index) => (
                <div 
                  key={index} 
                  className={`transcript-line ${line.speaker.toLowerCase()}`}
                >
                  <span className="speaker-badge">{line.speaker}</span>
                  <p className="transcript-text">{line.text}</p>
                </div>
              ))}
              <div className="transcript-fade">
                <p className="caption" style={{ textAlign: 'center', fontStyle: 'italic' }}>
                  + 4 more exchanges • Full qualification completed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="demo-stats-grid">
          <div className="demo-stat-card">
            <div className="stat-value">2 min 34 sec</div>
            <div className="stat-label">Complete intake process</div>
          </div>
          <div className="demo-stat-card">
            <div className="stat-value">9:47 PM</div>
            <div className="stat-label">After office hours</div>
          </div>
          <div className="demo-stat-card">
            <div className="stat-value">100%</div>
            <div className="stat-label">Professional experience</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPlayer;
