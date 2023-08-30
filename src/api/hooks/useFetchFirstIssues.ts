import { useEffect } from "react";
import { getIssueList } from "../api";

const useFetchFirstIssues = (
  setIssues: React.Dispatch<React.SetStateAction<any[]>>
) => {
  useEffect(() => {
    getIssueList(1)
      .then((firstPageIssues) => {
        setIssues(firstPageIssues);
      })
      .catch((error) => {
        console.error("Error fetching first page:", error);
      });
  }, [setIssues]);
};

export default useFetchFirstIssues;
