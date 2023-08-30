import React from "react";
import Ad from "../Ad";
import { Link } from "react-router-dom";

interface IssueItemProps {
  issue: any;
  index: number;
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue, index }) => {
  if (index % 5 === 4) {
    return <Ad />;
  }

  return (
    <div className="issue-item">
      <Link to={`/issue/${issue.number}`}>
        <span>#{issue.number}</span>
        <span>{issue.title}</span>
        <span>{issue.user.login}</span>
        <span>{new Date(issue.created_at).toLocaleDateString()}</span>
        <span>{issue.comments}</span>
      </Link>
    </div>
  );
};
