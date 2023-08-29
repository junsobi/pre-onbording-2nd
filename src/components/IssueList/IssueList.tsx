import { IssueItem } from "./IssueItem";
import useInfiniteScrollIssues from "./hooks/useInfiniteScrollIssues";

const IssueList: React.FC = () => {
  const issues = useInfiniteScrollIssues();

  return (
    <div>
      {issues.map((issue, index) => (
        <IssueItem issue={issue} index={index} />
      ))}
    </div>
  );
};

export default IssueList;
