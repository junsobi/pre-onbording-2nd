import React from "react";

const Ad: React.FC = () => {
  const adImageUrl =
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";
  const adLink = "https://www.wanted.co.kr/";

  return (
    <a
      href={adLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center h-32 border-b"
    >
      <img
        src={adImageUrl}
        alt="Ad"
        className="max-h-32 object-contain mx-auto w-full h-auto"
      />
    </a>
  );
};

export default Ad;
