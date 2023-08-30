import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IssueProvider } from "./context/IssueContext";
import IssueListPage from "./pages/IssueListpage";
import "./styles/tailwind.css";

function App() {
  return (
    <IssueProvider>
      <Router>
        <Routes>
          {/* 이슈 번호가 있든 없든 모두 IssueListPage로 라우팅합니다 */}
          <Route path="/" element={<IssueListPage />} />
          <Route path="/issue/:issueNumber" element={<IssueListPage />} />
        </Routes>
      </Router>
    </IssueProvider>
  );
}

export default App;
