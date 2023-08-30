import React, { createContext, useContext, ReactNode, useEffect } from "react";
import useFetchFirstIssues from "../api/hooks/useFetchFirstIssues";
import useFetchIssueDetail from "../api/hooks/useFetchIssueDetail";

interface IssueContextType {
  organization: string;
  repository: string;
  issues: any[]; // 이슈 데이터
  selectedIssueNumber: number | null; // 선택된 이슈 번호
  selectedIssueDetail: any | null; // 선택된 이슈 상세 정보
  setSelectedIssueDetail: (issueDetail: any) => void;
  setIssues: React.Dispatch<React.SetStateAction<any[]>>;
  setSelectedIssueNumber: (issueNumber: number) => void;
}

const IssueContext = createContext<IssueContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issues, setIssues] = React.useState<any[]>([]);
  const [selectedIssueNumber, setSelectedIssueNumber] = React.useState<
    number | null
  >(null);
  const [selectedIssueDetail, setSelectedIssueDetail] = React.useState<
    any | null
  >(null);

  useFetchFirstIssues(setIssues);
  useFetchIssueDetail(selectedIssueNumber, setSelectedIssueDetail);

  return (
    <IssueContext.Provider
      value={{
        organization: "facebook",
        repository: "react",
        issues,
        selectedIssueNumber,
        selectedIssueDetail,
        setSelectedIssueDetail,
        setIssues,
        setSelectedIssueNumber,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export const useIssuess = (): IssueContextType => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error("useIssuess must be used within an IsuuessProvider");
  }
  return context;
};
