import React, { createContext, useContext, ReactNode } from "react";

interface IssueContextType {
  organization: string;
  repository: string;
  issues: any[]; // 이슈 데이터
  selectedIssue: any | null; // 선택된 이슈
  setIssues: (issues: any[]) => void;
  setSelectedIssue: (issue: any) => void;
}

const IssueContext = createContext<IssueContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const IssueProvider: React.FC<Props> = ({ children }) => {
  const [issues, setIssues] = React.useState<any[]>([]);
  const [selectedIssue, setSelectedIssue] = React.useState<any | null>(null);

  return (
    <IssueContext.Provider
      value={{
        organization: "facebook",
        repository: "react",
        issues,
        selectedIssue,
        setIssues,
        setSelectedIssue,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export const useIssues = (): IssueContextType => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error("useIssues must be used within an IssueProvider");
  }
  return context;
};
