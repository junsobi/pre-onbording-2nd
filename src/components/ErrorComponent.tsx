import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorComponentProps {
  message?: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message }) => {
  const handleRefresh = () => {
    window.location.href = "/"; // 페이지 새로고침을 통해 메인 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <FaExclamationTriangle size={48} color="red" />
      <h1 className="text-xl font-bold">예기치 않은 오류가 발생했습니다.</h1>
      {/* 에러 메시지를 출력 */}
      <p>{message}</p>
      <button
        onClick={handleRefresh}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        Reloding
      </button>
    </div>
  );
};

export default ErrorComponent;
