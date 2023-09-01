import React, { createContext, useContext, ReactNode } from "react";
import useFetchFirstIssues from "../api/hooks/useFetchFirstIssues";
import useFetchIssueDetail from "../api/hooks/useFetchIssueDetail";
import ErrorComponent from "../components/ErrorComponent";

interface IssueContextType {
  organization: string;
  repository: string;
  issues: any[];
  selectedIssueNumber: number | null;
  selectedIssueDetail: any | null;
  setSelectedIssueDetail: (issueDetail: any) => void;
  setIssues: React.Dispatch<React.SetStateAction<any[]>>;
  setSelectedIssueNumber: (issueNumber: number) => void;
  isListLoading: boolean;
  setIsListLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isDetailLoading: boolean;
  setIsDetailLoading: React.Dispatch<React.SetStateAction<boolean>>;
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

  const [isListLoading, setIsListLoading] = React.useState<boolean>(false);
  const [isDetailLoading, setIsDetailLoading] = React.useState<boolean>(false);

  const [listError] = useFetchFirstIssues(setIssues);

  const [detailError] = useFetchIssueDetail(
    selectedIssueNumber,
    setSelectedIssueDetail
  );

  if (listError || detailError) {
    return (
      <ErrorComponent message={listError?.message || detailError?.message} />
    );
  }

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
        isListLoading,
        setIsListLoading,
        isDetailLoading,
        setIsDetailLoading,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};

export const useIssuess = (): IssueContextType => {
  const context = useContext(IssueContext);
  if (!context) {
    throw new Error("useissuess must be used within an issuessprovider");
  }
  return context;
};
