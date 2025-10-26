import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-full aspect-video zabsolute inset-0 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 md:py-24 text-white bg-gradient-to-r from-black/80 via-black/40 to-transparent">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg leading-tight">
        {title}
      </h1>

      {/* Overview */}
      <p className="text-sm md:text-lg font-medium mb-6 max-w-2xl leading-relaxed opacity-90">
        {overview}
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        <button
          aria-label={`Play ${title}`}
          className="bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-gray-300 transition-all duration-200 shadow-lg"
        >
          ▶ Play
        </button>

        <button
          aria-label={`More info about ${title}`}
          className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 md:px-8 md:py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
        >
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

VideoTitle.defaultProps = {
  title: "",
  overview: "",
};

export default VideoTitle;
