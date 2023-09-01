import { useEffect, useState } from "react";
import { getIssueList } from "../api";
import { useIssuess } from "../../context/IssueContext";

const useFetchNextPage = (): [(page: number) => void, Error | null] => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState<Error | null>(null);
  const { setIssues, setIsListLoading } = useIssuess();

  useEffect(() => {
    if (page === 1) return;

    const fetchNextPage = async () => {
      setIsListLoading(true);
      try {
        const newIssues = await getIssueList(page);
        setIssues((prevIssues) => [...prevIssues, ...newIssues]);
      } catch (error) {
        console.error("Error fetching next page:", error);
        setError(error as Error); // 오류 발생 시 에러 상태 업데이트
      }
      setIsListLoading(false);
    };

    fetchNextPage();
  }, [page, setIssues, setIsListLoading]);

  return [setPage, error]; // setPage 함수와 함께 error도 반환
};

export default useFetchNextPage;
