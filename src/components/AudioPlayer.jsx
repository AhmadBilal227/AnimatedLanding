import { useState, useRef } from 'react';

export default function AudioPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const newProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(newProgress);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-4 border border-gray-200">
      <audio 
        ref={audioRef} 
        src={track.audioUrl} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <button onClick={togglePlayPause} className="bg-black hover:bg-gray-800 text-white p-2 rounded-full transition-colors">
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play"><polygon points="6 3 20 12 6 21 6 3"/></svg>
        )}
      </button>
      <div className="flex-grow">
        <h3 className="font-bold text-gray-900">{track.title}</h3>
        <p className="text-sm text-gray-500">{track.description}</p>
        <div className="w-full bg-gray-300 rounded-full h-1.5 mt-2">
          <div className="bg-black h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
}
