import React from "react";
import IssueList from "../components/IssueList/IssueList";
import Header from "../components/Header/Header";

const IssueListPage: React.FC = () => {
  return (
    <>
      <Header />
      <IssueList />
    </>
  );
};

export default IssueListPage;
