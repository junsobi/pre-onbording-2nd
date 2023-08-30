import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useIssuess } from "../../context/IssueContext";

const IssueDetail: React.FC = () => {
  const {
    setSelectedIssueNumber,
    selectedIssueDetail,
    setSelectedIssueDetail,
  } = useIssuess();
  const { issueNumber }: any = useParams();

  useEffect(() => {
    setSelectedIssueDetail(null);
    setSelectedIssueNumber(issueNumber);
  }, [issueNumber]);

  if (!selectedIssueDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Issue Detail</h2>
      <div>Issue Number: #{selectedIssueDetail.number}</div>
      <div>Title: {selectedIssueDetail.title}</div>
      <div>Author: {selectedIssueDetail.user.login}</div>
      <div>
        Created At:{" "}
        {new Date(selectedIssueDetail.created_at).toLocaleDateString()}
      </div>
      <div>Comment Count: {selectedIssueDetail.comments}</div>
      <div>
        Author Profile Image:{" "}
        <img src={selectedIssueDetail.user.avatar_url} alt="Author Profile" />
      </div>
      <div>Body: {selectedIssueDetail.body}</div>
    </div>
  );
};

export default IssueDetail;
