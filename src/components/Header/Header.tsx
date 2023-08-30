import React from "react";
import { useIssuess } from "../../context/IssueContext";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const { organization, repository } = useIssuess();

  return (
    <header className="sticky top-0 z-40 h-20 bg-gray-50 text-3xl font-bold flex items-center justify-center border-b-2">
      <h1>
        <a
          href={`https://github.com/${organization}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-600 rounded-xl hover:text-white px-2"
        >
          {organization}
        </a>
        /
        <a
          href={`https://github.com/${organization}/${repository}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-600 rounded-lg hover:text-white px-2"
        >
          {repository}
        </a>
      </h1>
    </header>
  );
};

export default Header;
