import React, { useState } from 'react';

const VideoPlayer = ({ videoId, thumbnailSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative w-full h-64">
      {!isPlaying && (
        <img
          src={thumbnailSrc}
          alt="Video Thumbnail"
          className="absolute inset-0 object-cover w-full h-full cursor-pointer"
          onClick={handlePlayClick}
        />
      )}
      {isPlaying && (
        <iframe
          key={videoId} // Key to force re-render when videoId changes
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
