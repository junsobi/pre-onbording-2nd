import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";
import { useIssuess } from "../../context/IssueContext";
import UserLink from "../userLink";
import Header from "../Header/Header";
import "github-markdown-css/github-markdown.css";
import { BiMessageSquareDetail } from "react-icons/bi";
import LoadingComponent from "../LodingComponent";

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
  }, [issueNumber, setSelectedIssueDetail, setSelectedIssueNumber]);

  if (!selectedIssueDetail) {
    return <LoadingComponent width={"full"} height={"full"} />;
  }
  const formattedDate = new Date(
    selectedIssueDetail.created_at
  ).toLocaleDateString();

  return (
    <div className="border z-50 ">
      <Header />
      <div className="flex flex-col">
        <div className="w-full px-4 py-6 flex items-center border-b-2 justify-between">
          <UserLink
            login={selectedIssueDetail.user.login}
            className="flex-none w-1/10"
          >
            <img
              src={selectedIssueDetail.user.avatar_url}
              alt={`${selectedIssueDetail.user.login}'s avatar`}
              className="h-12 w-12 rounded-full mr-4"
            />
          </UserLink>
          <div className="flex-grow w-full">
            <span className="text-lg font-bold">
              {selectedIssueDetail.title}
            </span>
            <div className="text-sm mt-2">
              #{selectedIssueDetail.number}, opend on : {formattedDate}, by{" "}
              <UserLink login={selectedIssueDetail.user.login}>
                {selectedIssueDetail.user.login}
              </UserLink>
            </div>
            <div className="flex gap-1 items-center text-sm">
              {" "}
              <BiMessageSquareDetail size={20} />
              {` ${selectedIssueDetail.comments}`}
            </div>
          </div>
        </div>
        <div className="p-5">
          <ReactMarkdown className="markdown-body" remarkPlugins={[gfm]}>
            {selectedIssueDetail.body}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default IssueDetail;
