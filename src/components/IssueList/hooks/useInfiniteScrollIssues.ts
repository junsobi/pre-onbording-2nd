import { useRef, useState, useEffect, useCallback } from "react";
import { useIssuess } from "../../../context/IssueContext";
import useFetchNextPage from "../../../api/hooks/useFetchNextPage";

const useInfiniteScrollIssues = () => {
  const { setIssues } = useIssuess();
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchNextPage = useFetchNextPage(setIssues);

  useEffect(() => {
    fetchNextPage(page);
  }, [page, fetchNextPage]);

  const lastIssueRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prevPage) => prevPage + 1);
    });

    if (node) observer.current.observe(node);
  }, []);

  return lastIssueRef;
};

export default useInfiniteScrollIssues;
