import React from "react";
import { IssueItem } from "./IssueItem";
import { useIssuess } from "../../context/IssueContext";
import useInfiniteScrollIssues from "./hooks/useInfiniteScrollIssues";
import Ad from "../Ad";
import ErrorComponent from "../ErrorComponent";
import LoadingComponent from "../LodingComponent";

const IssueList: React.FC = () => {
  const { issues, isListLoading } = useIssuess();
  const { lastIssueRef, error } = useInfiniteScrollIssues();

  return (
    <div>
      {issues.flatMap((item, index) => {
        const element = <IssueItem issue={item} key={`${item.id}-${index}`} />;
        const isLastElement = index === issues.length - 1;

        if ((index + 1) % 4 === 0) {
          return [
            element,
            <div key={`ad-${index}`} ref={isLastElement ? lastIssueRef : null}>
              <Ad />
            </div>,
          ];
        }

        return (
          <div
            key={`${item.id}-${index}`}
            ref={isLastElement ? lastIssueRef : null}
          >
            {element}
          </div>
        );
      })}

      {isListLoading && <LoadingComponent height={10} width={"full"} />}
      {error && <ErrorComponent message={error.message} />}
    </div>
  );
};

export default IssueList;
