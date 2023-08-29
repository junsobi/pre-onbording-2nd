import { useState, useEffect } from "react";
import { useIssues } from "../../../context/IssueContext";
import { getIssueList } from "../../../api";
import { throttle } from "../../../utils/throttle";

const useInfiniteScrollIssues = () => {
  const { issues, setIssues } = useIssues();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssues = async () => {
    setIsLoading(true);
    try {
      const newIssues = await getIssueList(page);
      setIssues((prevIssues) => [...prevIssues, ...newIssues]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
    setIsLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    fetchIssues();
  };

  const throttledHandleScroll = throttle(handleScroll, 200);

  useEffect(() => {
    fetchIssues();
    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return issues;
};

export default useInfiniteScrollIssues;
