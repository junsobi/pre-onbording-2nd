import { useRef, useState, useEffect, useCallback } from "react";
import useFetchNextPage from "../../../api/hooks/useFetchNextPage";

const useInfiniteScrollIssues = () => {
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const [fetchNextPage, error] = useFetchNextPage();

  useEffect(() => {
    fetchNextPage(page);
  }, [page, fetchNextPage]);

  const lastIssueRef = useCallback((node: HTMLDivElement | null) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setPage((prevPrev) => prevPrev + 1);
    });

    if (node) observer.current.observe(node);
  }, []);

  return { lastIssueRef, error };
};

export default useInfiniteScrollIssues;
