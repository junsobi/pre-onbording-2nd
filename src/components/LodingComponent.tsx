import React from "react";

interface LoadingComponentProps {
  height: number | string;
  width: number | string;
}

const LoadingComponent: React.FC<LoadingComponentProps> = ({
  height,
  width,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-${height} w-${width}`}
    >
      <div className="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
    </div>
  );
};

export default LoadingComponent;
