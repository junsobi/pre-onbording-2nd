import { useEffect } from "react";
import { getIssueDetail } from "../api";

const useFetchIssueDetail = (
  selectedIssueNumber: number | null,
  setSelectedIssueDetail: (issueDetail: any) => void
) => {
  useEffect(() => {
    if (selectedIssueNumber) {
      getIssueDetail(selectedIssueNumber)
        .then((issueInfo) => {
          setSelectedIssueDetail(issueInfo);
        })
        .catch((error) => {
          console.error("Error fetching issue detail:", error);
        });
    }
  }, [selectedIssueNumber, setSelectedIssueDetail]);
};

export default useFetchIssueDetail;
