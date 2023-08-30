import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import IssueList from "../components/IssueList/IssueList";
import { useIssuess } from "../context/IssueContext";
import IssueDetail from "../components/IssueDetail/IssueDetail";
import IssueListLayout from "../layout/IssueListLayout";
import { MdClose } from "react-icons/md";

const IssueListPage: React.FC = () => {
  const { setSelectedIssueNumber } = useIssuess();
  const { issueNumber }: any = useParams();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (issueNumber) {
      setIsOpen(true);
    }
  }, [issueNumber]);

  return (
    <div className="flex">
      <IssueListLayout>
        <IssueList />
      </IssueListLayout>
      <div
        className={`fixed transition-transform duration-500 ease-in-out right-0 w-1/2 h-full overflow-auto bg-white border-l z-50 ${
          isOpen ? "-translate-x-50" : "translate-x-full"
        }`}
      >
        <div className="fixed top-5 right-5 z-50">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2  rounded-full z-50"
            onClick={() => {
              setIsOpen(false);
              setSelectedIssueNumber(0);
              navigate("/");
            }}
          >
            <MdClose size={24} />
          </button>
        </div>

        {isOpen && <IssueDetail />}
      </div>
    </div>
  );
};

export default IssueListPage;
