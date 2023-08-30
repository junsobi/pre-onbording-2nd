import React from "react";
import { useIssuess } from "../../context/IssueContext";

const Header: React.FC = () => {
  const { organization, repository } = useIssuess();

  return (
    <header>
      <h1>
        {organization} / {repository}
      </h1>
    </header>
  );
};

export default Header;
