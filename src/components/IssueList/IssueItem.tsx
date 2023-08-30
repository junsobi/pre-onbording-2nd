import React from "react";
import Ad from "../Ad";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import UserLink from "../userLink";

interface IssueItemProps {
  issue: any;
  index: number;
}

export const IssueItem: React.FC<IssueItemProps> = ({ issue, index }) => {
  if (index % 5 === 4) return <Ad />;

  const formattedDate = new Date(issue.created_at).toLocaleDateString();

  return (
    <Link
      to={`/issue/${issue.number}`}
      className="w-full px-4 py-6 flex items-center border-b-2 justify-between hover:bg-gray-100 transition-colors duration-200"
    >
      <UserLink login={issue.user.login} className="flex-none w-1/10">
        <img
          src={issue.user.avatar_url}
          alt={`${issue.user.login}'s avatar`}
          className="h-12 w-12 rounded-full mr-4"
        />
      </UserLink>

      <div className="flex-grow w-8/10">
        <span className="text-xl font-bold">{issue.title}</span>
        <div className="text-sm mt-2">
          #{issue.number}, opend on : {formattedDate}, by{" "}
          <UserLink login={issue.user.login}>{issue.user.login}</UserLink>
        </div>
      </div>

      <div className="flex-none w-1/10 flex justify-center gap-2 items-center">
        <BiMessageSquareDetail size={24} />
        {` ${issue.comments}`}
      </div>
    </Link>
  );
};
