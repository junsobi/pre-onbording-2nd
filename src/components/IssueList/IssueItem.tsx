interface IssueItemProps {
  issue: any;
  index: number;
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue, index }) => (
  <div key={issue.id} className="issue-item">
    <span>#{issue.number}</span>
    <span>{issue.title}</span>
    <span>{issue.user.login}</span>
    <span>{new Date(issue.created_at).toLocaleDateString()}</span>
    <span>{issue.comments}</span>
    {(index + 1) % 5 === 0 && <div className="ad">Ad Here!</div>}
  </div>
);
