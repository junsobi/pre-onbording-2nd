import React from "react";
import { IssueItem } from "./useIssueItem";
import { useIssuess } from "../../context/IssueContext";
import useInfiniteScrollIssues from "./hooks/useInfiniteScrollIssues";

const IssueList: React.FC = () => {
  const { issues } = useIssuess();
  const lastIssueRef = useInfiniteScrollIssues();

  return (
    <div>
      {issues.map((issue, index) => (
        <React.Fragment key={`${issue.id}-${index}`}>
          <IssueItem issue={issue} index={index} />
          {index === issues.length - 1 && <div ref={lastIssueRef} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default IssueList;
