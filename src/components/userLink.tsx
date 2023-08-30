import React from "react";

interface UserLinkProps {
  login: string;
  children: React.ReactNode;
  className?: string;
}

const UserLink: React.FC<UserLinkProps> = ({ login, children }) => {
  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <a
      href={`https://github.com/${login}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={stopPropagation}
      className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
    >
      {children}
    </a>
  );
};

export default UserLink;
