import { useEffect, useState } from "react";
import { getIssueList } from "../api";

const useFetchNextPage = (
  setIssues: React.Dispatch<React.SetStateAction<any[]>>
) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) return;

    const fetchNextPage = async () => {
      try {
        const newIssues = await getIssueList(page);
        setIssues((prevIssues) => [...prevIssues, ...newIssues]);
      } catch (error) {
        console.error("Error fetching next page:", error);
      }
    };

    fetchNextPage();
  }, [page, setIssues]);

  return setPage;
};

export default useFetchNextPage;
