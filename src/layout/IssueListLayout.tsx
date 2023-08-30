import React, { ReactNode } from "react";
import Header from "../components/Header/Header";

interface IssueListLayoutProps {
  children: ReactNode;
}

const IssueListLayout: React.FC<IssueListLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen w-screen px-10 py-5 bg-gray-50 flex justify-center items-center overflow-hidden">
      <div className="w-full h-full bg-gray-50 border-2 overflow-x-hidden overflow-y-auto relative">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default IssueListLayout;
