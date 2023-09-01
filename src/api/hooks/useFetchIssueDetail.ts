import { useEffect, useState } from "react";
import { getIssueDetail } from "../api";

const useFetchIssueDetail = (
  selectedIssueNumber: number | null,
  setSelectedIssueDetail: (issueDetail: any) => void
): [Error | null] => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (selectedIssueNumber) {
      getIssueDetail(selectedIssueNumber)
        .then((issueInfo) => {
          setSelectedIssueDetail(issueInfo);
        })
        .catch((err) => {
          console.error("Error fetching issue detail:", err);
          setError(err as Error);
        });
    }
  }, [selectedIssueNumber, setSelectedIssueDetail]);

  return [error];
};

export default useFetchIssueDetail;
