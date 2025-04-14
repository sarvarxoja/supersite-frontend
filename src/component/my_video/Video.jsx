import React, { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export const VideoPlayer = () => {
  return (
    <div className="max-w-3xl mx-auto mb-3 mt-[-20px]">
      <div className="relative rounded-lg overflow-hidden bg-black">
        <div className="flex items-center justify-between">
          <iframe
            width="853"
            height="380"
            src="https://www.youtube.com/embed/e-WWZaC4oG0"
            title="PECB Conference 2024 - Aftermovie"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};