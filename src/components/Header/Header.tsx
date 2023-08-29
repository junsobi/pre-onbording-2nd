import React from "react";
import { useIssues } from "../../context/IssueContext";

const Header: React.FC = () => {
  const { organization, repository } = useIssues();

  return (
    <header>
      <h1>
        {organization} / {repository}
      </h1>
    </header>
  );
};

export default Header;
