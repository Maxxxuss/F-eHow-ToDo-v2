import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import NotesDashboardPage from "./components/NotesDashboard";
import ProjectDashboard from "./components/ProjectDash/ProjectDashboard";
import store from "./store/configureStore";
// import "./styles/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DocumentDash from "./components/noteDocs/DocumentDash/documentDash";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<NotesDashboardPage />} />
        <Route path="/proDash" element={<ProjectDashboard />} />
        <Route path="/documentDash" element={<DocumentDash />} />
      </Routes>
    </Router>
  </Provider>
);
