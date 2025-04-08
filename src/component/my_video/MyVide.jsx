import React from "react";
import { Play } from "lucide-react";
import { VideoPlayer } from "./Video";

export const VideoDeliverySection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Video Section */}
      <div className="w-full bg-white p-4 text-center ">
        <h1 className="text-red-800 mb-4 font-semibold text-xl">
          Видео инструкция как пользоваться сайтом
        </h1>

        <div className="w-full max-w-4xl mx-auto mb-4">
          <div className="relative rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/api/placeholder/800/450')` }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full w-16 h-16 bg-white bg-opacity-80 flex items-center justify-center shadow-lg cursor-pointer hover:bg-opacity-100 transition-all">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <VideoPlayer />
        <p className="text-left text-sm text-gray-600 mb-4 max-w-3xl mx-auto">
          Видео инструкция как пользоваться сайтом Видео инструкция как
          пользоваться сайтом Видео инструкция как пользоваться сайтом Видео
          инструкция как пользоваться сайтом Видео инструкция как пользоваться
          сайтом
        </p>
      </div>
    </div>
  );
};
