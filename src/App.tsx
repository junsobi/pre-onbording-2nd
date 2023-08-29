import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IssueProvider } from "./context/IssueContext";
import Header from "./components/Header";
import IssueListPage from "./pages/IssueListPage";
import IssueDetailPage from "./pages/IssueDetailPage";
import "./styles/tailwind.css";

function App() {
  return (
    <IssueProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<IssueListPage />} />
          <Route path="/issue/:issueNumber" element={<IssueDetailPage />} />
        </Routes>
      </Router>
    </IssueProvider>
  );
}

export default App;
