import React from "react";
import { useIssues } from "../../context/IssueContext";

const IssueDetail: React.FC = () => {
  const { selectedIssue } = useIssues();

  if (!selectedIssue) {
    return <div>No issue selected.</div>;
  }

  return (
    <div>
      <h2>Issue Detail</h2>
      <div>Issue Number: #{selectedIssue.number}</div>
      <div>Title: {selectedIssue.title}</div>
      <div>Author: {selectedIssue.user.login}</div>
      <div>
        Created At: {new Date(selectedIssue.created_at).toLocaleDateString()}
      </div>
      <div>Comment Count: {selectedIssue.comments}</div>
      <div>
        Author Profile Image:{" "}
        <img src={selectedIssue.user.avatar_url} alt="Author Profile" />
      </div>
      <div>Body: {selectedIssue.body}</div>
    </div>
  );
};

export default IssueDetail;
