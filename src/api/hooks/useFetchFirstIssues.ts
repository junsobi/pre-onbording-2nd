import { useEffect, useState } from "react";
import { getIssueList } from "../api";

const useFetchFirstIssues = (
  setIssues: React.Dispatch<React.SetStateAction<any[]>>
): [Error | null] => {
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    getIssueList(1)
      .then((firstPageIssues) => {
        setIssues(firstPageIssues);
      })
      .catch((err) => {
        console.error("Error fetching first page:", err);
        setError(err as Error); // 오류 발생 시 에러 상태 업데이트
      });
  }, [setIssues]);

  return [error];
};

export default useFetchFirstIssues;
