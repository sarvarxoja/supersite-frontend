import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  return (
    <div className="max-w-3xl mx-auto mb-3 mt-[-20px]">
      <div className="relative rounded-lg overflow-hidden bg-black">
        {/* Video element */}
        <video
          className="w-full h-auto"
          poster="/api/placeholder/800/450"
          playsInline
        >
          <source src="#" type="video/mp4" />
          Brauzeringiz video elementini qo'llab-quvvatlamaydi.
        </video>
        
        {/* Play button overlay (visible when not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
            <button 
              className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg hover:bg-opacity-100 transition-all"
              onClick={togglePlay}
            >
              <Play className="w-8 h-8 text-blue-500 ml-1" />
            </button>
            
            {/* Blue line overlay */}
            <div className="absolute top-1/2 w-full h-px bg-blue-500 opacity-50" />
          </div>
        )}
        
        {/* Video controls (visible on hover or when playing) */}
        <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={togglePlay} className="text-white hover:text-blue-400">
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              </button>
              
              <button onClick={toggleMute} className="text-white hover:text-blue-400">
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              
              <span className="text-white text-sm">0:00 / 5:30</span>
            </div>
            
            {/* Progress bar */}
            <div className="hidden sm:block flex-grow mx-4 h-1 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-1/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};